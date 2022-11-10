import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ReviewRow = ({review, handleDelete}) => {
    const{message, _id} = review;
    console.log(message);
    const [reviewService, setReviewService] = useState({})

    //   useEffect(() => {
    //     fetch(`http://localhost:5000/services/${service}`)
    //         .then(res => res.json())
    //         .then(data => setReviewService(data));
    // }, [service])
    //onClick={() => handleDelete(_id)}
    return (
        <tr>
            <ToastContainer />
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                   
                    <div>
                        <div className="font-bold">{message}</div>
                         
                    </div>
                </div>
            </td>
            <td>
                {/* {serviceName} */}
                <br />
                {/* <span className="badge badge-ghost badge-sm">${price}</span> */}
            </td>
           
            <th>
                <button 
                // onClick={() => handleStatusUpdate(_id)}
                className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default ReviewRow;