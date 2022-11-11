import React, {useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const ReviewRow = ({ review, handleDelete }) => {
    const { message, _id } = review;
    console.log(message);
    const [showInput, setShowInput] = useState(false);


    const [updatedReview, setUpdatedReview] = useState();

    const handleReviewUpdate = (_id) => {
        fetch(`https://wild-photography-server-ten.vercel.app/reviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ message: updatedReview })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast('review updated successfully', { position: 'top-center' })
            })
            .catch(error => console.log(error))
    }

    return (
        <tr>
            <ToastContainer />
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div>

                        {
                            showInput ? <input className='p-2 border border-gray-300 rounded' type="text" onChange={(e) => setUpdatedReview(e.target.value)} defaultValue={message} />
                                :
                                <div className="font-bold">{message}</div>
                        }

                    </div>
                    <button className="btn btn-warning" onClick={() => setShowInput(true)}>Edit</button>
                </div>
            </td>
            <td>

            </td>

            <th>
                
                <button
                    onClick={() => handleReviewUpdate(_id)}
                    className="btn btn-info">Update
                </button>
                 
            </th>
        </tr>
    );
};

export default ReviewRow;