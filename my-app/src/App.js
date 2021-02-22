import { Provider, useSelector, useDispatch } from "react-redux";
import Authentication from "./User/Authentication";


function App() {
  const isAuthenticated = useSelector(
    (state) => state.app.user !== null
  );
  return (
    <h1>BONJOUR</h1>
  );
}

export default App;
