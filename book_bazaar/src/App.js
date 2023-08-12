import "./App.css";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup/Signup";
import { RoutePaths } from "./utils/enum";
import Header from "./components/header";
import Footer from "./components/footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path={RoutePaths.Register} element={<Signup />} />
          <Route path={RoutePaths.Login} element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
