import React, { Component } from 'react';
import './App.css';
const Colors = require('colors.js');

class App extends Component {

  constructor() {
    super();

    this.state = {
      colors: [ "#ffb3ba", "#ffdfba", "	#ffffba", "	#baffc9", 
                  "#bae1ff", "#6b3e26", "#ffc5d9", "#c2f2d0",
                  "#fdf5c9", "#ffcb85", "#e5c3c6", "#e1e9b7",
                  "#f96161", "#bcd2d0", "#d0b783"
              ],
      quotes: [ {quote: 'The truly rich are those who enjoy what they have.', author: 'Yiddish Proverb'},
                {quote: 'Every person is a book, each year a chapter.', author: 'Mark Twain'},
                {quote: 'Your worth consists in what you are and not in what you have.', author: 'Thomas Edison'},
                {quote: 'I have no special talents. I am only passionately curious.', author: 'Albert Einstein'},
                {quote: "The stars are a free show; it don't cost anything to use your eyes", author: 'George Orwell'},
                {quote: 'Your big opportunity may be right where you are now.', author: 'Napoleon'},
                {quote: "It's not because things are difficult that we dare not venture. It's because we dare not venture that they are difficult.", author: 'Senecca'},
                {quote: 'If you cannot do great things, do small things in a great way.', author: 'Napoleon'},
                {quote: 'The key to life is accepting challenges. Once someone stops doing this, he’s dead.', author: 'Bette Davis'},
                {quote: 'Energy and persistence conquer all things.', author: 'Benjamin Franklin'}
              ],
      activeColor: '#333333',
      compColor: '#FFFFFF',
      isQuoteActive: false,
      activeQuote: ''
    }

    this.checkSpaceKey = this.checkSpaceKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.checkSpaceKey)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.checkSpaceKey)
  }

  checkSpaceKey = e => {
    if (e.keyCode === 32) {
      this.setColor();
    }
  }

  setColor = () => {
    const colors = this.state.colors;
    const quotes = this.state.quotes;
    const color = colors[Math.floor(Math.random()* colors.length)];
    const quote = quotes[Math.floor(Math.random()* quotes.length)];
    const compColor = Colors.complement(color);
    this.setState({ 
      activeColor: color,
      activeQuote: quote,
      isQuoteActive: true,
      compColor: compColor
    })
  }

  render() {

    const isQuoteActive = this.state.isQuoteActive;
    let title;
    let author;

    if (isQuoteActive) {
      title = this.state.activeQuote.quote;
      author = this.state.activeQuote.author;
    } else {
      title = 'Be Inspired';
      author = ''
    }

    return (
      <div className="App" style={{ background: `${this.state.activeColor}` }}>
        <section className="main" id="quote-box">
          <div className="quote">
            <blockquote className="quote--quote" id="text" style={{ color: `${this.state.compColor}` }}>{title}</blockquote>
            <cite className="quote--author" id="author" style={{ color: `${this.state.compColor}` }}>{author}</cite>
          </div>
            <button className="btn"  id="new-quote" onClick={this.setColor} style={{ border:`2px solid ${this.state.compColor}`, color: `${this.state.compColor}`}}>
              Inspire Me
            </button>
            <a className="quote--tweet" id="tweet-quote"
              style={{ color: `${this.state.compColor}` }} 
              href={`https://twitter.com/intent/tweet?text=${this.state.activeQuote.quote}`}>Tweet this</a>
        </section>
      </div>
    );
  }
}

export default App;
