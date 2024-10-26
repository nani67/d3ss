import Image from 'next/image';
import { useEffect, useRef } from 'react';

const logos = [
  '/logos/facebook.svg',
  '/logos/disney.svg',
  '/logos/airbnb.svg',
  '/logos/apple.svg',
  '/logos/spark.svg',
  '/logos/samsung.svg',
  '/logos/quora.svg',
  '/logos/sass.svg',
];

const LogoCarousel = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoRef.current;
    logoContainer.insertAdjacentHTML('afterend', logoContainer.outerHTML);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24 text-center">
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul
            ref={logoRef}
            className="flex items-center justify-center md:justify-start gap-8 animate-infinite-scroll"
            aria-hidden="true"
          >
            {logos.map((src, index) => (
              <li key={index} className="flex-shrink-0">
                <Image src={src} alt={`Logo ${index + 1}`} width={100} height={50} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
