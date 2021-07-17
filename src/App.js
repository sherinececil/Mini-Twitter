
import './App.css';
import TwitterPage from "./Messages";
import { Switch, Link, Route } from "react-router-dom";
import UserMessages from "./UserMessages";
import Cards from "./Cards";
import Messages from "./Messages";
import Videos from "./Videos";


// App
//     fetches nothing
//     just have switch with routes
// Messages 
//     fetch -> messages

// MessagesForUser
//     fetch -> message 

// Message ("messages/:id")
//     fetch -> one message

function App() {
return(
    <div className="App">
      <header className="App-header">
         
           <Messages />
             <Switch>
          <Route exact path="/">
           <Messages />{" "} 
            HELLO WELCOME TO HOMEPAGE
          </Route>
          <Route exact path="/user/">
            {" "}
           <Link>
           <UserMessages />
           {" "}</Link>
            
          </Route>
          <Route exact path="/videos">
            {/* access the id with useParams in the child component */}{" "}
            <Videos />
          </Route>
        </Switch>
        
      </header>
    </div>
  );
}




export default App;

 
