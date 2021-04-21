import React from 'react';
import ReactFloaterJs from 'react-floaterjs';

const Alert = () => {
    return (
        <div>
          <ReactFloaterJs>
            <img className='m-auto mt-25' src='offline.png' alt=''/>
          </ReactFloaterJs>
            <h1 className='text-blue-500 font-bold text-3xl text-center p-10 py-10 -px-20'>Please check your internet connection and refresh.</h1>
        </div>
    )
}
export default Alert