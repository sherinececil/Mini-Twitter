import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default function TwitterTabs() {
 
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Messages</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
            <li>
              <Link to="/users">Top News</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/Top News">
            <TopNews />
          </Route>
          <Route exact path="/videos">
            <Videos />
          </Route>
          <Route exact path="/">
            <Messages />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
<Tabs   aria-label="simple tabs example">
          <Tab label="Messages" />
          <Tab label="Videos" />
          <Tab label="Top News"  />
          </Tabs>
function Messages() {
  return <Tabs   aria-label="simple tabs example">
          <Tab label="Messages" />
          </Tabs>;
}

function Videos() {
  return <Tabs   aria-label="simple tabs example">
          <Tab label="Videos" />
          </Tabs>;
}

function TopNews() {
   return <Tabs   aria-label="simple tabs example">
          <Tab label="Top News" />
          </Tabs>;
}