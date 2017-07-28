//automaticly assumes .js
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
 import NavigationBar from './components/NavigationBar';
 import App from './WebApp/App';
 import ChatApp from './Chatter/ChatApp';
 import './style.css';
 import ReactApp from './ACME_ReactApp';
 import Playground from './playground/app';

 const Home = () => {
   return(
   <div className='jumbotron-main'>
     <h3>Hello from home </h3>
   </div>
   )
 }

ReactDOM.render((
  <Router>
    <div>
    <NavigationBar />
      <Route exact path="/" component={Home} />
      <Route path='/i-do-what-i-want' component={App} />
      <Route path="/fake-chat" component={ChatApp} />
      <Route path="/Homework-stuff" component={ReactApp} />
      <Route path="/playground" component={Playground} />
    </div>
  </Router>
), document.getElementById('root'));
