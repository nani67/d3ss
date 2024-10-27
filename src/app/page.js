// pages/index.js
"use client"; // This will mark the component as a Client Component

import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import rotating_globe from './assets/rotating_globe.mp4';


const HomePage = () => {
  return (

    <div className="bg-[#FFFFFF]">
      <Header />
      <Home />
      {/* <div className='text-6xl'>Hello checking</div>
      <Footer /> */}

    </div>
  );
}



// const HomePage = () => {
//   const [showHeader, setShowHeader] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);
//   const [showServices, setShowServices] = useState(false);
//   const [showTestimonials, setShowTestimonials] = useState(false);
//   const [showContact, setShowContact] = useState(false);

//   const headerRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const testimonialsRef = useRef(null);
//   const contactRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const headerPosition = headerRef.current.getBoundingClientRect().top;
//       const aboutPosition = aboutRef.current.getBoundingClientRect().top;
//       const servicesPosition = servicesRef.current.getBoundingClientRect().top;
//       const testimonialsPosition = testimonialsRef.current.getBoundingClientRect().top;
//       const contactPosition = contactRef.current.getBoundingClientRect().top;

//       // if (headerPosition < window.innerHeight) {
//       //   setShowHeader(true);
//       // }
//       if (aboutPosition < window.innerHeight) {
//         setShowAbout(true);
//       }
//       if (servicesPosition < window.innerHeight) {
//         setShowServices(true);
//       }
//       if (testimonialsPosition < window.innerHeight) {
//         setShowTestimonials(true);
//       }
//       if (contactPosition < window.innerHeight) {
//         setShowContact(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="bg-[#F5F5DC]">


// <Header />


//     {/* <video width="50vh" height="50vh" controls muted autoPlay="true">
//       <source src={rotating_globe} type="video/mp4" />
//     </video> */}

//       <div ref={headerRef} style={{ color: '#FFB000', }} className={`glass_tint flex justify-center items-center h-screen`}>
//         {/* <span className={`${afacad.className} text-5xl font-bold`}>D3 Software Solutions</span> */}

//         <div className={`flex h-screen justify-end glass_tint`}>

//     <video width="100%" height="auto" muted autoPlay loop>
//       <source src={rotating_globe} type="video/mp4" />
//     </video>
//         </div>

//         <div  style={{ position: 'absolute', bottom: '30%', left: '10px', width: '66%', }}>
//             <span className={`glass_tint text-8xl ${afacad.className} p-10`} style={{ color: '#000000'}}>Transforming the world,</span>
//             <br />
//             <span className={`text-8xl ${afacad.className} p-10`} style={{ color: '#000000'}}>with every &lt;\&gt;</span>

//             <br />
//             <span className={`text-5xl font-bold ${afacad.className} text-bg-black`}></span>
//         </div>
//       </div>

//       <div style={{ height: '110vh'}} className={`card-css glass_tint  bg-[#004225] text-white card-container`}>
//         <div style={{ position: 'relative', zIndex: '1', top: '100vh', height: '100vh' }} className="card-css card-1 bg-[#000000]">
//           <span className={`${afacad.className} text-5xl font-bold`}>D3 Software Solutionsdsasasasasasasasasasasasasasasasasasasasasasasa</span>
//         </div>
//         {/* <div style={{ position: 'relative', zIndex: '2', top: '80vh', height: '100vh' }} className="card-css card-2 bg-[#00ff00]">
//           <span className={`${afacad.className} text-5xl font-bold`}>D3 Software Solutions</span>
//         </div>
//         <div style={{ position: 'relative', zIndex: '3', top: '80vh', height: '100vh' }} className="card-css card-3 bg-[#ff0000]">
//           <span className={`${afacad.className} text-5xl font-bold`}>D3 Software Solutions</span>
//         </div> */}
//       </div>

//       <div ref={aboutRef} className={`transition duration-1000 ${showAbout ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col justify-center items-center p-10`}>
//         <h1 className="text-3xl font-bold text-[#004225] mb-5">About Us</h1>
//         <p className="text-lg text-gray-600">At D3 Software Solutions, we are passionate about creating innovative software solutions that meet the needs of our clients...</p>
//       </div>
//       <div ref={servicesRef} className={`transition duration-1000 ${showServices ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col justify-center items-center p-10`}>
//         <h1 className="text-3xl font-bold text-[#004225] mb-5">Our Services</h1>
//         <div className="flex flex-wrap justify-center">
//           <div className="bg-[#FFCF9D] p-5 m-5 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold text-[#004225]">IT Services</h2>
//             <p className="text-gray-600">We provide a range of IT services, including network management, cybersecurity, and data backup and recovery.</p>
//           </div>
//           <div className="bg-[#FFCF9D] p-5 m-5 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold text-[#004225]">Website Development</h2>
//             <p className="text-gray-600">We design and develop custom websites that are responsive, user-friendly, and optimized for search engines.</p>
//           </div>
//           <div className="bg-[#FFCF9D] p-5 m-5 rounded-lg shadow-lg">
//             <h2 className="text-lg font-bold text-[#004225]">App Development</h2>
//             <p className="text-gray-600">We develop mobile and web applications that are fast, secure, and scalable.</p>
//           </div>
//         </div>
//       </div>
//       <div ref={testimonialsRef} className={`transition duration-1000 ${showTestimonials ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col justify-center items-center p-10`}>
//         <h1 className="text-3xl font-bold text-[#004225] mb-5">What Our Clients Say</h1>
//         <div className="flex flex-wrap justify-center">
//           <div className="bg-[#FFCF9D] p-5 m-5 rounded-lg shadow-lg">
//             <p className="text-gray-600">&quot;D3 Software Solutions has been a game-changer for our business. Their expertise and professionalism are unmatched.&quot;</p>
//             <h2 className="text-lg font-bold text-[#004225]">John Doe, CEO</h2>
//           </div>
//           <div className="bg-[#FFCF9D] p-5 m-5 rounded-lg shadow-lg">
//             <p className="text-gray-600">&quot;We were blown away by the quality of service and the attention to detail that D3 Software Solutions provided.&quot;</p>
//             <h2 className="text-lg font-bold text-[#004225]">Jane Smith, Marketing Manager</h2>
//           </div>
//           <div className="bg-[#FFCF9D] p-5 m-5 rounded-lg shadow-lg">
//             <p className="text-gray-600">&quot;D3 Software Solutions has been a valuable partner in our business growth. We highly recommend them.&quot;</p>
//             <h2 className="text-lg font-bold text-[#004225]">Bob Johnson, Owner</h2>
//           </div>
//         </div>
//       </div>
//       <div ref={contactRef} className={`transition duration-1000 ${showContact ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} flex flex-col justify-center items-center p-10`}>
//         <h1 className="text-3xl font-bold text-[#004225] mb-5">Get in Touch</h1>
//         <p className="text-lg text-gray-600">Contact us to learn more about our services and how we can help your business thrive.</p>
//         <button className="bg-[#FFB000] hover:bg-[#FFCF9D] text-white font-bold py-2 px-4 rounded-lg shadow-lg">Contact Us</button>
//       </div>
//       <footer className="bg-[#004225] text-white p-5 text-center">
//         2023 D3 Software Solutions. All rights reserved.
//       </footer>
//     </div>
//   );
// };

export default HomePage;
