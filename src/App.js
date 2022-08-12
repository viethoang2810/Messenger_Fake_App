
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { publicRoutes } from "./Routes/index";
import "./App.css";
import DefaultLayout from "./components/Layout/DefaultLayout/DefaultLayout";
import ChatRoom from "./components/ChatRoom/index";
import { AuthContextProvider } from "./components/Firbase/GoogleAuth";
function App() {
  return (
    <Router>
      <div className="App">
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<DefaultLayout />} />
            <Route path="/home" element={<ChatRoom />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
