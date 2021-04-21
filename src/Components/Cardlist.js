import React from 'react';
import Card from './Card';

const Cardlist = ({data}) => {
    const CardArray = data.map((article, index) => {
        return <Card key={index} 
        content={article.content} 
        description={article.description}
        title={article.title} 
        url={article.url} urlToImage={article.urlToImage} 
        name={article.name} />
    }) 
    return (
        <div>
            {CardArray}
        </div>
    )
}
export default Cardlist;