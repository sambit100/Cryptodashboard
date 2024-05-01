import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import img from '../assets/polygon.png';
import img1 from '../assets/crypto1.png';
import img2 from '../assets/coinbase.png';
import img3 from '../assets/gram.png';
import BugReport from '@mui/icons-material/BugReport';
import GroupIcon from '@mui/icons-material/Group';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
const CardComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
      {/* card component */}

          <div className='flex flex-col'>
         <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-start'>

                 <img src={img2} alt="" className='w-10 h-10 rounded-xl border-2  p-2' />
                 <h1>Coinbase</h1>
            </div>
                <div className='flex flex-row justify-end'>
                    <span><StarOutlineIcon/></span>
                    <span><MoreVertIcon/></span>
                </div>

         </div>

         <hr />

              <div className='flex flex-col gap-5'>
                  <div className='flex flex-col mt-10'>
                    <p>Bug Bounty Program</p>
                     <h1>Retesting.Collaboration</h1>

                  </div>
                    <div className='flex flex-col-2 mt-5'>
                        <span className='flex flex-row gap-1 text-[12px]'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>

              </div>

          <div className='flex flex-col mt-4'>
             {/* goldstand  */}
             <span className='text-green-500 font-bold'>$200-$1M</span>
             <span className='flex flex-row mt-4 gap-4'>
                <span><BugReport/> 795</span>
                <span><GroupIcon/> 401</span>
                <span><FiberManualRecordIcon className='text-green-500'/> 97%</span>

             </span>

          </div>
          <div className='p-4 w-full border-2 rounded-md border-blue-400 mt-5 text-center hover:bg-blue-500'>
             <button className='text-blue-400  '>See Details </button>
          </div>




         
         </div>
         {/* card component end  */}
         
        {/* <h2 className="text-xl font-semibold mb-2">Card 1</h2>
        <p>This is the content of card 1.</p> */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
      {/* card component */}

          <div className='flex flex-col'>
         <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-start'>

                 <img src={img1} alt="" className='w-10 h-10 rounded-xl border-2  p-2' />
                 <h1>Crypto.com</h1>
            </div>
                <div className='flex flex-row justify-end'>
                    <span><StarOutlineIcon/></span>
                    <span><MoreVertIcon/></span>
                </div>

         </div>

         <hr />

              <div className='flex flex-col gap-5 '>
                  <div className='flex flex-col mt-10'>
                    <p>Bug Bounty Program</p>
                     <h1>Retesting.Collaboration</h1>

                  </div>
                    <div className='flex flex-col-2 mt-5'>
                        <span className='flex flex-row gap-1 text-[12px]'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        
                         
                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>

              </div>

          <div className='flex flex-col mt-4'>
             {/* goldstand  */}
             <span className='text-green-500 font-bold'>Up to $160k <span className='text-purple'>(x2 more)</span> </span>
             <span className='flex flex-row mt-4 gap-4'>
                <span><BugReport/>29</span>
                <span><GroupIcon/> 15</span>
                <span><FiberManualRecordIcon className='text-green-500'/> 97%</span>

             </span>

          </div>
          <div className='p-4 w-full border-2 rounded-md border-blue-400 mt-5 text-center hover:bg-blue-500'>
             <button className='text-blue-400  '>See Details </button>
          </div>




         
         </div>
         {/* card component end  */}
         
        {/* <h2 className="text-xl font-semibold mb-2">Card 1</h2>
        <p>This is the content of card 1.</p> */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
      {/* card component */}

          <div className='flex flex-col'>
         <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-start'>

                 <img src={img3} alt="" className='w-10 h-10 rounded-xl border-2  p-2' />
                 <h1>Grammarly</h1>
            </div>
                <div className='flex flex-row justify-end'>
                    <span><StarOutlineIcon/></span>
                    <span><MoreVertIcon/></span>
                </div>

         </div>

         <hr />

              <div className='flex flex-col gap-5 '>
                  <div className='flex flex-col mt-10'>
                    <p>Bug Bounty Program</p>
                     <h1>Retesting.Collaboration</h1>

                  </div>
                    <div className='flex flex-col-2 mt-5'>
                        <span className='flex flex-row gap-1 text-[12px]'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>

              </div>

          <div className='flex flex-col mt-4'>
             {/* goldstand  */}
             <span className='text-green-500 font-bold'>$50-$100k</span>
             <span className='flex flex-row mt-4 gap-4'>
                <span><BugReport/>218</span>
                <span><GroupIcon/>119</span>
                <span><FiberManualRecordIcon className='text-green-500'/> 99%</span>

             </span>

          </div>
          <div className='p-4 w-full border-2 rounded-md border-blue-400 mt-5 text-center hover:bg-blue-500'>
             <button className='text-blue-400  '>See Details </button>
          </div>




         
         </div>
         {/* card component end  */}
         
        {/* <h2 className="text-xl font-semibold mb-2">Card 1</h2>
        <p>This is the content of card 1.</p> */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
      {/* card component */}

          <div className='flex flex-col'>
         <div className='flex flex-row justify-between'>
            <div className='flex flex-row justify-start'>

                 <img src={img} alt="" className='w-10 h-10 rounded-xl border-2  p-2' />
                 <h1>Polygon Technology</h1>
            </div>
                <div className='flex flex-row justify-end'>
                    <span><StarOutlineIcon/></span>
                    <span><MoreVertIcon/></span>
                </div>

         </div>

         <hr />

              <div className='flex flex-col gap-5'>
                  <div className='flex flex-col mt-10'>
                    <p>Bug Bounty Program</p>
                     <h1>Retesting.Collaboration</h1>

                  </div>
                    <div className='flex flex-col-2 mt-5'>
                        <span className='flex flex-row gap-1 text-[12px]'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>
                    <div className='flex flex-col-2 text-[12px]'>
                        <span className='flex flex-row gap-1'>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Domain 14</span>
                            <span className='bg-sky-300 text-blue-600 rounded-xl text-center p-1'>Other Asset 5</span>
                        </span>
                        

                    </div>

              </div>

          <div className='flex flex-col mt-4'>
             {/* goldstand  */}
             <span className='text-green-500 font-bold'>$200-$1M</span>
             <span className='flex flex-row mt-4 gap-4'>
                <span><BugReport/>247</span>
                <span><GroupIcon/>121</span>
                <span><FiberManualRecordIcon className='text-green-500'/> 96%</span>

             </span>

          </div>
          <div className='p-4 w-full border-2 rounded-md border-blue-400 mt-5 text-center hover:bg-blue-500'>
             <button className='text-blue-400  '>See Details </button>
          </div>




         
         </div>
         
      </div>
      
    </div>
  );
};

export default CardComponent;
