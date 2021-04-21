import { Component } from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Cardlist from './Components/Cardlist'
import Alert from './Components/Alert';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?sources=cnn,bbc-news&apiKey=c5c2fb7b62764cd39bd26444ce9c5d70')
      .then(response => response.json())
      .then(data => {
        this.setState({
          news: data.articles
        })
        console.log(this.state.news)
      })
  }

  render() {
    if (this.state.news.length === 0) {
      return <Alert />
    }
    return (
      <div>
        <Navbar />
        <Carousel />
        <Cardlist data={this.state.news} />
      </div>
    )
  }
}
export default App;