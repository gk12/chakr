const Dataset = require('../Model/data');
const moment = require('moment');
function formatNumberInK(value) {
  const roundedValue = Math.round(value);

  if (roundedValue >= 1000) {
    return roundedValue / 1000;
  }

  return roundedValue;
}
const profitPercentage = async (req, res) => {
  const currentYear = moment().year() - 1;
  const eightYearsAgo = currentYear - 8;
  try {
    const result = await Dataset.aggregate([
      {
        $project: {
          Timestamp: {
            $dateFromString: {
              dateString: '$Timestamp',
              format: '%Y-%m-%d %H:%M:%S',
            },
          },
          ProfitPercentage: 1,
        },
      },
      {
        $match: {
          Timestamp: {
            $gte: new Date(`${eightYearsAgo}-01-01`),
            $lte: new Date(),
          },
          ProfitPercentage: { $gt: 0 },
        },
      },
      {
        $group: {
          _id: {
            year: { $year: '$Timestamp' },
          },
          sumProfitPercentage: { $sum: '$ProfitPercentage' },
        },
      },
      {
        $project: {
          _id: 0,
          year: '$_id.year',
          sumProfitPercentage: 1,
        },
      },
      {
        $sort: {
          year: 1,
        },
      },
    ]);

    const allYears = Array.from(
      { length: 8 },
      (_, index) => currentYear - index
    );

    let year = [];
    let profit = [];

    allYears.forEach((desiredYear) => {
      const foundData = result.find((data) => data.year === desiredYear);

      if (foundData) {
        year.push(String(foundData.year).slice(-2));
        profit.push(formatNumberInK(foundData.sumProfitPercentage));
      } else {
        year.push(String(desiredYear).slice(-2));
        profit.push(0);
      }
    });

    res.json({
      year,
      profit,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = profitPercentage;
