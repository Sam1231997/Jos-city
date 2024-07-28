
  import { useState,useEffect } from "react";
import EventCard from "./Card";
  
const Test=()=>{
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
    
    return(
 
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.map(item => (
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
  );
};
           
    
export default Test;

