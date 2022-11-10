import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { message, _id } = review;
    console.log(message);
    const [reviewService, setReviewService] = useState({});
    const [showInput, setShowInput] = useState(false);

    
    const [updatedReview, setUpdatedReview] = useState();
     
    const handleReviewUpdate =(_id) => {
        fetch(`http://localhost:5000/review/${_id}`)
        .then(res => res.json())
        .then(data => console.log(data))
    }
 
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

                        {
                            showInput ? <input type="text" onChange={e =>setUpdatedReview(e.target.value)} defaultValue={message} />
                                :
                                <div className="font-bold">{message}</div>
                        }

                    </div>
                    <button onClick={()=>setShowInput(true)}>Edit</button>
                </div>
            </td>
            <td>

            </td>

            <th>
                <button

                    onClick={() => handleReviewUpdate(_id)}
                    className="btn btn-ghost btn-xs">Update

                </button>

            </th>
        </tr>
    );
};

export default ReviewRow;