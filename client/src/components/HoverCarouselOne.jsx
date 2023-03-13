import React from 'react';

function HoverCarouselOne() {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="bg-gray-300 p-4 text-center">
        <div className="text-xl font-bold">HTML</div>
      </div>
      <div className="bg-gray-300 p-4 text-center">
        <div className="text-xl font-bold">CSS</div>
      </div>
      <div className="bg-gray-300 p-4 text-center">
        <div className="hover:bg-gray-400">
          <div className="text-lg font-bold"><span>Hover over</span></div>
          <div className="text-xl font-bold">Programmer CS</div>
        </div>
      </div>
      <div className="bg-gray-300 p-4 text-center">
        <div className="text-xl font-bold">JS</div>
      </div>
      <div className="bg-gray-300 p-4 text-center">
        <div className="text-xl font-bold">GIT</div>
      </div>
    </div>
  );
}

export default HoverCarouselOne;
