import React from "react";
import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";
import { Primary } from "../styles/variables/colors";
import { IoIosAdd } from "react-icons/io";
import { useState, useEffect } from "react";

const Modal: React.FC<any> = ({ setModal }) => {
  const [array, setArray] = useState(Array());
  let storage = Array();

  useEffect(() => {
    const data = window.localStorage.getItem("dwad");
    if (data !== null) {
      console.log("Not Null");
      setArray(JSON.parse(data));
    }
    else console.log("Null");
  }, []);

  const handleChange = (data: any) => {
    if (storage.indexOf(data)) {
      storage.push(data);
    } else {
      storage.splice(storage.indexOf(data), 1);
    }
  };

  const handleSubmit = () => {
    console.log("submit!");
    window.localStorage.setItem("dwad", JSON.stringify(storage));
    setModal(false);
  };

  return (
    <ModalBackdrop onClick={() => setModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalContainer>
          <ModalRow>
            <ModalHeader>
              <TitleText>Add to...</TitleText>
              <CrossIcon onClick={() => setModal(false)} />
            </ModalHeader>
          </ModalRow>
          <ModalRow>
            <ModalBody>
              <CheckboxContainer>
                <PlusIcon />
                <ContentText>Create a new collection</ContentText>
              </CheckboxContainer>
              {array.map((data: any) => (
                <CheckboxContainer key={data.id}>
                  <Checkbox
                    type="checkbox"
                    onChange={() => handleChange(data)}
                  />
                  <ContentText>{data.name}</ContentText>
                </CheckboxContainer>
              ))}
            </ModalBody>
          </ModalRow>
          <ModalRow>
            <ModalFooter>
              <Button onClick={handleSubmit}>Done</Button>
            </ModalFooter>
          </ModalRow>
        </ModalContainer>
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

const ContentText = styled.span`
  flex: 1;
  font-size: 15px;
  text-align: left;
  padding-left: 5px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 5px 5px 10px;

  & > input[type="checkbox"] {
    flex: none;
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const Checkbox = styled.input`
  margin-right: 8px;
`;

const Button = styled.button`
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

export default Modal;
