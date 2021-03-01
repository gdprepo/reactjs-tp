import { Provider } from "react-redux";
import Navigation from "./Common/Navigation";
import { store } from "./Common/store";
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Providers (store Redux ...)

const App = () => {

return (
  <Provider store={store}>
  <BrowserRouter>
    <div className="App">
      <Navigation />
    </div>
  </BrowserRouter>
  </Provider>
   )};

export default App;
