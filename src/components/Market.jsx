import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from "axios"


const topProducts = [

    {
        id: 1,
        name: "Ugaoo Organic Vermicompost Fertilizer Manure For Plants - 5 Kg",
        category: "Fertilizers",
        price: 399,
        rating: 4.5,
        image:"https://m.media-amazon.com/images/I/615ogT1U-KL.SL1044.jpg",
        reviews: 100
    },
    {
        id: 2,
        name: "UGAOO Ridge Gourd Vegetable Seeds (Green, Pack of 2.4g)",
        category: "Seed",
        price: 299,
        rating: 4.2,
        image:"https://m.media-amazon.com/images/I/71X60AewLxL.SL1100.jpg",
        reviews: 150
    },
    {
        id: 3,
        name: "rustBasket Gardening Hand Tools Set - 5 Pcs (Cultivator, Big and Small Trowel, Weeder, Fork)",
        category: "Tools",
        price: 349,
        rating: 4.3,
        image:"https://m.media-amazon.com/images/I/61mCS9kj2uS.SX679.jpg",
        reviews: 200
    },
    {
        id: 4,
        name: "Health 360 - Spray Pest Control for Plants - 500 ml",
        category: "Pesticides",
        price: 299,
        rating: 4.2,
        image:"https://m.media-amazon.com/images/I/715zO-EgtsL.SX679.jpg",
        reviews: 150
    },
    {
        id: 5,
        name: "HARIVAR MART Cordless Grass Trimme-r, Electric Weed Eater 3-in-1 ",
        category: "Machinery",
        price: 349,
        rating: 4.3,
        image:"https://m.media-amazon.com/images/I/613ahSSo9rL.SX679.jpg",
        reviews: 200
    },
    
]



function Market() {

    const [products,setProducts] = useState([])

useEffect(()=>{
    axios.get("https://cropx-backend.onrender.com/market-place/products")
    .then((response) => {
        setProducts(response.data)
    })
    .catch((error)=>console.log("Error while catching",error))
},[])


return (
    <div className='min-h-screen bg-gray-50'>
        <div className='bg-gray-100 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
                <div className='flex items-center justify-between'>
                    <div className='flex-1 max-w-2xl'>
                    <div className='relative '>
                        <input
                        type="text"
                        placeholder="Search products"
                        className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-3 focus:ring-green-600 focus:border-transparent'
                        />
                        <button>
                        <Search className='absolute left-[640px] h-5 w-5 top-3 text-center'/>
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-wrap'>
    {products.map((product)=>{
        return(
            <div  key={product._id}>
            <div class=" justify-center relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img class="object-cover" src={product.image} alt="product image" />
            </a>
        <div class="mt-4 px-5 pb-5">
        <a href="#">
          <h5 class="text-xl tracking-tight text-slate-900">{product.name}</h5>
        </a>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">₹{product.price}</span>
            <span class="text-sm text-slate-900 line-through">₹{product.price+100}</span>
          </p>
          <div class="flex items-center">
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
          </div>
        </div>
        <a href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to cart</a>
        </div>
        </div>
        </div>
        )
    })}
    </div>
        
    </div>
)
}

export default Market