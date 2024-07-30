
import {useState, useEffect} from 'react'
// import {cards} from './Cards'
// import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EventCard from './Card';
// import Afternav from './Afternav';
// import Dbcards from '../components/Dbcards';
// import Aftershop from '../components/Aftershop';
// import useFetch from '../components/useFetch';

const Shopping =()=>{
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
    
    const filteredEvents = filter === 'All' ? events.slice(23,27) : events.filter(event => event.category === filter);
    
    return(
        <div>
        <div>
       
        <div>
        <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className=" bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
        <img src="/images/shopping.png" alt="" />
    </div>
</div>
{/* // <!-- Body --> */}

<div className="container mx-auto px-4 py-12">
    <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-1">
            <h2 className="lg:text-[1.8rem] text-xl font-bold lg:font-semibold">SHOPPINGS</h2>
            
        </div>
        
    </div>

    </div>
    </div>
   
{/* BACKEND SIDE */}
{/* fetch cards */}

    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {['All', 'Markets', 'Shopping Malls'].map(category => (
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
export default Shopping;