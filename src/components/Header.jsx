


import {useState,useEffect} from 'react'
  // import { data } from './Data';
  // import Filter from './Filter';
//   import Search from "./Search";
import { Link } from 'react-router-dom';
import axios from 'axios';
  const Header =()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:7000/dbdata`);
          setData(response.data); // Assuming your API returns an array of items
        console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (search.trim() !== '') {
        fetchData();
      } else {
        setData([]);
      }
    }, [search]);
  
    return(
        <>
        <nav className="flex items-center justify-between p-4 bg-white shadow-xl">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="/images/JCITY LOGO 1.png" alt="Logo" className="h-[100px] w-[70px]" />
            </div>
            {/* <!-- Hamburger Menu Button --> */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- Navigation Links for Desktop --> */}
            <div className="hidden md:flex space-x-12">
              <div className="relative group">
                <Link to='/nowij' className="text-black hover:text-green-600">NOW IN JOS</Link>
              </div>
              <div className="relative group">
                <Link to="/accomodation" className="text-black hover:text-green-800">ACCOMMODATION</Link>
              </div>
              <div className="relative group">
                <Link to="/restaurant" className="text-black hover:text-green-600">RESTAURANTS</Link>
              </div>
              <div className="relative group">
                <Link to="/shopping" className="text-black hover:text-green-600">SHOPPING</Link>
              </div>
              <div className="relative group">
                <Link to="/attraction" className="text-black hover:text-green-600">ATTRACTIONS</Link>
              </div>
            </div>
          </div>
          {/* <!-- Search Bar --> */}
          <form onChange={(e) => setSearch(e.target.value)} >
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
               
              />
             
              </div>
           
          </form>
        </nav>
        {/* <!-- Mobile Menu --> */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-2 p-4">
              <a href="#" className="text-black hover:text-green-600">NOW IN JOS</a>
              <a href="#" className="text-black hover:text-green-800">ACCOMMODATION</a>
              <a href="#" className="text-black hover:text-green-600">RESTAURANTS</a>
              <a href="#" className="text-black hover:text-green-600">SHOPPING</a>
              <a href="#" className="text-black hover:text-green-600">ATTRACTIONS</a>
            </div>
          </div>
        )}   
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* shopping card */}
          {data
              .filter((item)=>{
                return search.toLowerCase() ==='' ? item
                : item.type.toLowerCase().includes(search);
              })
              .map((item) => (
                
                <div classsName="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden" >
              <img src={item.image1} alt="Terminus" className="w-full min-h-48 object-cover lg:p-4"/>
              <div className="p-4" key={item.id}>
                  <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{item.address}</h3>
                  <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{item.date}</p>
                  <p className="text-[.75rem] lg:text-[1rem] text-gray-600">jdjjd</p>
                  <div className="flex items-center justify-between mt-4">
                      <a href="details.html" className="bg-green-200 text-green-600 b-green-500 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
                      <a href="#" className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
                  </div>
              </div>
              </div>
                
  ))}
  </div>

  
    </>
    )
}
export default Header;