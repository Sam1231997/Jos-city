import { useState, useEffect } from 'react';
import "../style.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import EventCard from './Card';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [events, setEvents] = useState([]);


 useEffect(()=>{
          fetch('https://j-city.onrender.com/api/v1/tour')
          .then(response => response.json())
          .then(data => {
            // setEvents(data);
            setEvents(Array.isArray(data.data) ? data.data : []);
            setFilteredData(Array.isArray(data.data) ? data.data : []);
            console.log(data)
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://j-city.onrender.com/api/v1/tour');
  //       setData(response.data); // Assuming your API returns an array of items
  //       setFilteredData(response.data); // Initialize filtered data
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    if (Array.isArray(data)) { // Ensure data is an array
      if (search.trim() === '') {
        setFilteredData(data); // If search is empty, show all data
      } else {
        setFilteredData(
          events.filter(item => 
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.address.toLowerCase().includes(search.toLowerCase())
          )
        );
      }
    }
  }, [search, events]);

  return (
    <>

      <nav className='header'>
     
        <div className='header-container flex justify-between'>
        <div className='hidden lg:flex'>
            <Link to='/'>
              <img src="/images/logo.png" alt="Logo" className="h-[80px] w-[70px] lg:ml-auto lg:mr-0 mr-auto " />
            </Link>
        </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex gap-4 font-semibold ">
            <div className="relative-group">
                <Link to='/' className="text-black hover:text-green-600 font-poppins">Home</Link>
              </div>
              <div className="relative-group">
                <Link to='/nowij' className="text-black hover:text-green-600 font-poppins">Now In Jos</Link>
              </div>
              <div className="relative-group">
                <Link to='/accomodation' className="text-black hover:text-green-600">Accommodations</Link>
              </div>
              <div className="relative group">
                <Link to='/restaurant' className="text-black hover:text-green-600">Restaurants</Link>
              </div>
              <div className="relative group">
                <Link to='/shopping' className="text-black hover:text-green-600">Shopping</Link>
              </div>
              <div className="relative group">
                <Link to='/attraction' className="text-black hover:text-green-600">Attractions</Link>
              </div>
            </div>
          </div>

          <div className='hidden lg:flex'>
            <form>
              <div className="">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </form>
          </div>

 {/* Mobile Menu */}

      <div>
      <div>
        <button onClick={toggleMenu} className="hamburger lg:hidden float-right">
          &#9776;
        </button>
        <div className="block lg:hidden">
          <Link to='/'>
            <img src="/images/logo.png" alt="Logo" className="h-[80px] w-[70px]" />
          </Link>
        </div>
</div>
       
        <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
          <div className="flex flex-col space-y-4 mb-4">
          <div className="relative-group">
              <Link to='/' className="text-black hover:text-green-600" onClick={closeMenu}>Home</Link>
            </div>
            <div className="relative-group">
              <Link to='/nowij' className="text-black hover:text-green-600" onClick={closeMenu}>Now In Jos</Link>
            </div>
            <div className="relative-group">
              <Link to='/accomodation' className="text-black hover:text-green-600" onClick={closeMenu}>Accommodations</Link>
            </div>
            <div className="relative-group">
              <Link to='/restaurant' className="text-black hover:text-green-600" onClick={closeMenu}>Restaurants</Link>
            </div>
            <div className="relative-group">
              <Link to='/shopping' className="text-black hover:text-green-600" onClick={closeMenu}>Shopping</Link>
            </div>
            <div className="relative-group">
              <Link to='/attraction' className="text-black hover:text-green-600" onClick={closeMenu}>Attractions</Link>
            </div>
          </div>

          <div>
            <form>
              <div className="">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-600"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      </div>
         
       
      </nav>

    
      
      {/* Main Content */}
      <div className="content">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Array.isArray(filteredData) && filteredData.map((item) => (
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
    </>
  );
}

export default Header;
