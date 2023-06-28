import { Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import anilistClient from "../clients/anilistClient";
import "../styles/App.css";

import Header from "../components/Header";
import AniList from "./AniList";
import AniDetails from "./AniDetails";

const App = () => {
  return (
    <ApolloProvider client={anilistClient}>
      <Header />
      <Routes>
        <Route path="/" element={<AniList />} />
        <Route path="/details" element={<AniDetails />} />
        <Route path="*" element={<h1>No Such Page</h1>}/> {/*WORK IN PROGRESS*/}
      </Routes>
      {/* <AniDetails></AniDetails> */}
    </ApolloProvider>
  );
};

export default App;
