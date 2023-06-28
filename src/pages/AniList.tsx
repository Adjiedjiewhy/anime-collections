import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_TOP_ANIMES } from "../models/queries";
import Card from "../components/Card";

import { Link } from "react-router-dom";

function AniList() {
  const { loading, error, data } = useQuery(GET_TOP_ANIMES, {
    variables: {
      page: 1,
      perPage: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      {/* <ListHeader>
        <ListForm>
          <ListInput
            type="search"
            placeholder="Search for Anime, Manga, and more..."
          />
        </ListForm>
      </ListHeader> */}
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
