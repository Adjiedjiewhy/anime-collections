import React from "react";
import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";
import { Primary } from "../styles/variables/colors";
import { IoIosAdd } from "react-icons/io";
import { useState, useEffect } from "react";
import defaultCoverImage from "../assets/defaultCoverImage.jpg";
import { Colle, ColleContent } from "../models/interfaces";

const ModalCreate: React.FC<any> = ({ data, setData, setModal, animeData }) => {
  const [input, setInput] = useState("");
  const [storageData, setStorageData] = useState(Array());

  useEffect(() => {
    const storage = window.localStorage.getItem("colleList");
    if (storage !== null && storage !== undefined) {
      setStorageData(JSON.parse(storage));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newData = {
      id: data ? data.length : storageData ? storageData.length : 0,
      name: input,
      image: animeData ? animeData.coverImage.large : defaultCoverImage,
      data: animeData
        ? [
            {
              id: animeData.id,
              title: animeData.title.english,
              coverImage: animeData.coverImage.large,
            },
          ]
        : [],
    };

    if (data !== undefined) {
      setData([...data, newData]);
    } else if (storageData !== undefined && storageData !== null) {
      storageData.push(newData);
      if (newData !== null && newData !== undefined) {
        window.localStorage.setItem("colleList", JSON.stringify(storageData));
      }
    } else {
      if (newData !== null && newData !== undefined) {
        window.localStorage.setItem("colleList", JSON.stringify([newData]));
      }
    }
    setModal(false);
  };

  return (
    <ModalBackdrop onClick={() => setModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <ModalContainer>
            <ModalRow>
              <ModalHeader>
                <TitleText>Create collection</TitleText>
                <CrossIcon onClick={() => setModal(false)} />
              </ModalHeader>
            </ModalRow>
            <ModalRow>
              <ModalBody>
                <FormContainer>
                  <InputContainer>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={input}
                      onChange={handleChange}
                    />
                  </InputContainer>
                </FormContainer>
              </ModalBody>
            </ModalRow>
            <ModalRow>
              <ModalFooter>
                <SubmitButton type="submit">Done</SubmitButton>
              </ModalFooter>
            </ModalRow>
          </ModalContainer>
        </form>
      </ModalContent>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 7px;
  max-width: 300px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-width: 60%;
  }
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ModalRow = styled.div`
  display: flex;
  flex: 1;
`;

const ModalHeader = styled.div`
  flex: 1;
  background-color: ${Primary.base};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px 7px;
`;

const ModalBody = styled.div`
  flex: 1;
  background-color:${Primary.background};
  max-height: 350px;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: 300px;
  }

  @media (max-width: 480px) {
    max-height: 250px;
`;

const ModalFooter = styled.div`
  flex: 1;
  background-color: ${Primary.base};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 20px 5px;
`;

const TitleText = styled.span`
  flex: 1;
  font-size: 20px;
  text-align: left;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Primary.background};
  margin: 0 auto;
`;

const Label = styled.label`
  text-align: left;
  margin-bottom: 8px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  margin-bottom: 16px;

  @media (max-width: 400px) {
    width: 200px;
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${Primary.base};
  color: #fff;
  border: none;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${Primary.success};
  }
`;

const CrossIcon = styled(IoClose)`
  cursor: pointer;
  font-size: 24px;
`;

const PlusIcon = styled(IoIosAdd)`
  font-size: 24px;
  vertical-align: middle;
  margin-right: 8px;
`;

export default ModalCreate;
