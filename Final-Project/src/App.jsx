import MainRouter from "./components/Routes/MainRoutes";
import "./App.css";
import { Provider } from "react-redux";
import Navbar from "./components/Navbar";  
import  store  from "./components/store"; 

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <MainRouter />
      </Provider>
    </>
  );
}

export default App;
