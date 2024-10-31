import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import MainNavigation from "./components/MainNavigation";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <MainNavigation />
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
