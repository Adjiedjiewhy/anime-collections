import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Primary } from "../styles/variables/colors";
import AniCard from "./AniCard";
import { useNavigate, useLocation } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import { Colle, ColleContent } from "../models/interfaces";
import ModalRemove from "./ModalRemove";
import defaultCoverImage from "../assets/defaultCoverImage.jpg";

function ColleDetail() {
  const navigation = useNavigate();
  const [cards, setCards] = useState(Array());
  const [removeModal, setRemoveModal] = useState(false);
  const [animes, setAnimes] = useState<Colle>({
    id: "",
    name: "",
    image: "",
    data: [],
  });
  const [removeName, setRemoveName] = useState("");
  const [collectionName] = useState(useLocation().state.id);

  const id = useLocation().state.id;

  useEffect(() => {
    const data = window.localStorage.getItem("colleList");
    if (data !== null || data != undefined) {
      setCards(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      const tempArr = cards.find((element) => element.name === id);
      setAnimes(tempArr);
    }
  }, [cards]);

  const handleClick = (data: any) => {
    navigation("/details", { state: { id: data } });
  };

  const handleEditName = () => {
    console.log("Edit Name!");
  };

  const handleRemove = () => {
    let tempArr = animes;
    let tempCards = cards;
    const removeIndex = tempArr.data.findIndex(
      (element) => (element as any).title === removeName
    );
    const collectionIndex = tempCards.findIndex(
      (element) => element.name === collectionName
    );
    if (tempArr !== undefined && tempArr !== null && tempArr.data.length > 0) {
      tempCards[collectionIndex].data.splice(removeIndex, 1);
      if(tempCards[collectionIndex].data.length < 1){
        tempCards[collectionIndex].image = defaultCoverImage;
      }
      setAnimes(tempArr);
      window.localStorage.setItem("colleList", JSON.stringify(cards));
      setRemoveModal(false);
    }
  };

  const handleRemoveName = (name: any) => {
    setRemoveModal(true);
    setRemoveName(name);
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
        {animes.data.map((card: any) => (
          <AniCard
            cardId={card.id}
            cardTitle={card.title}
            cardImage={card.coverImage}
            handleClick={handleClick}
            removeBtn={true}
            removeFunc={handleRemoveName}
          />
        ))}
      </CardListContainer>
      {removeModal && (
        <ModalRemove
          setModal={setRemoveModal}
          handleSubmit={handleRemove}
          handleCancel={() => setRemoveModal(false)}
        />
      )}
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
