import Image from 'next/image';







function MyPage() {

  return (
    <div style={{ height: '100vh', backgroundColor: 'lightgray' }}>
   <div className='h-96'>
      <div className="fixed top-0 left-0 w-full h-56 bg-blue-500 bg-opacity-50 text-white flex items-center justify-center z-50">
        <h1 className='pl-96' style={{

position: 'absolute',
top: '40%', // Adjust the vertical position as needed
left: '35%', // Adjust the horizontal position as needed
transform: 'translate(-50%, -50%)',
color: 'white', // Text color
fontWeight: 'bold', // Make the text bold
fontSize: '1.5rem', // Set the font size (adjust as needed)

        }}>WORK ABROAD</h1>


<div className='pt-48'>
<div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button className=" text-white px-4 py-2 rounded-lg">Home</button>
        <button className=" text-white px-4 py-2 rounded-lg">Services</button>
        <button className=" text-white px-4 py-2 rounded-lg">Contact Us</button>
        <button className=" text-white px-4 py-2 rounded-lg">About Us</button>
      </div>


</div>

        
        <h2 className='pt-10'></h2>
      </div>

      <div className='justify-center'>
     
      <Image
        src="/shiping.jpg" // Replace with the actual path to your image
        alt="Experience New Life Abroad"
        width={1600} // Set the width of the image
        height={300} // Set the height of the image
      />
    </div>
    
    <div className='text-bold'
         style={{
          position: ' absolute',
          top: '50%', // Adjust the vertical position as needed
          left: '70%', // Adjust the horizontal position as needed
          transform: 'translate(-50%, -50%)',
          color: 'white', // Text color
          fontWeight: 'bold', // Make the text bold
          fontSize: '2rem', // Set the font size (adjust as needed)
          }}
        >
          Experience New Life <br />
          Abroad
        </div>


        <div className='bg-white ' style={{
          top: '50%', // Adjust the vertical position as needed
          left: '50%', // Adjust the horizontal position as needed

        }}>


        </div>


        <div>
      <div
        style={{
          width: '1600px',
          height: '700px', // You can adjust the height as needed
          backgroundColor: 'white ',
        }}
      >




        <h1 className='text-black '
        style={{
          position: 'relative',
          top: '10%', // Adjust the vertical position as needed
          left: '80%', // Adjust the horizontal position as needed
          transform: 'translate(-50%, -50%)',
          color: 'black', // Text color
          fontWeight: 'bold', // Make the text bold
          fontSize: '2rem', // Set the font size (adjust as needed)
          }}
          >WE OFFER THE FOLLOWING <br />
         </h1>





          <h1 className='text-black '
        style={{
          position: 'relative',
          top: '6%', // Adjust the vertical position as needed
          left: '78%', // Adjust the horizontal position as needed
          transform: 'translate(-50%, -50%)',
          color: 'black', // Text color
          fontWeight: 'bold', // Make the text bold
          fontSize: '2rem', // Set the font size (adjust as needed)
          }}
          ><br />
          CATEGORIES OF JOB POSITIONS</h1>




            <div className='pl-96 pt-2 '>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <div id='finance' className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> <img src="/finance.png" alt="Image 1" width="200" height="200" /></div>
          <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> <img src="/entertainment.png" alt="Image 1" width="200" height="200" /></div>
          <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> <img src="/call_center.png" alt="Image 1" width="200" height="200" /></div>
          
          
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
        <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> <img src="/hr.png" alt="Image 1" width="200" height="200" /></div>
        <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> <img src="/it.png" alt="Image 1" width="200" height="200" /></div>
        <div className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'> <img src="/marketing.png" alt="Image 1" width="200" height="200" /></div>

        </div>
      </div>

      
            </div>

         
      
   








     
        {/* Content inside the white div */}
      </div>
      
      {/* Rest of your page content */}
    </div>
 <div className='h-2'>
 <img src="/workabroad.PNG" alt="Image 1" width="100%" height="1000"/>
 </div>
    


    </div>
  
  </div>
    
  );
}

export default MyPage;


