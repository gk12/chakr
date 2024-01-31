import logo from './logo.svg';
import './App.css';
import LineChart from './component/LineChart';
import Navbar from './component/Navbar';
import arrowIcon from './images/arrow.svg';
import frameIcon from './images/Frame.svg';
import user1 from './images/user1.png';
import user2 from './images/user2.png';
import user3 from './images/user3.png';
import user4 from './images/user4.png';
import messageIcon from './images/message.svg';
import starIcon from './images/star.svg';
import pencilIcon from './images/pencil.svg';
import lineIcon from './images/Line.svg';
import threedotIcon from './images/threedot.svg';
import { LuMoveRight } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

function App() {
  const listData = [
    {
      name: 'Chris Friedkly',
      business: 'Supermarket Villanova',
      image: user1
    },
    {
      name: 'Maggie Johnson',
      business: 'Oasis Organic Inc.',
      image: user2
    },
    {
      name: 'Gael Harry',
      business: 'New York Finest Fruits',
      image: user3
    },
    {
      name: 'Jenna Sullivan',
      business: 'Walmart',
      image: user4
    }
  ]

  const [isHovered, setIsHovered] = useState(false);
  const [isHoverIndex, setIsHoverIndex] = useState(null);


  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setIsHoverIndex(index)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsHoverIndex(null)
  };

  return (
    <div className='min-h-screen flex bg-[#F6F6F3]'>
      <Navbar />
      <div className='w-[82vw] flex flex-col pr-5'>
        <div className='w-full flex mr-5 ml-1 my-3'>
          <div className='w-[37.5%] h-fit bg-white mr-3 rounded-xl p-5'>
            <h1 className='text-xl font-semibold'>
              Revenues
            </h1>
            <div className='flex items-center mt-4'>
              <h1 className='text-5xl font-medium mr-5'>15%</h1>
              <img src={arrowIcon} alt='logo' className='w-4' />
            </div>
            <p className='text-sm text-[#454545] mt-2'>Increase compared to last week</p>
            <button className='flex items-center text-sm text-[#734A00] mt-12'>
              <p className='mr-2'>
                Revenues report
              </p>
              <div>
                <LuMoveRight size={10} />
              </div>
            </button>
          </div>
          <div className='w-[37.5%] h-fit bg-white mr-3 rounded-xl p-5'>
            <h1 className='text-xl font-semibold'>
              Lost deals
            </h1>
            <div className='flex items-center mt-4'>
              <h1 className='text-5xl font-medium mr-5'>4%</h1>
            </div>
            <p className='text-sm text-[#454545] mt-2'>You closed 96 out of 100 deals</p>
            <button className='flex items-center text-sm text-[#734A00] mt-12'>
              <p className='mr-2'>
                All deals
              </p>
              <div>
                <LuMoveRight size={10} />
              </div>
            </button>
          </div>
          <div className='w-[25%] flex flex-col items-center justify-center h-fit bg-white rounded-xl p-5'>
            <h1 className='text-xl text-center font-semibold'>
              Quarter goal
            </h1>
            <img src={frameIcon} alt='logo' className='h-20 w-60 mt-5' />
            <button className='flex items-center text-sm text-[#734A00] mt-10'>
              <p className='mr-2'>
                All goals
              </p>
              <div>
                <LuMoveRight size={10} />
              </div>
            </button>
          </div>
        </div>
        <div className='w-full flex mr-3 ml-1 my-3'>
          <div className='w-1/2 h-fit bg-white mr-3 rounded-xl p-5'>
            <div className='flex justify-between'>
              <h1 className='text-xl font-semibold'>
                Customers
              </h1>
              <div className='flex items-center'>
                <p className='text-[#454545] text-sm'>
                  Sort by {' '}
                  <span className='text-black font-medium'>
                    Newest
                  </span>
                </p>
                <div>
                  <IoIosArrowDown size={15} className='text-[#454545] mx-2' />
                </div>
              </div>
            </div>
            <div className='mt-5'>
              {listData.map((item, index) => (
                <div
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                  key={index}
                  className='flex items-center px-3 py-4 rounded-2xl hover:bg-[#FFF7E8]'
                >
                  <img src={item.image} alt='logo' className='w-10 h-10 mr-3' />
                  <div>
                    <p className='text-sm font-medium'>
                      {item.name}
                    </p>
                    <p className='text-[#454545] text-xs'>
                      {item.business}
                    </p>
                  </div>
                  {isHovered && index === isHoverIndex && (
                    <div className='flex ml-auto'>
                      <button>
                        <img src={messageIcon} alt='logo' className='mr-5' />
                      </button>
                      <button>
                        <img src={starIcon} alt='logo' className='mr-5' />
                      </button>
                      <button>
                        <img src={pencilIcon} alt='logo' className='mr-5' />
                      </button>
                      <img src={lineIcon} alt='logo' className='mr-5' />
                      <button>
                        <img src={threedotIcon} alt='logo' className='mr-5' />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <button className='flex items-center text-sm text-[#734A00] mt-10 ml-4'>
              <p className='mr-2'>
                All customers
              </p>
              <div>
                <LuMoveRight size={10} />
              </div>
            </button>
          </div>
          <div className='w-1/2'>
            <div className='w-full bg-white rounded-xl p-5'>
              <div className='flex justify-between'>
                <h1 className='text-xl font-semibold'>
                  Growth
                </h1>
                <div className='flex items-center'>
                  <p className='text-[#454545] text-sm'>
                    Yearly
                  </p>
                  <div>
                    <IoIosArrowDown size={15} className='text-[#454545] mx-2' />
                  </div>
                </div>
              </div>
              <div className='p-5 h-[30vh]'>
                <LineChart />
              </div>
            </div>
            <div className='h-fit bg-white rounded-xl p-5 mt-3'>
              jj
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
