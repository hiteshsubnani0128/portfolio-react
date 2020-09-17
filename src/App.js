import React from 'react';
import Todos from './Todo';
import Counter from './Counter';
import Home, {HomePage} from './Home';
import Contact from './pages/Contactme';
import { Switch, Route } from "react-router-dom";

const App = () =>{
  
  return(
    <>
    <Home />
    <Switch>
      
      <Route exact path="/" component={HomePage} />
      <Route exact path="/portfolio-react" component={HomePage} />
      <Route exact path="/todoapp" component={Todos} />
      <Route path="/counter" component={Counter} />
      <Route path="/contact" component={Contact} />
    </Switch>
    </>
  )
}

export default App;