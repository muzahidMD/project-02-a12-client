import React from 'react';

const Blog = () => {
    return (
        <div className='px-20'>
            <h2 className='text-4xl text-secondary text-center my-5'>Question And Answer</h2>
            <div className='w-75 mx-auto'>
                <div className='my-4'>
                    <h3><strong>Question-1:</strong> How will you improve the performance of a React Application?</h3>
                    <p><strong>Ans:</strong>  </p>
                </div>
                <div className='my-4'>
                    <h3><strong>Question-1:</strong> What are the different ways to manage a state in a React application?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>
                <div className='my-4'>
                    <h3><strong>Question-1:</strong> How does prototypical inheritance work?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>
                <div className='my-4'>
                    <h3><strong>Question-1:</strong> What is the purpose of jwt and how does it work ?</h3>
                    <p><strong>Ans:</strong> Jwt is used for authorization. We uses Jwt to secure api or server from malicious users. At first when users tries to login the server creates a jwt for user with secret and send it to browser. Then the server checks the jwt token. If the token matches the user can authenticate .</p>
                </div>
                <div className='my-4'>
                    <h3><strong>Question-1:</strong> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>
                <div className='my-4'>
                    <h3><strong>Question-1:</strong> What is a unit test? Why should write unit tests?</h3>
                    <p><strong>Ans:</strong> </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;