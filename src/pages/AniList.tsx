import styled from "@emotion/styled";
import { useQuery } from "@apollo/client";
import { GET_TOP_ANIMES } from "../models/queries";
import AniCard from "../components/AniCard";
import { useNavigate  } from "react-router-dom";

const AniList: React.FC<any> = ({
  currentPage,
  totalPages,
  setShownTotalPage,
  setTotalPage,
}) => {
  const navigation = useNavigate();
  let cardData = Array();

  const { loading, error, data } = useQuery(GET_TOP_ANIMES, {
    variables: {
      page: currentPage,
      perPage: 12,
    },
  });

  const handleClick = (data: any) => {
    navigation("/details", { state: {id: data} });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data.Page.pageInfo.total > 5) {
    setShownTotalPage(5);
  }
  setTotalPage(data.Page.pageInfo.total);
  cardData = data.Page.media;

  return (
    <main>
      <CardListContainer>
        {cardData.map((card: any) => (
          <AniCard
          cardId = {card.id}
          cardTitle={card.title.english}
          cardImage={card.coverImage.large}
          handleClick={handleClick}
        />
        ))}
      </CardListContainer>
    </main>
  );
};

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 10px;
`;

export default AniList;
