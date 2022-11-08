import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UseContext';
import { toast, ToastContainer } from 'react-toastify';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('user created successfully', { position: 'top-center' });
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL)
                    .then(() => {})
                    .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
    }

    return (
        <div className='flex justify-center items-center pt-8 mt-24'>
            <div className='flex flex-col max-w-md w-[400px] p-6  rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Register</h1>
                    <p className='text-sm text-gray-400'>
                        Register to access your account
                    </p>
                </div>
                <ToastContainer />
                <form
                    onSubmit={handleSubmit}
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                Full Name
                            </label>
                            <input

                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Full Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='name' className='block mb-2 text-sm'>
                                Photo URL
                            </label>
                            <input

                                type='text'
                                name='photoURL'
                                id='name'
                                placeholder='photo URL'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input

                                type='text'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input

                                type='password'
                                name='password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
                            />
                        </div>
                    </div>

                    <div>
                        <button

                            type='submit'
                            className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                        >
                            Register
                        </button>
                    </div>
                </form>
                <div className='space-y-1'>
                    <button
                        className='text-xs hover:underline text-gray-400'
                    >
                        Forgot password?
                    </button>
                    <p className='text-red-500'><small>{error}</small></p>
                </div>

                <p className='px-6 text-sm text-center text-gray-400'>
                    Already Have an account?
                    <Link to='/login' className='hover:underline text-gray-600'>
                        Log in
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default Register;