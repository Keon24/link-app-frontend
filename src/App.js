// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store.js"; // Adjust the path as necessary if your store is located elsewhere

import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Links from "./components/Links";
import ProfileDetails from "./components/ProfileDetails";
import Preview from "./components/Preview";
import Layout from "./components/Layout"; 

function App() {
  return (
    <Provider store={store}> {/* Wrap your routes with Provider and pass the store */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<Layout />}> {/* Layout component wraps child routes */}
            <Route path="/links" element={<Links />} />
            <Route path="/profile" element={<ProfileDetails />} />
            <Route path="/preview" element={<Preview />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
