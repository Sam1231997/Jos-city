
import Footer from './Footer';
import { Link } from 'react-router-dom';
// import EventCard from './Card';

const Details=()=>{


    return(
        <>
        <div class="container mx-auto px-4 py-8">
        <div class="flex items-center mb-4">
            <a href="#" class="text-green-600 hover:text-green-700 flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                <Link to='/'>Back</Link>
            </a>
        </div>
  
     
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-[4rem] mb-4">
            <div>
                <img src='/images/Frame 43.png' alt="Hotel Image" className="w-full rounded-lg shadow-md"/>
            </div>
            <div>
                <h2 className="lg:text-[1.8rem] text-[1.15rem] font-bold lg:font-semibold lg:mt-4 mb-4">Valada Hotel and Resorts Ltd.</h2>
                <div className="mb-4">
                    <h3 className="text-[.9rem] lg:text-lg font-semibold">POPULAR AMENITIES</h3>
                    <p className="text-[.85rem] lg:text-[1rem]">Spa · Parking · Breakfast · Wi-Fi</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-[.9rem] lg:text-lg font-semibold">HOURS</h3>
                    <p className="text-[.85rem] lg:text-[1rem]">Check-in time: 14:00</p>
                    <p className="text-[.85rem] lg:text-[1rem]">Check-out time: 12:00</p>
                </div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(" 6 Sylvester Dabo Close, Apollo Cres, South, Jos, Plateau")}`} className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
            </div>
        </div>
       
    </div>
        <Footer/>
        </>
    )
}
export default Details;