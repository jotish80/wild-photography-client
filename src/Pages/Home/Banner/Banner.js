import React from 'react';

const Banner = () => {
    return (
        <div className="hero w-full h-[600px]" style={{ backgroundImage: `url("https://images5.alphacoders.com/347/347516.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Wild Photography</h1>
      <p className="mb-5">“Look deep into nature, and then you will understand everything better.” Adopt the pace of nature: her secret is patience.”  </p>
      <button className="btn btn-info">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;