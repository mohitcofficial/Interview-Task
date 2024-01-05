import classes from "./App.module.css";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import Page from "./pages/Page";

function App() {
  return (
    <div className={classes.container}>
      <SideNavBar />
      <div className={classes.container2}>
        <Navbar />
        <Page />
      </div>
    </div>
  );
}

export default App;
