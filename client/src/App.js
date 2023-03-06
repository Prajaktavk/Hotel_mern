import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Bookingscreen from "./screens/Bookingscreen.js";
import Registerscreen from "./screens/Registerscreen";
import Loginscreen from "./screens/Loginscreen.js";
import Profilescreen from "./screens/Profilescreen";
import  Adminscreen from "./screens/Adminscreen";
import Landingscreen from "./screens/Landingscreen";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homescreen/>} />
        <Route path="/book/:id/:fromdate/:todate" element={<Bookingscreen/>} />

        <Route path="/register" element={<Registerscreen/>} />
        <Route path="/login" element={<Loginscreen/>} />
        <Route path="/profile" element={<Profilescreen/>} />
        <Route path="/admin" element={<Adminscreen/>} />
        <Route path="/" element={<Landingscreen/>} />
    </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;
