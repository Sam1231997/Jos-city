import React from 'react'
import { NavLink } from 'react-router-dom'

export const cards =[
    { id: 1, title: "Networking Events", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/lamonde.png"},
    { id: 2, title: "Musical Festival", date: "25th july to 5th August 202425th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/Crest.png"},
    { id: 3, title: "Business Seminar", date: "25th july to 5th August 202425th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/kramiusluxury.png"},
    { id: 4, title: "Tech Meet up", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/kramiusluxury.png"},
    { id: 5, title: "Sport Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/Crest.png"},
    { id: 6, title: "Cultural Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/valada.png"},
    { id: 7, title: "Networking Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/lamonde.png"},
    { id: 8, title: "Wedding Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/kramiusluxury.png"},
    { id: 9, title: "Business Seminar", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/valada.png"},
    { id: 10, title: "Musical Festival", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/Crest.png"},
    { id: 11, title: "Sport Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/lamonde.png"},
    { id: 12, title: "Networking Event", date: "25th july to 5th August 2024", address:"6 sylvester Dabo close, Appollo Cress, South Plateau State", image1:"/thepoint.png"},
     
  
]

const Cards = (props) => {
  return (
    <div className=''>
      <div className="p-4">
        <img src={props.img} alt="" />
        <h2 className="text-[1rem] lg:text-2xl font-semibold lg:pt-[6rem]">{props.name}</h2>
          <p className="pt-[1rem] lg:pt-[1.8rem] text-[.8rem] lg:text-[1rem]">{props.title}</p>
      <div className="pt-[1.8rem] lg:pt-[5rem] pb-[1.5rem]">
        <NavLink to='/detail1' className="cursor-pointer bg-green-600 px-6 py-2 text-white text-[.8rem] lg:text-[1rem] font-semibold rounded-md hover:bg-green-800">View Details</NavLink>
      </div>
        
      </div>
    </div>
  )
}

export default Cards
