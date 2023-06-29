import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_TOP_ANIMES } from "../models/queries";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

import { Link } from "react-router-dom";
import { useState } from "react";

function AniList() {
  const [page, setPage] = useState(0);

  const { loading, error, data } = useQuery(GET_TOP_ANIMES, {
    variables: {
      page: page,
      perPage: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <Pagination currentPage={data.Page.pageInfo.currentPage} totalPages={data.Page.pageInfo.total} page={page} setPage={setPage}/>
      <List>
        {data.Page.media.map((anime: any) => (
          <ListCard>
            <Link to={"/details"} style={{ textDecoration: "none" }} state={{id: anime.id}}>
              <Card anime={anime} />
            </Link>
          </ListCard>
        ))}
      </List>
      <Pagination currentPage={data.Page.pageInfo.currentPage} totalPages={data.Page.pageInfo.total} page={page} setPage={setPage}/>
    </main>
  );
}

const ListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

const ListForm = styled.form`
  display: flex;
  justify-content: flex-end;
  flex: 1 1 0%;
`;

const ListInput = styled.input`
  appearance: none;
  background: none;
  border: none;

  display: block;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  border-radius: 999px;
  background-color: #eee;

  transition: 0.4s;

  ::placeholder {
    color: #888;
  }

  &:focus,
  &:valid {
    background-color: #313131;
    color: #fff;
  }
`;

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
