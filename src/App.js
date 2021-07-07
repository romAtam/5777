import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/";

import Chat from "./components/Chat/Chat";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chat">
          <Navbar />
          <Chat />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
