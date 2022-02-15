import React from 'react';
import { Square } from './Square';

export const TableGame = () => {

    return (
        <div className='grid grid-cols-3 w-1/3 h-4/6 pointer'>
            <Square clase='w-full h-full bg-red-600 borde border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-yellow-400 border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-green-500 border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-blue-300 border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-indigo-700 border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-pink-500 border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-black border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-yellow-600 border-solid border-2 border-black cursor-pointer' />
            <Square clase='w-full h-full bg-yellow-900 border-solid border-2 border-black cursor-pointer' />
        </div>
    );
};
