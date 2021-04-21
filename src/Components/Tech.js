import React, { Component } from 'react';

class Tech extends Component {
    constructor() {
        super();
        this.state = {
            tech: []
        }
    }

    componentDidMount() {
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c5c2fb7b62764cd39bd26444ce9c5d70')
        .then(response => response.json())
        .then(technews => {
            this.setState({
                tech: technews.articles
            })
        })
    }

    render() {
        return (
            <div>
                <div class="max-w-screen-lg bg-indigo-500 shadow-2xl rounded-lg mx-auto text-center py-12 mt-4">
                    <h2 class="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
                        Top Trending Tech News 🛰</h2>
                    <div class="mt-8 flex justify-center">
                        <div class="inline-flex rounded-md bg-white shadow">
                            <a href="http://jesse-silk.vercel.app" class="text-gray-700 font-bold py-2 px-6">Start </a>
                        </div>
                    </div>
                </div>
                {this.state.tech.map((item, index) => (
                    <div key={index} content={item.content}
                        urlToImage={item.urlToImage} title={item.title} url={item.url} >

                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-6xl my-20 m-10">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-60 w-full object-cover md:w-80" src={item.urlToImage} alt="" />
                                </div>
                                <div className="p-8">
                                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.title}</div>
                                    <p className="mt-2 text-gray-500">{item.content}</p>
                                    <a href={item.url} className="block mt-1 text-lg
                     leading-tight font-medium text-black hover:underline"><button className="bg-blue-500 hover:bg-blue-700 text-white
                      font-bold py-2 px-6 rounded-full my-4">Read More</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <h2 className="text-blue-500 font-bold text-4xl text-center p-10 py-10 -px-20">Trending Headlines 👇</h2>
            </div>
        )
    }
}
export default Tech;