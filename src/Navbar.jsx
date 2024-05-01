import React from 'react'
import CardComponent from './Components/Card'

const Navbar = () => {
  return (
    <div className='flex flex-col w-full'>
         <div className='mt-10'>
           <ul className='flex flex-row gap-x-10' >
            <li>Programs</li>
            <li>Bookmars</li>
            <li>Pending Invitations</li>
            <li>Collaboration</li>
           </ul>
         </div>

         <div className='bg-blue-700 h-30  '>
          <div className='flex flex-col ml-10'>
              <p className='text-white text-lg'>Find the best Opportunities for your skills and wallet</p>
              <h1 className='text-3xl text-white font-bold'>Opportunity Discovery</h1>

                           {/* serarch section start  */}
               <div className='container p-4 w-[90%] h-20 bg-white mt-2 ml-5 '>

                
                <div className='flex flex-row justify-start border-4' >

                  <div className=' container  '>
                   <div className='flex flex-col'>
                         <p className='text-sm'>We have 444 Opportunities for you</p>
                         <input type="text" placeholder='Search for program'  className='border-2 border-gray-100 w-full '/>
                    </div>
                  </div>


                  <div className='container p-4 text-black'>

                    <div className='flex flex-row'>

                       <div className=' flex flex-col p-2 '>
                         <p className='text-sm text-black'>Program type</p>
                          <input type="text" placeholder='All programs'  className='border-2 border-gray-100 rounded-md'/>
                       </div>
                       <div className='flex flex-col p-2'>
                         <p className='text-sm'>Assets type</p>
                          <input type="text" placeholder='All assets' className='border-2 border-gray-100  rounded-md ' />
                       </div>
                       <div className='flex flex-col p-2'>
                         <p className='text-sm'>Industry</p>
                          <input type="text" placeholder='All industries'  className='border-2 border-gray-100  rounded-md '/>
                       </div> 
                       <div>

                        <button className='bg-blue-700  rounded-lg text-white p-1 mt-6 '>Search</button>
                       </div>
                
                  </div>
                    </div>

            </div>

               </div>

              
           {/* search section end  */}

          </div>
         </div>
              <div className='flex flex-row gap-2 mt-20 ml-10'>
                  <span>Popular now</span>
                  <span className='bg-sky-300 rounded-md p-1'> BBP</span>
                  <span className='bg-sky-300 rounded-md p-1'>Domain</span>
                  <span className='bg-sky-300 rounded-md p-1'>Internet& Online Service</span>
                  <span className='bg-sky-300 rounded-md p-1'>Temu</span>
              </div>

              <span className='ml-10'>

                 Campaigns & top-paying Opportunities
              </span>
          <div className='mt-10'>
             <CardComponent/>
          </div>
          







          
             



          </div>
          

          

          

    
  )
}

export default Navbar