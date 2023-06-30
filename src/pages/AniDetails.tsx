import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME_BY_ID } from "../models/queries";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { IoIosAdd, IoIosList } from "react-icons/io";
import { Primary } from "../styles/variables/colors";
import Modal from "../components/Modal";

function AniDetails() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const { loading, error, data } = useQuery(GET_ANIME_BY_ID, {
    variables: {
      id: useLocation().state.id,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <MovieDetailContainer>
      <MovieBanner src={data.Media.bannerImage} alt="Movie Banner" />
      <MovieTitle>
        {data.Media.title.english}
        <Icon onClick={toggleModal}>
          <IoIosAdd />
        </Icon>
        <Icon>
          <IoIosList />
        </Icon>
      </MovieTitle>
      <MovieInfo>
        <MovieInfoItem>
          <InfoLabel>Rating:</InfoLabel>
          <InfoValue>{data.Media.averageScore}/100</InfoValue>
        </MovieInfoItem>
        <MovieInfoItem>
          <InfoLabel>Genre:</InfoLabel>
          <InfoValue>{data.Media.genres}</InfoValue>
        </MovieInfoItem>
        <MovieInfoItem>
          <InfoLabel>Release Date:</InfoLabel>
          <InfoValue>WIP</InfoValue>
        </MovieInfoItem>
        <MovieInfoItem>
          <InfoLabel>Duration:</InfoLabel>
          <InfoValue>{data.Media.duration} minutes</InfoValue>
        </MovieInfoItem>
      </MovieInfo>
      <MovieDescription>{data.Media.description}</MovieDescription>
      {modal && <Modal setModal={setModal}/>}
    </MovieDetailContainer>
  );
}

const MovieDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const MovieBanner = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  object-fit: cover;
`;

const MovieTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
`;

const Icon = styled.span`
  font-size: 24px;
  vertical-align: middle;
  margin-left: 8px;
  transition: color 0.3s;

  &:hover {
    color: ${Primary.success};
  }
`;

const MovieInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const MovieInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const InfoValue = styled.span`
  font-weight: normal;
`;

const MovieDescription = styled.p`
  font-size: 16px;
  text-align: justify;
  line-height: 1.5;
`;

export default AniDetails;
