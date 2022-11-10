 
 
 
import React, { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
 
import { AuthContext } from '../../contexts/UseContext';
 
 

function AddService() {
  const {user} = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  async function addNewService(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/services`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, img, price, description})
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        toast('Service added successfully',{ position:'top-center'})
    })
    
    
  }
  return (
    <>
     
    <form onSubmit={addNewService} className='w-1/2 mx-auto'>
        <ToastContainer />
        <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" /> <br />
        <input onChange={(e) =>setImg(e.target.value)} type="text" placeholder="Image" className="input input-bordered w-full max-w-xs" /> <br />
        <input onChange={(e) =>setPrice(e.target.value)} type="number" placeholder="Price" className="input input-bordered w-full max-w-xs" /> <br />
        <textarea onChange={(e) =>setDescription(e.target.value)} className="textarea textarea-info" placeholder="Description"></textarea> <br />
        <button className="btn btn-outline btn-info ">Submit</button>
    </form>
      
    </>
  );
}

export default AddService;