import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
       if (services.length == 0) {
      return <button type="button" class="bg-indigo-500 ..." disabled>
         <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
         Processing...
      </button>
   }
    return (
        <div>
            <div className='text-center mb-4 mt-14'>
                <p className="text-2xl font-bold text-blue-600">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className="text-2xl font-bold mt-2">"In the world of photography, you get to share a captured moment with other people."  </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                 
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;