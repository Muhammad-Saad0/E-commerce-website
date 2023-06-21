import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<SignInPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
