import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import Alert from "./components/Alert/Alert";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
