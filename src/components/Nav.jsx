import React from 'react'

function Nav() {
  
  return (
    <div className='w-[30%] border rounded-lg mt-2 px-[3rem]'>
        <div className='font-bold mt-[2rem] mb-[2rem] text-lg'>Recommended Blogs</div>
        <div className='mb-[1rem]'>
          <div className='flex w-[5rem] justify-between'><img src="https://img.freepik.com/premium-photo/full-length-woman-exercising-field_1048944-30351094.jpg?t=st=1729836810~exp=1729837410~hmac=e26c1d0a95c85f7d9e53d92d81db9385f2422852b2ee31d1629408a3b4eed377" alt="img" className='w-[2rem] h-[2rem] rounded-full object-cover object-center mr-4'/>Anthony_1</div>
          <div className='font-semibold'>I won my first Baseball tournament</div>
        </div>
        <div className='mb-[1rem]'>
          <div className='flex w-[5rem] justify-between'><img src="https://img.freepik.com/free-photo/monochrome-portrait-person-surfing-amongst-waves_23-2151305811.jpg?ga=GA1.1.166255932.1719310287&semt=ais_hybrid" alt="img" className='w-[2rem] h-[2rem] rounded-full object-center mr-4'/>Surfer07</div>
          <div className='font-semibold'>Surfing is fun and great adventure sport.</div>
        </div>   
        <div className='mb-[1rem]'>
          <div className='flex w-[5rem] justify-between'><img src="https://img.freepik.com/free-photo/person-washing-carrots-kitchen_23-2150316427.jpg?t=st=1729818234~exp=1729818834~hmac=dc887ddf0639733b01086e0562f641f706fc63474bc2dd67c792568b801bc0d6" alt="img" className='w-[2rem] h-[2rem] rounded-full object-cover object-center mr-4'/>Xyzzz</div>
          <div className='font-semibold'>Here are some tips to maintain your health in 2024</div>
        </div>    
        <div className='mb-[1rem]'>
          <div className='flex w-[5rem] justify-between'><img src="https://img.freepik.com/free-photo/3d-rendering-hydraulic-elements_23-2149333332.jpg?t=st=1729835567~exp=1729836167~hmac=e559f34ebbb18efa6a42667b6944da3c5bcf679fbedcfdd01d692f7789a9802f" alt="img" className='w-[2rem] h-[2rem] rounded-full object-cover object-center mr-4' />Techie_pvt</div>
          <div className='font-semibold'>Some of the best Technologies launched recently in 2024</div>
        </div>
        <div className='border mb-[2rem]'>
          <div className='font-semibold px-2 text-lg'>Recommended Topics</div>
          <div className='border p-[1.5rem]'>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Lifestyle</button>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Food</button>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Sports</button>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Education</button>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Economics</button>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Movies</button>
            <button className='bg-[#cecccc] rounded-full px-4 py-2 mt-2 mr-2'>Entertainment</button>
          </div>
        </div>
        <div className='border px-2'>
          <div className='font-semibold text-lg'>Who to follow</div>
          <div className='p-[1rem]'>
            <div className='mb-[1rem]'>
              <div className='flex justify-between'>
                <div className='flex w-[5rem] justify-between'><img src="https://img.freepik.com/premium-photo/full-length-woman-exercising-field_1048944-30351094.jpg?t=st=1729836810~exp=1729837410~hmac=e26c1d0a95c85f7d9e53d92d81db9385f2422852b2ee31d1629408a3b4eed377" alt="img" className='w-[2rem] h-[2rem] rounded-full object-cover object-center mr-4' />Anthony_1</div>
                <div className='justify-self-end rounded-3xl border border-black px-2'>Follow</div>
              </div>  
              <div className='font-semibold'>I won my first Baseball tournament</div>
            </div>
            <div className='mb-[1rem]'>
              <div className='flex justify-between'>
                <div className='flex w-[5rem] justify-between'><img src="https://img.freepik.com/free-photo/monochrome-portrait-person-surfing-amongst-waves_23-2151305811.jpg?ga=GA1.1.166255932.1719310287&semt=ais_hybrid" alt="img" className='w-[2rem] h-[2rem] rounded-full object-cover object-center mr-4' />Surfer07</div>
                <div className='justify-self-end rounded-3xl border border-black px-2'>Follow</div>
              </div>  
              <div className='font-semibold'>Surfing is fun and great adventure sport.</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nav