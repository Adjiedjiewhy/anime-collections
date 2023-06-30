import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Primary } from "../styles/variables/colors";
import AniCard from "./AniCard";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import ModalCreate from "./ModalCreate";
import defaultCoverImage from "../assets/defaultCoverImage.jpg"


function ColleList() {
  const navigation = useNavigate();
  const [modal, setModal] = useState(false);
  const [cards, setCards] = useState(Array);

  useEffect(() => {
    const data = window.localStorage.getItem("colleList");
    if (data !== null || data != undefined) {
      setCards(JSON.parse(data))
    }
  }, []);

  const handleClick = (id: any, name: any) => {
    if (name !== undefined) {
      navigation("/colleDetails", { state: { id: name } });
    }
  };

  const handleAddCollection = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <CollectionName>
        My Anime Collections
        <EditIcon onClick={handleAddCollection}>
          <IoIosAdd />
        </EditIcon>
      </CollectionName>
      <CardListContainer>
        {cards.map((card: any) => (
          <AniCard
            cardId={card.id}
            cardTitle={card.name}
            cardImage={card.image}
            handleClick={handleClick}
          />
        ))}
      </CardListContainer>
      {modal && <ModalCreate data={cards} setData={setCards} setModal={setModal} />}
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

const CenteredHeading = styled.h3`
  font-size: 25px;
  text-align: center;
`;

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin: 10px;
`;

export default ColleList;
