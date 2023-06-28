import React from "react";
import styled from "@emotion/styled";

const Card: React.FC<any> = ({ anime }) => {
  return (
    <CardContainer>
      <Figure>
        <Image src={anime.coverImage.large} />
        <Title>{anime.title.english}</Title>
      </Figure>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  flex: 1 1 33.333%;
  max-width: 33.333%;
  padding: 16px 8px;
  &:hover {
    figure {
      img {
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
        transform: scale(1.05);
      }
    }
  }
`;

const Figure = styled.figure`
  display: block;
  margin-bottom: 16px;
`;

const Image = styled.img`
  display: block;
  height: 350px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.15);
  transition: 0.25s;
`;

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 16px
`;

export default Card;
