import { useTheme } from "@emotion/react";
import Card from "./Components/Tailwindpr/Card";
import ThemeBtn from "./Components/Tailwindpr/ThemeBtn";
import { ThemeProvider } from "./Context/Theme";
import { useState } from "react";
import Just from "./Components/Tailwindpr/Just";

function App() {
  const [themeMode, setthemeMode] = useState("light");

  const lightTheme = () => {
    setthemeMode("light");
  };

  const darkTheme = () => {
    setthemeMode("dark");
  };
  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
        <Just/>
      </ThemeProvider>
    </>
  );
}

export default App;
