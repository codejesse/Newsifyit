import React from 'react';
import ReactFloaterJs from 'react-floaterjs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Tech from './Tech';

const Navbar = () => {
    return (
        <div className='m-2'>
            <ReactFloaterJs>
                <img className='flex m-6' src='icons8.png' alt='' />
            </ReactFloaterJs>
            <Router>
          <Link className='uppercase tracking-wide text-sm text-indigo-500 font-bold mx-40 ' to="/tech">Tech News 🛰</Link>
          <Switch>
            <Route path='/tech'
            exact render={() => (
              <Tech />
            )}>
            </Route>
          </Switch>
        </Router>
    </div>
    )
}
export default Navbar;