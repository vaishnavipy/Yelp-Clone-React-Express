
import './App.css';
import {Switch,Route} from "react-router-dom"
import HomePage from "./components/homePage"



function App() {
  return (
    <div >

        <Switch>
          <Route exact path="/"><HomePage /></Route>
        </Switch>
      
    </div>
  );
}

export default App;
