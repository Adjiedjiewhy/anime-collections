import React, { useState } from "react";
import styled from "@emotion/styled";
import { Primary } from "../styles/variables/colors";

function ColleList() {
  const [cards] = useState([
    {
      title: "Card-1a",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-2a",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-3a",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-4a",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-5a",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-6a",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-1b",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-2b",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-3b",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-4b",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-5b",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
    {
      title: "Card-6b",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.`,
      image:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21507-BICFCVZY3xQb.jpg",
    },
  ]);
  return (
    <div>
      <Section>
        <Container>
          <CardList>
            {cards.map((card, i) => (
              <Card key={i}>
                <Title>{card.title}</Title>
                <p>{card.text}</p>
              </Card>
            ))}
          </CardList>
        </Container>
      </Section>
    </div>
  );
}

const Section = styled.div`
  min-height: 100hv;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: auto;
  padding: 0px;
`;

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  max-width: 0 0 calc(33.33% - 20px);
  width: 100%;
  background-color: ${Primary.foreground};
  border-radius: 10px;
  transition 0.3s;
  border: 2px solid transparent;
  margin: 5px;

  &:hover {
    border: 2px solid;
    border-color: ${Primary.base};
  }
`;

const Title = styled.h3`
  padding: 0px;
  margin: 0px;
`;

export default ColleList;
