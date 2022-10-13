import {Routes,Route, Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Authorization from "./pages/Authorization/Authorization";
import Homepage from "./pages/Homepage/Homepage";
import Profile from "./pages/Profile/Profile";

import "./global.scss";
import Chat from './components/Chat/Chat';

const App = () => {

  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
        <Routes>
          <Route
            path="/"
            element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
          />
          <Route
            path="/home"
            element={user ? <Homepage /> : <Navigate to="../auth" />}
          />
          <Route
            path="/auth"
            element={user ? <Navigate to="../home" /> : <Authorization />}
          />
          <Route
            path="/profile/:id"
            element={user ? <Profile /> : <Navigate to="../auth" />}
          />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route
            path="chat/"
            element={user ? <Chat /> : <Navigate to="../auth" />}
          />
          <Route path="/profile/:id" element={user ? <Profile /> : <Navigate to="/auth" />} />
        </Routes>
    </div>
  );
};

export default App;
