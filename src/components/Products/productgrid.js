import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import './productgrid.css';

const product1Image = require('../../assets/product_images/1.jpg');
const product2Image = require('../../assets/product_images/2.jpg');
const product3Image = require('../../assets/product_images/5.jpg');
const product4Image = require('../../assets/product_images/4.jpg');
const product5Image = require('../../assets/product_images/3.jpg');
const product6Image = require('../../assets/product_images/6.jpg');
const product7Image = require('../../assets/product_images/7.jpg');
const product8Image = require('../../assets/product_images/8.jpg');
const product9Image = require('../../assets/product_images/9.jpg');
const product10Image = require('../../assets/product_images/10.jpg');
const product11Image = require('../../assets/product_images/11.jpg');
const product12Image = require('../../assets/product_images/12.jpg');

const products = [
  { id: 1, name: 'Blue and orange Polo T-shirt', image: product1Image, price: '799' },
  { id: 2, name: 'Black Flat Knit Men s Polo T-Shirt', image: product2Image, price: '999' },
  { id: 3, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product3Image, price: '999' },
  { id: 4, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product4Image, price: '999' },
  { id: 5, name: 'Red Flat Mens Polo T-Shirt', image: product5Image, price: '999' },
  { id: 6, name: 'Blue Flat Mens Polo T-Shirt', image: product6Image, price: '899' },
  { id: 7, name: 'Orange Flat Knit Mens Polo Jeans', image: product7Image, price: '699' },
  { id: 8, name: 'Red Flat Knit Mens Polo Jeans', image: product8Image, price: '899' },
  { id: 9, name: 'Green Flat Knit Mens Polo Jeans', image: product9Image, price: '999' },
  { id: 10, name: 'Blue Flat Knit Mens Polo Jeans', image: product10Image, price: '1299' },
  { id: 11, name: 'Orange Flat Knit Mens Polo T-Shirt', image: product11Image, price: '1399' },
  { id: 12, name: 'Yellow Flat Knit Mens Polo T-Shirt', image: product12Image, price: '1099' },
];

// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 1024 },
//     items: 4,
//   },
//   desktop: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 4,
//   },
//   tablet: {
//     breakpoint: { max: 768, min: 464 },
//     items: 2,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//   },
// };

const ProductCarousel = () => {
  const navigate = useNavigate();

  // const handleImageClick = (productId) => {
  //   navigate(`/product/${productId}`);
  // };



 

  return (
    // <div className="flex flex-col items-center px-10">
    //   <div className="w-full max-w-6xl">
    //     <Carousel
    //       responsive={responsive}
    //       ssr
    //       infinite
    //       arrows
    //       autoPlay={false}
    //       renderButtonGroupOutside
    //     >
    //       {firstFourProducts.map((product) => (
    //         <div key={product.id} className="p-4">
    //           <div className="relative w-full h-64">
    //             <img
    //               src={product.image}
    //               alt={product.name}
    //               className="w-full h-auto object-contain rounded-md"
    //               onClick={() => handleImageClick(product.id)}
    //               onLoad={(e) => e.target.classList.remove('hidden')}
    //               onError={(e) => {
    //                 e.target.src = '';
    //                 e.target.classList.remove('hidden');
    //               }}
    //             />
    //             <div className="absolute inset-0 flex items-center justify-center hidden">
    //               <div className="loader"></div>
    //             </div>
    //           </div>
    //           <h2 className="text-center mt-24">{product.name}</h2>
    //           <p className="text-center">{product.price}</p>
    //         </div>
    //       ))}
    //       <div className="p-4 flex items-center justify-center ">
    //         <button
    //           onClick={() => navigate('/product-list')}
    //           className="text-center text-black-500 items-center justify-center"
    //         >
    //           <IoIosArrowDropright className='h-16 w-24 mt-32'/>
    //           View All
    //         </button>
    //       </div>
    //     </Carousel>
    //   </div>
    //   <div className="w-full max-w-6xl">
    //     <Carousel
    //       responsive={responsive}
    //       ssr
    //       infinite
    //       arrows
    //       autoPlay={false}
    //       renderButtonGroupOutside
    //     >
    //       {secondFourProducts.map((product) => (
    //         <div key={product.id} className="p-4">
    //           <div className="relative w-full h-64">
    //             <img
    //               src={product.image}
    //               alt={product.name}
    //               className="w-full h-auto object-contain rounded-md"
    //               onClick={() => handleImageClick(product.id)}
    //               onLoad={(e) => e.target.classList.remove('hidden')}
    //               onError={(e) => {
    //                 e.target.src = '';
    //                 e.target.classList.remove('hidden');
    //               }}
    //             />
    //             <div className="absolute inset-0 flex items-center justify-center hidden">
    //               <div className="loader"></div>
    //             </div>
    //           </div>
    //           <h2 className="text-center mt-24">{product.name}</h2>
    //           <p className="text-center">{product.price}</p>
    //         </div>
    //       ))}
    //       <div className="p-4 flex items-center justify-center">
    //         <button
    //           onClick={() => navigate('/product-list')}
    //           className="text-center text-black-500 items-center justify-center"
    //         >
    //           <IoIosArrowDropright className='h-16 w-24 mt-28'/>
    //           View All
    //         </button>
    //       </div>
    //     </Carousel>
    //   </div>
    //   <div className="w-full max-w-6xl">
       

    //       {thirdFourProducts.map((product) => (
    //         <div key={product.id} className="p-4">
    //           <div className="relative w-full h-64">
    //             <img
    //               src={product.image}
    //               alt={product.name}
    //               className="w-full h-auto object-contain rounded-md"
    //               onClick={() => handleImageClick(product.id)}
    //               onLoad={(e) => e.target.classList.remove('hidden')}
    //               onError={(e) => {
    //                 e.target.src = '';
    //                 e.target.classList.remove('hidden');
    //               }}
    //             />
    //             <div className="absolute inset-0 flex items-center justify-center hidden">
    //               <div className="loader"></div>
    //             </div>
    //           </div>
    //           <h2 className="text-center mt-24">{product.name}</h2>
    //           <p className="text-center">{product.price}</p>
    //         </div>
    //       ))}
    //       <div className="p-4 flex items-center justify-center ">
    //         <button
    //           onClick={() => navigate('/product-list')}
    //           className="text-center text-black-500 items-center justify-center"
    //         >
    //           <IoIosArrowDropright className='h-16 w-24 mt-32'/>
    //           View All
    //         </button>
    //       </div>
       
    //   </div>
    // </div>
    <div className="container mx-auto p-10">
    <h1 className="text-4xl font-extrabold text-center text-orange-400 mt-8 mb-4">Available Products</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
      {products.map((product) => (
        <div key={product.id} className="border p-2 rounded">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} className="w-full h-90 object-cover mb-4 rounded" />
            <h2 className="text-lg font-bold mb-2 text-center">{product.name}</h2>
            <p className="text-gray-600 mb-2 text-center">{product.price}</p>
          </Link>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <button
        onClick={() => navigate('/product-list')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        View All
      </button>
    </div>
  </div>
  );
};

export default ProductCarousel;
