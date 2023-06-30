import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANIME_BY_ID } from "../models/queries";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { IoIosAdd, IoIosList } from "react-icons/io";
import { Primary } from "../styles/variables/colors";
import ModalAdd from "../components/ModalAdd";
import ModalCreate from "../components/ModalCreate";
import { Colle, ColleContent } from "../models/interfaces";
import { useNavigate } from "react-router-dom";

function AniDetails() {
  const [animeId, setAnimeId] = useState(useLocation().state.id);
  const [modal, setModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);
  const [colleData, setColleData] = useState(Array());
  const [collections, setCollections] = useState<Colle[]>([]);
  const [animes, setAnimes] = useState<Colle>({
    id: "",
    name: "",
    image: "",
    data: [],
  });
  const navigation = useNavigate();

  useEffect(() => {
    const storage = window.localStorage.getItem("colleList");
    if (storage !== null || storage != undefined) {
      let tempArr = JSON.parse(storage);
      const tempColle: Colle[] = [];
      console.log("tempArr", tempArr);
      tempArr.forEach((item1: Colle) => {
        if (
          item1.data.findIndex((item2: ColleContent) => item2.id === animeId) >
          -1
        ) {
          tempColle.push(item1);
        }
      });
      console.log("tempColle:", tempColle);
      setCollections(tempColle);
    }
  }, []);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleAddAnime = (collections: Colle[]) => {
    let tempData = colleData;
    collections.forEach((item) => {
      const anime: ColleContent = {
        id: data.Media.id,
        title: data.Media.title.english,
        coverImage: data.Media.coverImage.large,
      };

      if (item.data.length < 1) {
        item.image = data.Media.coverImage.large;
      } else {
      }
      item.data.push(anime);
      let dataIndex = tempData.findIndex(
        (element) => element.name === item.name
      );
      tempData[dataIndex] = item;
    });

    if (tempData !== null || tempData != undefined) {
      window.localStorage.setItem("colleList", JSON.stringify(tempData));
    }
  };

  const handleCollectionDetail = (name: any) =>{
    if (name !== undefined) {
      navigation("/colleDetails", { state: { id: name } });
    }
  }

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
      <MovieInfoItem>
        {data.Media.genres.map((genre: any) => (
          <PillDiv>{genre}</PillDiv>
        ))}
      </MovieInfoItem>
      <MovieInfo>
        <MovieInfoItem>
          <InfoLabel>Rating:</InfoLabel>
          <InfoValue>{data.Media.averageScore}/100</InfoValue>
        </MovieInfoItem>
        <MovieInfoItem>
          <InfoLabel>Status:</InfoLabel>
          <InfoValue>{data.Media.status}</InfoValue>
        </MovieInfoItem>
        <MovieInfoItem>
          <InfoLabel>Episodes:</InfoLabel>
          <InfoValue>{data.Media.episodes}</InfoValue>
        </MovieInfoItem>
        <MovieInfoItem>
          <InfoLabel>Duration:</InfoLabel>
          <InfoValue>{data.Media.duration} minutes</InfoValue>
        </MovieInfoItem>
      </MovieInfo>
      <MovieDescription>{data.Media.description}</MovieDescription>
      {collections.length > 0 && (
        <div>
          You've added this Anime to these collections:
          {collections.map((card: any) => (
            <ResponsivePillDiv onClick={() => handleCollectionDetail(card.name)}>{card.name}</ResponsivePillDiv>
          ))}
        </div>
      )}
      {modal && (
        <ModalAdd
          setModal={setModal}
          handleAddAnime={handleAddAnime}
          colleData={colleData}
          setColleData={setColleData}
          setCreateModal={setCreateModal}
        />
      )}
      {createModal && (
        <ModalCreate setModal={setCreateModal} animeData={data.Media} />
      )}
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
  flex-wrap: wrap;
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

const PillDiv = styled.div`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px; /* A large enough value to create a pill shape */
  background-color: ${Primary.foreground}; /* Blue color */
  margin: 5px 3px;
  color: white;
`;

const ResponsivePillDiv = styled.div`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px; /* A large enough value to create a pill shape */
  background-color: ${Primary.foreground}; /* Blue color */
  margin: 5px 3px;
  color: white;

  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    transform: scale(1.025);
    background-color: ${Primary.base}
  }
`;

export default AniDetails;
