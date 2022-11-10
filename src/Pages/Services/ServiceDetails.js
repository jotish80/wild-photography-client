import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/UseContext';

const ServiceDetails = () => {
     const {_id, title,img,description,price, review} = useLoaderData();
     const {user} = useContext(AuthContext);
     const [reviews, setReviews] = useState([]);
     const [changes, setChanges] = useState({});

    console.log(reviews);
        useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [changes])
     

     const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value  ;
        const email = user?.email || 'unregistered'; 
        const message = form.message.value;

        const singleReview = {
            service: _id,
            serviceName: title,
            customer: name,
            price,
            email,
            message
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(singleReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setChanges(data)
                if(data.acknowledged){
                    toast('Reviews placed successfully', { position: 'top-center' })
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

     }

 

    
    return (
        <div className='flex justify-around align-center my-5 mx-auto gap-5 flex-col lg:flex-row'>
            <div className='w-2/4'>
                <div>
                <h1 className='text-3xl font-bold'>All Reviews</h1>
                {
                    review.map(rev => <div rev={rev}>
                            <h1 className='text-xl font-semibold'>{rev.name}</h1>
                            <p className=' font-semibold'>{rev.details}</p>
                    </div>)
                }
                <ToastContainer />
                </div>
                <div className='my-4'>
                     <form onSubmit={handleReview}>
                 <h2 className="text-2xl">You are about to Review: {title}</h2>
                <h4 className="text-xl">Price: {price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="Name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-ghost w-full  input-bordered" />
                    
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Review" required></textarea>
                <input className='btn mt-4' type="submit" value="Place Your Review" />
                <Link to="/reviews" >
                    <button className="btn btn-warning ml-5 ">Please log in to see your review</button>
                </Link>
            </form>
                {
                    reviews.map(r => <p className=' font-semibold'>{r.message}</p>)
                }
             
                </div>
            </div>
            <div className='w-2/4'>
                <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p>Price: $ {price}</p>
                <p>{description}</p>
                <div className="card-actions">
                <button className="btn btn-info">Buy Now</button>
                
                </div>
            </div>
            </div>
            </div>
             
        </div>
    );
};

export default ServiceDetails;