import React from 'react';

export const RegisterScreen = () => {
    return (
        <div className='flex items-center w-full h-full bg-gray-500'>
            <form action='' className='flex flex-col w-96 p-4 rounded-lg shadow-lg mx-auto bg-gray-50'>
                <h1 className='text-3xl font-bold mb-4'>Register</h1>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <label htmlFor='' className='text-2xl mb-2 font-medium'>
                            Name:
                        </label>
                        <input type='text' name='' id='' className='font-medium h-8 px-2 w-11/12 bg-gray-300 rounded-lg' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='' className='text-2xl mb-2 font-medium'>
                            Last Name:
                        </label>
                        <input type='text' name='' id='' className='font-medium h-8 px-2 w-full bg-gray-300 rounded-lg' />
                    </div>
                </div>
                <label htmlFor='' className='text-2xl font-medium mb-2 mt-2'>
                    Email:
                </label>
                <input type='email' name='' id='' className='font-medium px-2 h-8 bg-gray-300 rounded-lg' />
                <label htmlFor='' className='text-2xl font-medium mb-2 mt-2'>
                    Password:
                </label>
                <input type='password' name='' id='' className='font-medium px-2 h-8 bg-gray-300 rounded-lg' />
                <label htmlFor='' className='text-2xl font-medium mb-2 mt-2'>
                    Repeat Password:
                </label>
                <input type='password' name='' id='' className='font-medium px-2 h-8 bg-gray-300 rounded-lg' />
                <button type='submit' className='text-white text-2xl my-7 py-1 bg-blue-600  rounded-lg'>
                    Register Now
                </button>
            </form>
        </div>
    );
};
