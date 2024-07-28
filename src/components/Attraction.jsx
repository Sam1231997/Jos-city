

import {useState, useEffect} from 'react'
// import {cards} from './Cards'
// import Navbar from './Navbar';
import Footer from './Footer';
import EventCard from './Card';
// import Afternav from './Afternav';
// import Dbcards from './Dbcards';

// import useFetch from './useFetch';

// import AfterRes from "./AfterRes"
// import axios from 'axios';
// import Dropdown2 from './Dropdown2';
const Attraction=()=>{
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
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error.message}</p>;
    

    const filteredEvents = filter === 'All' ? events.slice(28,36) : events.filter(event => event.category === filter);
    
    return(
      
     
        <div>
        <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className=" bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
        <img src="/images/attraction.png" alt="" />
    </div>
</div>

{/* // <!-- Body --> */}
<div className="container mx-4 px-4 py-12">

<div className="container mx-auto px-4 py-12">
    <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-1">
            <h2 className="lg:text-[1.8rem] text-xl font-bold lg:font-semibold">ATTRACTIONS</h2>
           
        
        </div>
        
    </div>

    </div>
   
    
{/* BACKEND SIDE */}

<div className="p-4">
  <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
    {['All', 'Museums', 'Amusement Parks', 'Water Fall', 'Mountains'].map((category) => (
      <button
        key={category}
        onClick={() => setFilter(category)}
        className={`px-4 py-2 rounded-lg ${
          filter === category ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'
        } w-full sm:w-auto`}
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
   <div/>
        </div>
       
         
    )
}
export default Attraction;
