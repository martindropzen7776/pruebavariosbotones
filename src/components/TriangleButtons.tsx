import React from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';

const TriangleButtons: React.FC = () => {
  const buttonClasses = "w-full flex items-center justify-center py-3 px-4 rounded-lg font-medium text-white shadow-lg transform transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const getRandomLink = (links: string[]) => {
    return links[Math.floor(Math.random() * links.length)];
  };

  const topLinks = [
    'https://example.com/start1',
    'https://example.com/start2',
    'https://example.com/start3'
  ];

  const featureLinks = [
    'https://example.com/features1',
    'https://example.com/features2',
    'https://example.com/features3'
  ];

  const securityLinks = [
    'https://example.com/security1',
    'https://example.com/security2',
    'https://example.com/security3'
  ];
  
  return (
    <div className="w-full max-w-sm mx-auto px-4">
      {/* Top button of the triangle */}
      <div className="flex flex-col items-center mb-8 animate-fade-slide-down" style={{ animationDelay: '0.2s' }}>
        <div className="w-full mb-3 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://azarlatinopy2.netlify.app/promo.jpg" 
            alt="Team collaboration" 
            className="w-full h-36 object-cover"
          />
        </div>
        <a 
          href={getRandomLink(topLinks)}
          className={`${buttonClasses} bg-orange-600 active:bg-orange-700 focus:ring-orange-500`}
        >
          <span className="mr-2">QUIERO JUGAR EN AZAR</span>
          <ArrowRight size={18} />
        </a>
      </div>
      
      {/* Bottom two buttons of the triangle */}
      <div className="grid grid-cols-2 gap-4 animate-fade-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="flex flex-col items-center">
          <div className="w-full mb-3 rounded-lg overflow-hidden shadow-lg">
            <img 
              alt="Innovation features" 
              className="w-full h-28 object-cover"
            />
          </div>
          <a 
            href={getRandomLink(featureLinks)}
            className={`${buttonClasses} bg-purple-600 active:bg-purple-700 focus:ring-purple-500`}
          >
            <span className="mr-2">QUIERO JUGAR EN ZEUS</span>
            <Zap size={18} />
          </a>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-full mb-3 rounded-lg overflow-hidden shadow-lg">
          </div>
          <a 
            href={getRandomLink(securityLinks)}
            className={`${buttonClasses} bg-teal-600 active:bg-teal-700 focus:ring-teal-500`}
          >
            <span className="mr-2">QUIERO JUGAR EN GANAMOS</span>
            <Shield size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TriangleButtons;
