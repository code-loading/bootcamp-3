import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

function MediaCard({ title, body, imageURL, alt1, body2 }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body2}</p>
      <p>{body}</p>
      <img src={imageURL} alt={alt1} />
    </div>
  );
}

function Gate({ isOpen }) {
  return (
    <div>
      <p>This is a separate function called Gate: </p>
      Gate is {isOpen ? "open" : "closed"}
      <br />
      <p>This is calculated inside a js tag: {5 + 10}</p>
      
    </div>
  );
}

ReactDOM.render(
  /* <React.StrictMode>
    <App />
  </React.StrictMode> */
  <div>
    <MediaCard
      title="This MediaCard will solve all your business problems!"
      body2="Doing the react tutorial by dave"
      body=<strong>"We are using revolutionary technology"</strong>
      imageURL="https://www.pethealthnetwork.com/sites/default/files/cat-diarrhea-when-is-it-serious-and-how-do-i-stop-it-483371318.jpg"
      alt1="a cat"
    />
    <Gate isOpen={false} />
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
