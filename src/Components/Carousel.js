import React, { Component } from 'react';
// import axios from 'axios';
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";


class Carousel extends Component {
    _isMounted = false;

    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        this._isMounted = true;
        fetch('https://newsapi.org/v2/top-headlines?sources=cnn,techcrunch&apiKey=c5c2fb7b62764cd39bd26444ce9c5d70')
        .then(response => response.json())
        .then(articles => {
            this.setState({
                data: articles.articles
            })
        })
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <Slider autoplay={4000}>
                {this.state.data.map((item, index) => (
                    <div 
                    key={index}
                    style={{ background: `url('${item.urlToImage}') no-repeat center center`}}
                    >
                     <div className = "sm:text-center">
                         <h1 className='text-blue-500 font-bold pt-20 px-80 text-4xl md:px-30 text-3xl'>{item.title}</h1>
                         <p className='mt-30 mx-80 text-white font-bold' >{item.content}</p>
                         <a href={item.url} className="block mt-1 text-lg
                     leading-tight font-medium text-black hover:underline"><button className="bg-blue-500 hover:bg-blue-700 text-white
                      font-bold py-2 px-6 rounded-full my-4 mt-30 mx-30">Read More</button></a>
                     </div>
                </div>
                ))}
            </Slider>
        )
    }
}
export default Carousel;
