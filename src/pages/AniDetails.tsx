import { useQuery } from "@apollo/client";
import { GET_ANIME_BY_ID } from "../models/queries";

function AniDetails() {
  const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
    variables: {
        id: 1
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("Data:", data);

  return <div>Ani-Details Component</div>;
}

export default AniDetails;
