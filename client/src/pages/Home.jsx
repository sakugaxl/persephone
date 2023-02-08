import React, { useState, useEffect } from 'react';
import { Card, ExperienceBar, Loader, Navbar } from '../components';

const Home = () => {
    const [loading, setLoading] = useState(false);
    
    return (
        <div>
            <Navbar />
            <h1 className="font-extrabold text-[#222328] text-[32px]">Persephone</h1>
            <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Grow virtually, in real life.</p>
        </div>
  )
}

export default Home;
