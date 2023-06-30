import React from "react";
import styled from "@emotion/styled";
import { Primary } from "../styles/variables/colors";

const AniCard: React.FC<any> = ({ cardId, cardTitle, cardImage, handleClick }) => {
  return (
    <Card onClick={() => handleClick(cardId)}>
      <CardImage src={cardImage} alt="Card Image" />
      <CardTitle>
        {cardTitle}
      </CardTitle>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  background-color: #f2f2f2;
  border-radius: 8px;
  overflow: hidden;
  width: 90%;
  max-width: 280px;
  margin: 0 auto;
  
  transition: 0.25s;
  &:hover {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
    transform: scale(1.025);
  }

  @media (min-width: 768px) {
    width: 300px;
  }

  @media (max-width: 767px) {
    width: calc(50% - 8px); /* Two cards per row with 16px gap */
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 25%;
    background: linear-gradient(to bottom, transparent, black 75%);
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default AniCard;
