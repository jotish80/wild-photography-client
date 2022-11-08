import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceCard = ({service}) => {
    const {img, price, title, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
      <PhotoView src={img}>
        <figure><img src={img} alt="Shoes" /></figure>
      </PhotoView>
    </PhotoProvider>
            
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-blue-600 font-semibold'>Price: ${price}</p>
                <p>Description: {description}</p>
                <div className="card-actions justify-center">
                     
                    <button className="btn btn-info ">View Details</button>
                     
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;