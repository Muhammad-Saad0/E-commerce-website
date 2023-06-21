import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Navbar from "./components/Navbar";

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
