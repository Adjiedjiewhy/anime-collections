import { Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import anilistClient from "../clients/anilistClient";
import "../styles/App.css";

import Header from "../components/Header";
import AniList from "./AniList"
import AniDetails from "./AniDetails";

const App = () => {
  return (
    <ApolloProvider client={anilistClient}>
      <div className="App">
        <Header/>
        <AniList/>
        {/* <AniDetails></AniDetails> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
