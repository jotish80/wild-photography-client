import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
     const {id} = useParams();
     console.log(id);
     const [services, setServices] = useState({})
     console.log(services);

     useEffect( () =>{
        fetch(`services.json/services/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
     })

    // const services = useLoaderData();
    // console.log(services);
    return (
        <div className='flex justify-around align-center my-5 mx-auto gap-5 flex-col lg:flex-row'>
            <div className='w-2/4 bg-gray-300'>
                <h1>this is review section</h1>
            </div>
            <div className='w-2/4 bg-gray-300'>
                <h1>this is services section</h1>
            </div>
             
        </div>
    );
};

export default ServiceDetails;