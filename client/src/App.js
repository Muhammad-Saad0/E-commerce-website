import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={<SignInPage />}
          />
          <Route
            path="/home"
            exact
            element={<Home />}
          />
          <Route
            path="/sign-up"
            exact
            element={<SignUpPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
