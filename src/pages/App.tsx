import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import anilistClient from "../clients/anilistClient";
import "../styles/App.css";

import Header from "../components/Header";
import AniList from "./AniList";
import AniDetails from "./AniDetails";
import Pagination from "../components/Pagination";
import ColleList from "../components/ColleList";
import ColleDetail from "../components/ColleDetail";

const App = () => {
  const [shownTotalPages, setShownTotalPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <ApolloProvider client={anilistClient}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                shownTotalPages={shownTotalPages}
                setShownTotalPage={setShownTotalPage}
                totalPage={totalPages}
                setTotalPage={setTotalPage}
              />
              <AniList
                currentPage={currentPage}
                totalPages={shownTotalPages}
                setShownTotalPage={setShownTotalPage}
                setTotalPage={setTotalPage}
              />
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                shownTotalPages={shownTotalPages}
                setShownTotalPage={setShownTotalPage}
                totalPage={totalPages}
                setTotalPage={setTotalPage}
              />
            </div>
          }
        />
        <Route path="/details" element={<AniDetails />} />
        <Route path="/collections" element={<ColleList />} />
        <Route path="/colleDetails" element={<ColleDetail />} />
        <Route path="*" element={<h1>No Such Page</h1>} />{" "}
      </Routes>
    </ApolloProvider>
  );
};

export default App;
