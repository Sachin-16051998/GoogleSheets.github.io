import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import NavBar from "./NavBar"
import HomePage from "./HomePage"
import SheetsPage from "./SheetsPage"
import UpdatePage from "./UpdatePage"
import Response  from "./Response"
import DetailsPage from "./DetailsPage"
import DetailsPage2 from "./DetailsPage2"
import FileNotFound from "./FileNotFound"
import EditDetails from "./EditDetails"
import SearchPage from "./SearchPage"

function App() {
  return (
    
     <Router>
        <div className="App">
      <NavBar/>
      
      <Switch>

      <Route exact path={"/"}>
        <HomePage/>
      </Route>

      <Route path={"/sheets"}>
        <SheetsPage/>
      </Route>

      <Route path={"/editDetails:id"}>
        <EditDetails/>
      </Route>

      <Route path={`/details:id`}>
        <DetailsPage/>
      </Route>

      <Route path={`/details`}>
        <DetailsPage2/>
      </Route>

      <Route path={"/update"}>
        <UpdatePage/>
      </Route>

      <Route path={"/response"}>
        <Response/>
      </Route>

      <Route path={"/searchPage:search"}>
        <SearchPage/>
      </Route>

      <Route path={"*"}>
        <FileNotFound/>
      </Route>


      </Switch>
      

      </div>
     </Router>
  );
}

export default App;
