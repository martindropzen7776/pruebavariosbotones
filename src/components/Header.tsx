import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center px-4 animate-fade-in">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Welcome to <span className="text-blue-600">Triangle</span>
      </h1>
      <p className="text-base text-gray-600">
        Discover our innovative solutions that will transform your digital experience
      </p>
    </header>
  );
};

export default Header;