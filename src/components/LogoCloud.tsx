// src/components/LogoCloud.tsx

import { partnerLogos } from '@/lib/logos';

export default function LogoCloud() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          We are a certified distributor of 30+ leading mutual fund houses
        </h2>
        <div
          className="mt-10 w-full inline-flex flex-nowrap overflow-hidden 
          [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {partnerLogos.map((logo) => (
              <li key={logo.name}>
                <img src={logo.src} alt={logo.name} className="h-16" />
              </li>
            ))}
          </ul>
          {/* Duplicate the list for a seamless scroll effect */}
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {partnerLogos.map((logo) => (
              <li key={logo.name}>
                <img src={logo.src} alt={logo.name} className="h-16" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}