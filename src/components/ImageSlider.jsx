// import { useState } from "react";
// import { motion } from "framer-motion";
// import city1 from "/images/Frame 46.png";
// import city2 from  "/images/K1.png";
// import city3 from  "/images/k2.png";
// import planet1 from  "/images/k4.png";
// import planet2 from  "/images/k6.png";

// const ImageSlider = () => {
//   const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

//   const handleNext = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 1) % 5
//       );
//       return updatedIndexes;
//     });
//   };

//   const handleBack = () => {
//     setPositionIndexes((prevIndexes) => {
//       const updatedIndexes = prevIndexes.map(
//         (prevIndex) => (prevIndex + 4) % 5
//       );

//       return updatedIndexes;
//     });
//   };
//   const images = [city1, city2, city3, planet1, planet2];

//   const positions = ["center", "left1", "left", "right", "right1"];

//   const imageVariants = {
//     center: { x: "0%", scale: 1, zIndex: 5 },
//     left1: { x: "-50%", scale: 0.7, zIndex: 3 },
//     left: { x: "-90%", scale: 0.5, zIndex: 2 },
//     right: { x: "90%", scale: 0.5, zIndex: 1 },
//     right1: { x: "50%", scale: 0.7, zIndex: 3 },
//   };
//   return (
//     <div className="flex items-center justify-center flex-col  lg:h-[30rem]">



//       {images.map((image, index) => (
//         <motion.img
//           key={index}
//           src={image}
//           alt={image}
          
//           initial="center"
//           animate={positions[positionIndexes[index]]}
//           variants={imageVariants}
//           transition={{ duration: 1 }}
//           className="w-[40%] absolute h-[150px]  md:h-[100px] lg:h-[300px] rounded-[12px]"
         
//         />
//       ))}
    
//       <div className="flex flex-row gap-3 lg:pt-[350px] pt-[200px]">
//         <button
//           className="text-white bg-green-800 rounded-md py-1 px-3"
//           onClick={handleBack}
//          >
//           Back
//         </button>
//         <button
//           className="text-white bg-green-800 rounded-md py-1 px-3"
//           onClick={handleNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

