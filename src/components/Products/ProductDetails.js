import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Comments from '../comments'; 
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext' ; 


// const products = [
//   {
//     id: 1,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 2,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 3,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 4,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 5,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 6,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 7,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//     {
//       id: 8,
//       name: 'Navy and Orange Striped Polo T-Shirt For Men',
//       mainImage: require('../../assets/product_images/2.jpg'),
//       images: [
//         require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//         require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//         require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//         require('../../assets/product_images/Product_cat/Pro_2.jpg')
//       ],
//       price: '799',
//       discountPrice: '1999',
//       description: 'Solid Polos',
//       colors: ['#173F5F', '#F6D55C'],
//       sizes: ['S', 'M', 'L', 'XL', 'XXL']
//     },
//   {
//     id: 9,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/2.jpg'),
//     images: [
//       require('../../assets/product_images/Product_cat/pro_2.3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_3.jpg'),
//       require('../../assets/product_images/Product_cat/Pro_2.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 10,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 11,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
//   {
//     id: 12,
//     name: 'Navy and Orange Striped Polo T-Shirt For Men',
//     mainImage: require('../../assets/product_images/1.jpg'),
//     images: [
//       require('../../assets/product_images/5.jpg'),
//       require('../../assets/product_images/2.jpg'),
//       require('../../assets/product_images/3.jpg'),
//       require('../../assets/product_images/4.jpg')
//     ],
//     price: '799',
//     discountPrice: '1999',
//     description: 'Solid Polos',
//     colors: ['#173F5F', '#F6D55C'],
//     sizes: ['S', 'M', 'L', 'XL', 'XXL']
//   },
// ];

const responsive = {
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const ProductDetails = () => {
  const { productId } = useParams();
 
  const { addToCart } = useContext(CartContext); 
  // const { clearCart } = useContext(CartContext);
  const { products } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(productId));
  const { buyNowCheckout } = useContext(CartContext);
  const [selectedImage, setSelectedImage] = useState(product.mainImage);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  
  if (!products) {
    return <div>Product not found</div>;
  }

  // const addToCart = (product) => {
  //   console.log(`Product ${product.id} added to cart`);
  //   let cart = JSON.parse(localStorage.getItem('cart')) || [];
  //   cart.push({ ...product, quantity });
  //   localStorage.setItem('cart', JSON.stringify(cart));
  // };


  // const buyNow = (product) => {
  //   console.log(`Product ${product.id} added to Buynow`);
  //   localStorage.setItem('Buynow', JSON.stringify([{ ...product, quantity }]));
  //   navigate('/checkout');
  // };

  const handleAddToCart = () => {
    const productToAdd = { ...product, quantity };
    addToCart(productToAdd);
  };

  const handleBuyNow = (id) => {
      buyNowCheckout(id)
      localStorage.setItem('Buynow', JSON.stringify([product]));
    navigate('/checkout/buynow');
  };

  return (
    <div>
    <div className="container mx-auto p-4 mt-24 flex justify-center">
      <div className="flex flex-col items-center md:flex-row max-w-4xl w-full">
        <div className="block md:hidden w-full">
          <Carousel responsive={responsive}>
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="w-full object-cover rounded-md mb-2"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </Carousel>
        </div>
      
        <div className="hidden md:flex flex-col md:flex-row items-center">
          <div className="flex flex-col items-end mr-2 md:w-1/4 md:mt-6 lg:w-1/4 lg:mb-20">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className={`w-16 md:w-20 object-cover rounded-md mb-2 cursor-pointer ${selectedImage === image ? 'border-2 border-blue-500' : 'border'}`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <img src={selectedImage} alt={product.name} className="w-full md:w-3/4 lg:w-3/4 h-auto object-contain rounded-md mb-4" />
        </div>
        
        <div className="md:ml-8 text-center md:text-left">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center justify-center md:justify-start mt-2">
            <span className="text-2xl font-bold text-green-600">{product.price}</span>
            <span className="text-xl text-gray-400 line-through ml-2">{product.discountPrice}</span>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Color:</h3>
            <div className="flex justify-center md:justify-start mt-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full mr-2 ${selectedColor === color ? 'border-4 border-blue-600' : 'border'} cursor-pointer`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Size:</h3>
            <div className="flex justify-center md:justify-start mt-2">
              {product.sizes.map((size, index) => (
                <div
                  key={index}
                  className={` rounded p-3 border mr-4 cursor-pointer ${selectedSize === size ? 'border-blue-600' : 'border-gray-300'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-bold">Qty:</h3>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1} className="p-2 border">-</button>
              <span className="mx-2">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 border">+</button>
            </div>
          </div>
          <div className="mt-4 flex justify-center md:justify-start space-x-4">
            <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
                <button onClick={() => handleBuyNow(product.id)} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
                  Buy Now
                </button>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full '>
      <Comments />
      </div>
    </div>
  );
};

export default ProductDetails;
