const Landing2=()=>{
    return(
       
     
      
            <div >
    
      <div className="page">
        <div className="text-center text-black px-[1rem]">
          <h1 className="lg:text-4xl text-xl font-semibold leading-[auto] pt-[3rem]">DON'T WASTE A MINUTE!</h1>
          <p className="mt-4 lg:text-[1.125rem] text-[.9rem]">Explore <span className="text-green-500">beautiful</span> attractions and enjoy all the <span className="text-green-500">fun</span> activities that Jos City has for you.</p>     
        </div>
        
        {/* <!-- Attractions Section --> */}
    <section class="px-[1rem]">
    <div className="App flex lg:justify-center space-x-4 p-4 lg:h-[40rem] items-center">
      <div className="img ">
        <ImgTransform
        imageUrl="/Frame 46.png"
        altText="Second Image"
        hoverText="Asop Water Falls"
      />
      </div>
      <div className="img w-[26rem]">
      <ImgTransform
        imageUrl="/Frame 43 (1).png"
        altText="First Image"
        hoverText="Rayfield Resort"
      />
      </div>
      <div className="img">
        <ImgTransform
        imageUrl="/Frame 45.png"
        altText="Third Image"
        hoverText="Play Station"
      />
      </div>
      
      
      
    </div>    
            <div className="text-center">
                <NavLink to='/details' className="inline-block bg-green-600 font-semibold text-[.95rem] text-white py-2 px-10 rounded mb-10 hover:scale-110 transform-gpu">See All</NavLink>
            </div>
    </section>
        
        {/* Restaurant Section */}
      <section class="py-10 bg-gray-50  px-[1rem]">
        <div class="container mx-auto text-center">
            <h2 class="lg:text-4xl text-xl font-bold">SAVOUR JOS</h2>
            <p class="mt-4 lg:text-center text-center">Whether you're looking for neighborhood eateries or cultural flavors, finding a delicious experience in any part of Jos City has been made almost effortless.</p>
        </div>
        <div class="container mx-auto mt-8 flex flex-col">
            <div class="bg-white rounded-lg flex flex-col lg:flex-row shadow-md overflow-hidden h-[32rem] lg:h-[25rem] lg:w-[82%] lg:mx-auto">
                <img src="Frame 43.png" alt="Bacardi Restaurant and Cafe" class=" lg:p-[2rem] p-[1rem]" />
                <Cards name='Bacardi Restaurant and Cafe' title='11 Dandaura Road, Off Wase Road, GRA, Jos, Plateau'/>
            </div>
            <div className="text-center mt-8">
                <NavLink to='/Restaurants' className="inline-block bg-green-600 hover:scale-110 transform-gpu font-semibold text-[.95rem] text-white py-2 px-10 rounded">See All</NavLink>
            </div>
        </div>
      </section>
      
      {/* <!-- Events Section --> */}
    <section className="py-12  px-[1rem]">
        <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-xl font-bold">EXPLORE UPCOMING EVENTS</h2>
            <p className="mt-4">Stay up to date on current and upcoming events that will spice up your stay.</p>
        </div>
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img src="exploreImg.png"/>
                        <h2 className="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p className="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <NavLink to='/details' className="inline-block bg-green-600 text-white text-[.6rem] lg:text-[1rem] font-semibold py-2  px-3 rounded hover:bg-green-800">View Details</NavLink>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <div class="p-4">
                        <img src="exploreImg.png"/>
                        <h2 class="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p class="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <NavLink to='/details' className="inline-block bg-green-600 text-white text-[.6rem] lg:text-[1rem] font-semibold py-2  px-3 rounded hover:bg-green-800">View Details</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <NavLink to='/details' className="inline-block bg-green-600 text-white py-2 px-16 font-semibold text-[.95rem] rounded-md hover:scale-110 transform-gpu">See All</NavLink>
            </div>
            
            <div className="filter">
              <Filter/>
            </div>
            </div>
        
    </section>
    
    <Footer/>
      </div>
        </div>
        
       
   
        
      
    
        )
}
export default Landing2;