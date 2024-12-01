

'use client';

import logo from '../../assets/logo.png';
import motto from '../../assets/motto.png';
import Image from 'next/image';
import localFont from 'next/font/local';
import { useEffect } from 'react';
import AsciiEffectScene from '../asciieffects/asciieffectscene';
import cloud_migration from '../../assets/cloud_migration.jpg';
import custom_software from '../../assets/customized_software_development.jpg';
import it_support from '../../assets/it_support.jpg';
import mobile_development from '../../assets/mobile_development.png';
import portfolio from '../../assets/portfolio.png';
import salesforce_consultant from '../../assets/salesforce_consultant.jpg';
import seo from '../../assets/seo.png';
import social_media_marketing from '../../assets/social_media_marketing.jpg';
import website_development from '../../assets/website_development.png';
import { noisyLinesBackground, swarmBackground } from 'threejs-toys';

import Footer from '../footer/footer';

import { Poppins } from 'next/font/google';

import LogoCarousel from '../logocarousel/logocarousel';

import gmail from '../../assets/social_media/gmail.png';
import instagram from '../../assets/social_media/instagram.png';
import linkedin from '../../assets/social_media/linkedin.png';


import prakashai from '../../assets/companies/prakash_ai.png';
import api_infotech from '../../assets/companies/api_infotech.png';
import champaran from '../../assets/companies/champaran.png';
import Link from 'next/link';

const glacialIndifference = localFont({
    src: "../../fonts/GlacialIndifference.woff",
    variable: "--font-glacial-indifference",
});

const poppins = Poppins({ subsets: ['latin'], weight: '500' });


const logos = [
    { id: 1, image: prakashai },
    { id: 2, image: seo },
    { id: 3, image: seo },
    { id: 4, image: seo },
    { id: 5, image: seo },
    { id: 6, image: seo },
    // Add as many logos as you need
];

const cardData = [
    {
        id: 1,
        title: "Portfolio Creation",
        content: "Craft a comprehensive and visually compelling portfolio to showcase your work, skills, and achievements effectively. Our service offers tailored designs to align with your personal or brand style, ensuring a professional online presence.",
        image: portfolio
    },
    {
        id: 2,
        title: "Customized Software Development",
        content: "We develop bespoke software solutions tailored to your business needs, from planning and architecture to deployment and maintenance. Our solutions are crafted for scalability, security, and efficiency.",
        image: custom_software
    },
    {
        id: 3,
        title: "Website Design & Development",
        content: "Our team builds responsive, user-centered websites that are optimized for performance and usability. Whether it’s a corporate site or an eCommerce platform, we deliver a visually engaging and functional web experience.",
        image: website_development
    },
    {
        id: 4,
        title: "Mobile Applications",
        content: "From concept to deployment, we create intuitive and high-performance mobile applications for both iOS and Android. Our apps are designed to enhance user engagement and streamline functionality.",
        image: mobile_development
    },
    {
        id: 5,
        title: "Salesforce Support",
        content: "Our Salesforce support services ensure that your CRM operations run smoothly. We offer customizations, troubleshooting, and guidance to help you maximize the effectiveness of Salesforce for your business needs.",
        image: salesforce_consultant
    },
    {
        id: 6,
        title: "Social Media Marketing",
        content: "We help your brand gain visibility and build engagement across social media platforms. Our strategies are customized to align with your brand message and target audience, driving measurable growth.",
        image: social_media_marketing
    },
    {
        id: 7,
        title: "SEO Optimization",
        content: "Our SEO services improve your website's search engine ranking to increase traffic and visibility. We focus on keyword research, on-page optimization, and content strategies to enhance your online presence.",
        image: seo
    },
    {
        id: 8,
        title: "Cloud Migration",
        content: "We assist in migrating your data and applications to the cloud, ensuring a secure, efficient, and scalable setup. Our solutions minimize downtime and enhance business flexibility.",
        image: cloud_migration
    },
    {
        id: 9,
        title: "IT Support",
        content: "Our IT support services cover troubleshooting, technical assistance, and proactive maintenance to ensure your systems run smoothly, minimizing disruptions and enhancing productivity.",
        image: it_support
    }
]

const Home = () => {
    useEffect(() => {
        const checkElement = document.getElementById('check');
        if (checkElement) {
            noisyLinesBackground({
                el: checkElement,
                colors: [0xaFFB000, 0xaFFFFFF],
                minStroke: 0.1,
                maxStroke: 1,
                timeCoef: 0.0002,
                coordScale: 2,
                displacementScale: 0.01
            });
        }
    }, []);
    useEffect(() => {
        const checkElement = document.getElementById('check2');
        if (checkElement) {
            swarmBackground({
                el: checkElement,
                eventsEl: document.body,
                gpgpuSize: 256,
                color: [Math.random() * 0xffffff, Math.random() * 0xffffff],
                geometry: 'default'
            });
        }
    }, []);
    return (
        <div className={`h-screen card-container main h-screen`} style={{ height: '100px', backgroundColor: '#fff' }}>
            <div className='h-screen' style={{ backgroundColor: '#fff', position: 'relative' }} id='check'>
                <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
                    <div className={`m-2 ${glacialIndifference.className} text-5xl font-bold p-5`} style={{ border: '5px solid #FFB000' }}>Transform your business, with every line of our code.</div>
                </div>
            </div>
            <div className={``} style={{ backgroundColor: '#004225', position: 'relative' }}>
                







                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 p-4">
      <div className="lg:col-span-4 md:col-span-2 col-span-1 p-4 text-white">
      <div className='' style={{ backgroundColor: '#004225', }}>
                    <div className={` ${glacialIndifference.className} text-5xl font-bold golden`} style={{ paddingTop: '3rem', paddingLeft: '1.5rem' }}>Our Mission</div>

                        <div className={`text-xl`} style={{ padding: '1.5rem', color: '#fff' }}>To provide companies with cutting-edge, scalable, and secure technological solutions that promote digital transformation, streamline processes, and promote future growth.</div>
                        {/* <div className={`text-xl `} style={{ padding: '1.5rem', color: '#fff' }}>To provide companies with cutting-edge, scalable, and secure technological solutions that promote digital transformation, streamline processes, and promote future growth.</div> */}
                        <div className='justify-self-end' style={{ margin: '8px' }}>
                        </div>

                </div>
      </div>

      <div className="lg:col-span-2 md:col-span-1 col-span-1 p-4  flex items-center justify-center">
                                        <Image src={motto} width={200} height={200} alt='Cloud' style={{ objectFit: "contain" }} />
                                        
      </div>
    </div>



            </div>
            <div className={``} style={{ backgroundColor: '#004225', position: 'relative' }}>
                <div className='' style={{ backgroundColor: '#004225', }}>
                    <div className={` ${glacialIndifference.className} text-5xl font-bold golden`} style={{ paddingTop: '3rem', paddingLeft: '1.5rem' }}>Services offered</div>
                    <div style={{ display: 'flex' }}>
                        <div className="container mx-auto" style={{ padding: '1.5rem' }}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {cardData.map((card) => (
                                    <div key={card.id} className="bg-white shadow-md rounded-lg p-8">
                                        <Image src={card.image} width={200} height={200} alt='Cloud' style={{ objectFit: "contain", borderRadius: '8px' }} />
                                        <h3 className="text-xl font-bold mb-2 mt-4">{card.title}</h3>
                                        <p className="text-gray-700">{card.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={``} style={{ backgroundColor: '#FFCF9D', }}>
                <div className='' style={{ backgroundColor: '#FFCF9D', }}>

                    <div className={` ${glacialIndifference.className} text-5xl font-bold`} style={{ padding: '2rem', color: '#004225' }}>Latest details</div>

                    <div className="flex flex-col sm:flex-row justify-around gap-6 p-4">

                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
                            <div className={`${poppins.className} text-4xl font-bold text-blue-600 mb-2`}>4</div>
                            <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Projects Done</div>
                        </div>

                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
                            <div className={`${poppins.className} text-4xl font-bold text-green-600 mb-2`}>95%</div>
                            <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Satisfied Customers</div>
                        </div>

                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/3">
                            <div className={`${poppins.className} text-4xl font-bold text-yellow-600 mb-2`}>4.5/5</div>
                            <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Average Ratings</div>
                        </div>

                    </div>

                    <div className={` ${glacialIndifference.className} text-5xl font-bold`} style={{ padding: '2rem', color: '#004225' }}>Notable Clients</div>

                    <div className="flex flex-col sm:flex-row justify-around gap-6 p-4">

                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2">
                            <Image src={prakashai} width={200} height={200} alt='Prakash AI' style={{borderRadius: '4px'}}></Image>
                            <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Prakash.ai</div>
                        </div>

                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2">
                            <Image src={api_infotech} width={200} height={200} alt='API Infotech' style={{borderRadius: '4px'}}></Image>
                            <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>API Infotech</div>
                        </div>


                        
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/2">
                            <Image src={champaran} width={200} height={200} alt='Champaran' style={{borderRadius: '4px'}}></Image>
                            <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Champaran Marriage Bhavan</div>
                        </div>

                        {/* <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/4">
<Image src={prakashai} width={200} height={200} alt='Prakash AI'></Image>
    <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Average Ratings</div>
</div>

<div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full sm:w-1/4">
<Image src={prakashai} width={200} height={200} alt='Prakash AI'></Image>
    <div className={`${poppins.className} text-xl font-semibold text-gray-700`}>Average Ratings</div>
</div> */}

                    </div>



                    {/* <div className={` ${glacialIndifference.className} text-5xl font-bold`} style={{ padding: '2rem', color: '#004225' }}>Clients</div> */}

                    {/* <div className="overflow-hidden w-full bg-gray-100 py-4" style={{ backgroundColor: '#FFFFFF00'}}>
      <div className="flex animate-scroll space-x-8">
        {[...logos].map((logo) => (
          <div key={logo.id} className="flex-shrink-0">
            <Image src={logo.image} alt={`Logo`} width={150} height={150} className="h-auto w-24" />
          </div>
        ))}
      </div>
    </div> */}

                    {/* <LogoCarousel /> */}

                    {/* <div>Testimonials</div> */}
                </div>

            </div>
            <div className={``} style={{ borderRadius: '0px', backgroundColor: '#0B2545' }}>
                <div className='' style={{ backgroundColor: '#0B2545' }}>
                    <div className={` ${glacialIndifference.className} text-5xl font-bold golden text-center`} style={{ padding: '2rem' }}>Contact us</div>

                    <div className='justify-center flex'>
                        <div className="bg-white shadow-md rounded-lg p-8 " style={{ width: 'max-content' }}>
                            <div className={` ${glacialIndifference.className} text-xl `} style={{ paddingLeft: '2rem', color: '#000' }}>Email ID: <a href='mailto:info@d3softwaresolutions.in' style={{ fontWeight: '600' }}>info@d3softwaresolutions.in </a></div>
                            <div className={` ${glacialIndifference.className} text-xl `} style={{ paddingLeft: '2rem', color: '#000' }}>Phone Number: +918977603078</div>
                        </div>
                    </div>
                </div>

                <div className='justify-center flex'>

                    <div style={{ border: '1px solid #FFF', width: '75vw', margin: '12px', marginTop: '36px' }} className=''></div>

                </div>
                {/**<a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">Gmail icons created by Freepik - Flaticon</a> */}
                {/**<a href="https://www.flaticon.com/free-icons/instagram-logo" title="instagram logo icons">Instagram logo icons created by Laisa Islam Ani - Flaticon</a> */}
                {/**<a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a> */}
                <div className={` ${glacialIndifference.className} text-5xl font-bold golden text-center`} style={{ padding: '2rem' }}>Connect with us at </div>


                <div className='justify-center flex'>
                    <div className="bg-white shadow-md rounded-lg p-6 justify-center flex mb-10" style={{ width: 'max-content' }}>
                        <div className='p-4'>
                            <Link href='https://www.instagram.com/d3softwaresolutions/' target='_blank'>
                                <Image src={instagram} width={30} height={30} alt='Instagram' ></Image>
                            </Link>
                        </div>
                        <div className='p-4'>
                            <Link href='https://www.linkedin.com/company/d3softwaresolutions/' target='_blank'>
                                <Image src={linkedin} width={30} height={30} alt='LinkedIn' ></Image>
                            </Link>
                        </div>
                        <div className='p-4'>
                            <Link href='mailto:d3softsol@gmail.com' target='_blank'>
                                <Image src={gmail} width={30} height={30} alt='Gmail' ></Image>
                            </Link>
                        </div>
                    </div>
                </div>





            </div>




            {/* <div className={``} style={{ borderRadius: '0px', backgroundColor: '#000000' }}>
                <div className='' style={{ backgroundColor: '#000000', color: '#FFF' }}>
                    Copyright © 2024 D3 Software Solutions
                </div>
            </div> */}


            
      <Footer />
        </div>


    );
}

export default Home;
