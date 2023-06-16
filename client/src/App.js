import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./Components/ProtectedRoute";
import SignIn from "./Components/auth/SignIn";
import SignUp from "./Components/auth/SignUp";
import Homepage from "./Scenes/Homepage/Homepage";
import Favorite from "./Scenes/Favorite/Favorite"
import LandingPage from "./Scenes/Landing/LandingPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route
          path="/homepage"
          element={
            <ProtectedRoute>
              <Homepage/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/favorite"
          element={
            <ProtectedRoute>
              <Favorite />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
