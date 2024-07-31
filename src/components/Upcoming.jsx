
import {useState, useEffect} from 'react'
// import {cards} from './Cards'
// import Navbar from './Navbar';
// import { Object } from '../../Object';
import { Link } from 'react-router-dom';
import Footer from './Footer';
// import axios from 'axios';
import EventCard from './Card';
import Dropdown from './Dropdown';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

// import useFetch from './useFetch';

const Upcoming =()=>{
    
   
  const [filter, setFilter] = useState('All');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

      useEffect(()=>{
          fetch('https://j-city.onrender.com/api/v1/tour')
          .then(response => response.json())
          .then(data => {
            // setEvents(data);
            setEvents(Array.isArray(data.data) ? data.data : []);
            console.log(data)
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []); // Empty dependency array means this effect runs once on mount
    
      if (loading) return <div className='Loader'>
      {<ClimbingBoxLoader color={'rgba(0, 128, 0, 1)'}
    />}</div>
    
      if (error) return <p>Error: {error.message}</p>;
    
  
    const filteredEvents = filter === 'All' ? events.slice(42, 46)  : events.filter(event => event.category=== filter);
    
    
    return(
        <div>
        <div>
       
        <div>
        <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className=" bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
        <img src="/images/nowij.png" alt="" />
    </div>
</div>

{/* // <!-- Body --> */}

<div className="container mx-auto px-4 py-12">
    <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-1">
            <h4 className="lg:text-[1.8rem] text-l font-bold lg:font-semiboldunderline decoration-green-500 ">UPCOMING EVENTS</h4>
            <Dropdown/>
        </div>
        
    </div>

    </div>
    </div>
    
{/* BACKEND SIDE */}
    <div className="p-4">
     <div className="flex flex-wrap space-x-4 mb-4 md:space-x-4">
  {['All', 'Networking', 'Seminar', 'Tech', 'Sports', 'Wedding', 'Culture'].map((category) => (
    <button
      key={category}
      onClick={() => setFilter(category)}
      className={` ${
        filter === category ? 'bg-green-500 text-white' : 'bg-white text-[.8rem] lg:text-[1rem] text-gray-700 border py-[0.4rem] px-[0.7rem] lg:py-2 lg:px-4 rounded focus:outline-none'
      }`}
    >
      {category}
    </button>
  ))}
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {filteredEvents.map(item => (
        <EventCard
          key={item._id}
          image={item.image}
          title={item.title}
          date={item.date}
          address={item.address}
          category={item.category}
        />
      ))}
    </div>
      </div>
    </div>

       <Footer/> 
        </div>
        
       
  

 
    )
}
export default Upcoming;
