import React from 'react'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import './App.css'
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import Registration from './Components/Registration';
import {Provider} from 'react-redux'
import store from './redux/store'



function App() {


  return (
    <>
    <Provider store={store}>
      <div className='app'>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to='/registration'>Registration</Link></li>
            </ul>
          </nav>


          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/registration'  component={Registration} />
            <Route path='/edituser/:id' component={EditUser} />
          </Switch>
        </BrowserRouter>

      </div>
      </Provider>
    </>
  );
}



export default App;
