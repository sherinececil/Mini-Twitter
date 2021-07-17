
import './App.css';
import {useState, useEffect} from 'react'
import TwitterPage from "./TwitterPage";

function App() {
const [tweets, setTweets] = useState(
  [{"_id":"123","username":"bob", "message":"this is an example",}, 
  {"_id":"235","username":"greg", "message":"Hey there!!!"},
  {"_id":"456","username":"sally", "message":"Stay there."} ]
)

useEffect(()=>{
  fetch(`https://fake-tweets-api.herokuapp.com/posts`)
  .then(res=>res.json())
  .then(data=>{
    setTweets(data)
    if(data){
  console.log(tweets)
    }
  }
    )
},[])

  return (
    <div className="App">
      <header className="App-header">
       <TwitterPage tweets={tweets} />
       
      </header>
    </div>
  );
}

export default App;
