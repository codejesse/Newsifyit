import React from 'react';


const Card = ({ name, title, url, urlToImage, content }) => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl my-20 m-10">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <img className="h-60 w-full object-cover md:w-80" src={urlToImage} alt="" />
                </div>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
                    <p className="mt-2 text-gray-500">{content}</p>
                    <a href={url} className="block mt-1 text-lg
                     leading-tight font-medium text-black hover:underline"><button className="bg-blue-500 hover:bg-blue-700 text-white
                      font-bold py-2 px-6 rounded-full my-4">Read More</button></a>
                </div>
            </div>
        </div>
    )
}
export default Card;