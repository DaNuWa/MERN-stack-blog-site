import React from 'react';
import Navbar  from './components/Navbar';
import Hero  from './components/Hero';
import Product  from './components/Products';
import Sidebar from './components/sidebar/Sidebar'
import PostList from './components/Postlist/PostList'
import Fullpost from './components/Postlist/Fullpost'
import Footer from './components/Footer'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import Error from './components/Error/Error'
import Admin from './components/Admin/Dashboard'
import {ContextConsumer}  from './Content/Content'
import './App.css';


class App extends React.Component {
  render()
  {
  return(<>
 
  <Error/>
   <Navbar/>
   <Switch>
     <Route path="/admin" exact>
      <Admin/>
     </Route>
     <Route path="/posts" exact>
        <PostList/>
      </Route>
      <Route path="/posts/:id" exact>
        <Fullpost/>
      </Route>
  </Switch>

    </>);
  }
  
}

{/*<div className="App">
      <ContextConsumer>
        {
          value=>
          {
            console.log(value);
          }
        }
      </ContextConsumer>*/}
export default App;
