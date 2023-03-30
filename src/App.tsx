import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Layout from "./components/layout";

import Home from "./pages/Home";
import Score from "./pages/Score";
import { colors } from "./utils/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.purple,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "100%",
          height: 46,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "4px",
          input: {
            background: "#fff",
          },
          div: {
            background: "#fff",
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/score" element={<Score />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
