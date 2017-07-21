//automaticly assumes .js
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

 const Home = () => {
   return(

   <div>
     <h3>Hello from home </h3>
   </div>
   )
 }

 const About = () => {
   return(
     <div>
       <h3> Hello from About</h3>
     </div>
   )
 }

 const Blog = () => {
   return(
     <div>
       <h3> Hello from Blog</h3>
     </div>
   )
 }


ReactDOM.render((
  <Router>
    <div>
      <ul>
        <li><Link to="/"> Home</Link></li>
        <li><Link to="/about"> About</Link></li>
        <li><Link to="/blog"> Blog</Link></li>
      </ul>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
), document.getElementById('root'));











 /*import './style.css';
 import WebApp from'./WebApp/App';
 import Data from'./Data';
 import MappingAndFiltering from'./MappingAndFiltering';
 import ChatApp from'./Chatter/ChatApp';
 import ChatData from './Chatter/DATA';

//getting the info from the main class we want info from
ReactDOM.render(
  <ChatApp  data={ChatData} />, document.getElementById('root'));
*/
