import Link from 'next/link';

import AsciiEffectScene from '../asciieffects/asciieffectscene';
import logo from '../../assets/logo.png';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-white font-semibold text-lg mb-4">Our Mission</h2>
            <p className="text-gray-400">
              Our mission is to provide innovative software solutions that drive business success and enable our clients to thrive in a digital-first world.
            </p>
          </div> */}
          
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-white font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">Blog</Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0">
            <h2 className="text-white font-semibold text-lg mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white">Support</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">Terms of Service</Link>
              </li>
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <h2 className="text-white font-semibold text-lg mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>24-570, Ranga Reddy Nagar</li>
              <li>Hyderabad, Telangana, 500037</li>
              <li>Email: info@d3softwaresolutions.in</li>
              <li>Phone: +918977603078</li>
            </ul>
          </div>


          <div className="w-full md:w-1/2 lg:w-1/4 px-4">

            
          <Image className='mt-12 text-right' src={logo} alt='Cloud' style={{ width: '5rem', height: '5rem', objectFit: "contain", borderRadius: '8px' }} />



          </div>

        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} D3 Software Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
