import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout";

import Home from "./pages/Home";
import Score from "./pages/Score";

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/score" element={<Score />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
