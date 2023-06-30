import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Primary } from "../styles/variables/colors";
import AniCard from "./AniCard";
import { useNavigate, useLocation } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import { Colle, ColleContent } from "../models/interfaces";

function ColleDetail() {
  const navigation = useNavigate();
  const [cards, setCards] = useState(Array());
  const [anime, setAnime] = useState<Colle>({
    id: "",
    name: "",
    image: "",
    data: []
  });
  const id = useLocation().state.id

  useEffect(() => {
    const data = window.localStorage.getItem("colleList");
    if (data !== null || data != undefined) {
      setCards(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      const tempArr = cards.find(element => element.name === id);
      console.log("tempArr:", tempArr);
      setAnime(tempArr);
    }
  }, [cards]);

  useEffect(() => {
    console.log("Anime:", anime)
  }, [anime]);

  const handleClick = (data: any) => {
    console.log("Click!");
    navigation("/details", { state: {id: data} });
  };

  const handleEditName = () => {
    console.log("Edit Name!");
  };

  return (
    <div>
      <CollectionName>
        {useLocation().state.id}
        <EditIcon onClick={handleEditName}>
          <IoPencil />
        </EditIcon>
      </CollectionName>
      <CardListContainer>
        {anime.data.map((card: any) => (
          <AniCard
            cardId={card.id}
            cardTitle={card.title}
            cardImage={card.coverImage}
            handleClick={handleClick}
          />
        ))}
      </CardListContainer>
    </div>
  );
}

const CollectionName = styled.h3`
  font-size: 25px;
  text-align: center;
`;

const EditIcon = styled.span`
  font-size: 20px;
  vertical-align: middle;
  margin-left: 8px;
  transition: color 0.3s;

  &:hover {
    color: ${Primary.success};
  }
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 10px;
`;

export default ColleDetail;
