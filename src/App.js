
import './App.css';
import Navbar from './Components/NavBar-Component/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Components/Pages/Home';

function App() {
  return (
<>
<Router>
<Navbar/>
<Switch>
  <Route path='/' exact component={Home}/>
</Switch>
 </Router>
 </>
  );
}

export default App;
