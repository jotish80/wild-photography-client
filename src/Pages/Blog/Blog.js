import React from 'react';


const Blog = () => {
    return (
        <>

            <div className='w-[90%] mx-auto mt-12 mb-12 bg-slate-50'>
                <div className='shadow-lg p-20 rounded-lg'>
                    <h1 className='text-2xl font-bold'>Difference between SQL and NoSQL</h1>
                    <div className='flex justify-around align-center gap-5'>
                        <div className='w-2/4 text-xl'>
                            <h2 className='text-xl underline font-semibold'>SQL</h2>
                            <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</p>
                            <p>These databases have fixed or static or predefined schema</p>
                            <p>These databases are not suited for hierarchical data storage.</p>
                            <p>These databases are best suited for complex queries</p>
                            <p>Vertically Scalable</p>
                        </div>
                        <div className='w-2/4 text-xl'>
                            <h2 className='text-xl underline font-semibold'>NO SQL</h2>
                            <p>Non-relational or distributed database system.</p>
                            <p>They have dynamic schema</p>
                            <p>These databases are best suited for hierarchical data storage.</p>
                            <p>These databases are not so good for complex queries</p>
                            <p>Horizontally scalable</p>
                        </div>
                    </div>
                </div>
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold'>What is JWT, and how does it work?</h1>
                    <p className='text-xl'>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                    </p>
                    <p className='text-xl'>
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.
                    </p>
                </div>
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold'>What is the difference between javascript and NodeJS?</h1>
                    <p className='text-xl'>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. <br />
                        Nodejs is what you want, however it is arguably better to have the command be called node for compatibility with scripts that use #!/usr/bin/env node . I prefer the nvm method, as it allows you to sudo apt-get remove nodejs , and then manage which version of node you're using yourself.
                    </p>
                </div>
                <div className='shadow-lg p-20 rounded-lg mt-10'>
                    <h1 className='text-2xl font-bold'>How does NodeJS handle multiple requests at the same time?</h1>
                    <p className='text-xl'>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Blog;