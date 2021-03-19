
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./pages/homePage"
import BusinessSearchPage from './pages/businessSearchPage';



function App() {
  return (
    <div >

        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route path="/search/term=:term&location=:location"><BusinessSearchPage /></Route>
        </Switch>
      
    </div>
  );
}

export default App;
