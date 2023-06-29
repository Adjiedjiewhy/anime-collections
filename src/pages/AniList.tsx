import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_TOP_ANIMES } from "../models/queries";
import Card from "../components/Card";

import { Link } from "react-router-dom";
import { useState } from "react";

const AniList: React.FC<any> = ({
  currentPage,
  totalPages,
  setShownTotalPage,
  setTotalPage
}) => {
  const { loading, error, data } = useQuery(GET_TOP_ANIMES, {
    variables: {
      page: currentPage,
      perPage: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if(data.Page.pageInfo.total > 5){
    setShownTotalPage(5);
  }
  setTotalPage(data.Page.pageInfo.total);

  return (
    <main>
      <List>
        {data.Page.media.map((anime: any) => (
          <ListCard>
            <Link to={"/details"} style={{ textDecoration: "none" }} state={{id: anime.id}}>
              <Card anime={anime} />
            </Link>
          </ListCard>
        ))}
      </List>
    </main>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
  margin: 32px -8px 0px;
`;

const ListCard = styled.div`
  padding: 10px;
`;

export default AniList;
