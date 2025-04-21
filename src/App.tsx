import React from 'react';
import Header from './components/Header';
import TriangleButtons from './components/TriangleButtons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background decor elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-teal-100 rounded-full opacity-10"></div>
      </div>
      
      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start pt-6 z-10 relative">
        <Header />
        
        <div className="mt-6 w-full">
          <TriangleButtons />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App