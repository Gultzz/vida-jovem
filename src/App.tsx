import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/header";

import Home from "./pages/Home";
import Score from "./pages/Score";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/score" element={<Score />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
