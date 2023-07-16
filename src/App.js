import { ClinicContext, ClinicProvider } from "./context/useClinic";
import GlobalStyle from "./style/GlobalStyle";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Main from "./page/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <ClinicProvider>
        <Main />
      </ClinicProvider>
    </>
  );
}

export default App;
