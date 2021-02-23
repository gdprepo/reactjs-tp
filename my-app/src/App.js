import { Provider } from "react-redux";
import { Navigation} from "./Common/Navigation";
import { store } from "./Common/store";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// Providers (store Redux ...)

const App = () => {

return (
  <Provider store={store}>
    <div className="App">
      <Navigation />
    </div>
  </Provider>
   )};

export default App;
