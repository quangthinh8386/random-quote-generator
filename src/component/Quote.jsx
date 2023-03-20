import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from 'antd';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    const response = await axios.get('https://api.quotable.io/random');
    const data = response.data;
    setQuote(data.content);
    setAuthor(data.author);
  };

  const getNewQuote = () => {
    fetchQuote();
    changeColors();
  };

  const changeColors = () => {
    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.getElementById('new-quote').style.backgroundColor = randomColor;
    document.getElementById('tweet-quote').style.backgroundColor = randomColor;
    document.getElementById('icon').style.color = randomColor;
    document.querySelector('.quote').style.color = randomColor;
    document.querySelector('.author').style.color = randomColor;
  };

  return (
    <div className="container">
      <div className="quote-box">
        <p className="quote">{quote}</p>
        <p className="author">- {author}</p>
        <div className="buttons">
          <Button className="new-quote" id="new-quote" onClick={getNewQuote}>New Quote</Button>
          <a href={`https://twitter.com/intent/tweet?text="${quote}" -${author}`} target="_blank" rel="noopener noreferrer" id="tweet-quote">
            <i className="fa fa-twitter icon" id="icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
