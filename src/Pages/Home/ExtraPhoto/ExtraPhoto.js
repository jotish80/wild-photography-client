import React from 'react';
import img1 from '../../../assets/uriel-soberanes-oMvtVzcFPlU-unsplash.jpg';
import img2 from '../../../assets/laura-college-K_Na5gCmh38-unsplash.jpg';
import img3 from '../../../assets/andrew-pons-lylCw4zcA7I-unsplash.jpg';

const ExtraPhoto = () => {
    return (
            <>
             <div className='text-center mb-4 mt-24'>
                <p className="text-4xl font-bold text-blue-600">More Photography</p>
                <p className="text-2xl font-bold mt-2 pb-4">"One touch of nature makes the whole world kin.” “Look deep into nature, and then you will understand everything better.”"  </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img1} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> </h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-info ">Special</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img2} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> </h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-info ">Special</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img3} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> </h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-info ">Special</button>
                    </div>
                </div>
            </div>
        </div>
            </>

        

    );
};

export default ExtraPhoto;