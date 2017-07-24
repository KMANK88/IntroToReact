//automaticly assumes .js
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
 import NavigationBar from './components/NavigationBar';
 import App from './WebApp/App';
 import ChatApp from './Chatter/ChatApp';
 import './style.css';
 import ReactApp from './ACME_ReactApp';


 const Home = () => {
   return(
   <div>
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
    </div>
  </Router>
), document.getElementById('root'));











 /*
 import WebApp from'./WebApp/App';
 import Data from'./Data';
 import MappingAndFiltering from'./MappingAndFiltering';
 import ChatApp from'./Chatter/ChatApp';
 import ChatData from './Chatter/DATA';

//getting the info from the main class we want info from
ReactDOM.render(
  <ChatApp  data={ChatData} />, document.getElementById('root'));
*/
