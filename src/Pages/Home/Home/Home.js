import React,{useState, useEffect} from 'react';
import Services from '../../Services/Services';
import ServiceCard from '../../Services/ServiceCard'
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import ExtraPhoto from '../ExtraPhoto/ExtraPhoto';
import { Link, useNavigate} from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([]);
    const navigate = useNavigate()
    useEffect( () =>{
        fetch('services.json')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])
  return (
    <div>
      <Banner />
      <>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6'>
        {
          services.slice(0,3).map(service => <ServiceCard
            key={service._id}
            service={service}
          ></ServiceCard>)
        }
      </div>
     
      <div className='text-center'>
        <button onClick={()=>{navigate('/services')}} className="btn btn-primary ">See All</button>
      </div>
                 
      </>
      <ExtraPhoto />
      <Contact />
    </div>
  );
};

export default Home;