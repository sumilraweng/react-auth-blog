import Router from "./routes/router";
import store from "./redux/store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App"></div>
      </Router>
    </Provider>
  );
}

export default App;
