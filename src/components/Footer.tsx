import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Triangle. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
        <a href="#" className="hover:text-blue-600 transition-colors">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;