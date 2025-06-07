import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const amcLogos = [
  { name: 'Axis', src: '/assets/amcs/axis.png' },
  { name: 'Canara Robeco', src: '/assets/amcs/canara.png' },
  { name: 'DSP', src: '/assets/amcs/dsp.png' },
  { name: 'Edelweiss', src: '/assets/amcs/edelweiss.png' },
  { name: 'Franklin', src: '/assets/amcs/franklin.png' },
  { name: 'HDFC', src: '/assets/amcs/hdfc.png' },
];

export default function AMCScrollBar() {
  const scrollRef = useRef(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="px-6 py-10 bg-white border-t border-gray-200 relative">
      <h2 className="text-2xl font-bold text-green-700 border-b-2 border-gray-300 pb-2 mb-4">
        Associated With
      </h2>

      <div className="relative">
        {/* Arrow Buttons */}
        <button
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded shadow z-10 hover:bg-blue-800"
          onClick={() => scroll('left')}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded shadow z-10 hover:bg-blue-800"
          onClick={() => scroll('right')}
        >
          <ChevronRight size={20} />
        </button>

        {/* Logo Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide px-4"
        >
          {amcLogos.map((amc, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-24 bg-white border rounded-lg flex items-center justify-center shadow hover:shadow-md transition"
            >
              <img
                src={amc.src}
                alt={amc.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
