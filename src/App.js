import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

// redux stuff
//react-redux - Provider -wraps app, connect - used in components
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";

//store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <CartContainer />
      </Provider>
    </main>
  );
}

export default App;
