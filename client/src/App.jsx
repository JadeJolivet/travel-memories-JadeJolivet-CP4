import { Outlet } from "react-router-dom";
import "./scss/index.scss";
import NavBar from "./components/NavBar/NavBar";
import links from "./services/links";

function App() {
  return (
    <>
      <NavBar links={links} />
      <Outlet />
    </>
  );
}

export default App;
