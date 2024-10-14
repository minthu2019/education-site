import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


// @tailwind base;
// @tailwind components;
// @tailwind utilities;

// html{
//   scroll-behavior: smooth;
// }

// body{
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
//   font-family: "Roboto", sans-serif;
// }

// body {
//   background: #f5f5f5;
// }

// a {
//   text-decoration: none;
//   color: inherit;
//   line-height: 1;
//   cursor: pointer;
// }


// .navlink{
//     @apply inline-block list-none  text-[12px] cursor-pointer
// }

// .hero{
//     @apply bg-cover bg-center h-[100vh] w-screen text-[#fff] ; background-image:linear-gradient(rgba(0,0,0,0.7),rgba(8, 0, 88, 0.7)), url("../src/assets/hero.jpg");
// }

// .btns{
//   @apply bg-[#fff] text-[#212121] px-4 py-2 text-[12px] rounded-[30px]  cursor-pointer
// }

// .hero-text{
//   @apply text-center max-w-[800px]
// }

// .program{
//    @apply   w-full pl-[15%] pr-[15%] mx-auto my-10 grid grid-cols-3 gap-10
// }

// .programs{
//   @apply relative flex items-center justify-center  w-full  rounded-xl overflow-hidden 
// }

// .caption{
//   @apply absolute inset-0 flex items-center justify-center  text-white font-bold mt-[350px] opacity-0 transition-all duration-500;background: rgba(8,0,58,0.7);
// }

// .programs:hover .caption{
//   @apply opacity-100 mt-0
// }

// .about{
//   @apply w-full pl-[15%] pr-[15%] mx-auto my-24 flex items-center justify-between gap-10
// }

// .about-left{
//   @apply w-[50%]
// }

// .about-left img{
//   @apply w-full h-[328px] rounded-md shadow-xl shadow-blue-500 object-cover
// }

// .about-right{
//   @apply w-[50%] 
// }

// .about-right h3{
//   @apply text-sm uppercase font-normal mb-2
// }

// .about-right h2{
//   @apply capitalize text-4xl text-green-500 font-bold mb-2 
// }

// .about-right p{
//   @apply text-[12px] font-normal mb-1
// }

// .campus{
//   @apply w-full pl-[15%] pr-[15%] mx-auto my-10 flex items-center justify-center flex-col
// }

// .gallery{
//   @apply grid grid-cols-4 gap-8 mb-6
// }

// .gallery img{
//   @apply w-[200px] h-[250px] rounded-md object-cover 
// }

// .campusBtn{
//   @apply bg-green-500 flex items-center justify-center gap-2
// }

// .testimonials{
//   @apply w-full pl-[10%] pr-[10%]  my-10
// }