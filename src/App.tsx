import { useState } from "react";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Navbar } from "./components/Navbar";
import { Add } from "./components/Add";

type CustomTheme = {
  palette: {
    mode: "light" | "dark";
  };
};

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const darkTheme: CustomTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <div
          style={{
            maxWidth: "1470px",
            margin: "auto",
            position: "relative",
          }}
        >
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
