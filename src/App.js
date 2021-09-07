import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import Feed from "./Components/Feed/Feed";
import { Helmet } from "react-helmet";
import Widgets from "./Components/Widgets/Widgets";

function App() {
  return (
    <div className="app">
      <Helmet>
        <title>My Title</title>
        <meta name="description" content="Twitter" />
        <meta property="og:description" content="Sign Up in copy of twiteer" />
      </Helmet>
      {/*Sidebar*/}
      <Sidebar />
      {/*feed*/}
      <Feed />
      {/*Widgets*/}
      <Widgets />{" "}
    </div>
  );
}

export default App;
