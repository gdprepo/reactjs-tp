import { Provider } from "react-redux";
import Navigation from "./Common/Navigation";
import { BrowserRouter as Router } from 'react-router-dom'
import { store } from "./Common/store";
import { Navbar } from "./components";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Providers (store Redux ...)

const App = () => (
    <div className="App">
      <Router>
          <Provider store={store}>
            <Navigation />
          </Provider>
      </Router>
    </div>
);

export default App;
