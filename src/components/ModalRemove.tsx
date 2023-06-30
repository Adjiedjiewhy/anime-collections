import React from "react";
import styled from "@emotion/styled";
import { IoClose } from "react-icons/io5";
import { Primary } from "../styles/variables/colors";
import { IoIosAdd } from "react-icons/io";
import { useState, useEffect } from "react";

const ModalRemove: React.FC<any> = ({ setModal, handleSubmit, handleCancel }) => {
  return (
    <ModalBackdrop onClick={() => setModal(false)}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalContainer>
          <ModalRow>
            <ModalHeader>
              <TitleText>Are you sure you want to remove this entry?</TitleText>
            </ModalHeader>
          </ModalRow>
          <ModalRow>
            <ModalFooter>
              <Button onClick={handleSubmit}>Yes</Button>
              <Button onClick={handleCancel}>No</Button>
            </ModalFooter>
          </ModalRow>
        </ModalContainer>
      </ModalContent>
    </ModalBackdrop>
  )
}

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
  font-size: 16px;
  text-align: left;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${Primary.foreground};
  color: #fff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  margin: 5px;

  &:hover {
    background-color: ${Primary.success};
  }
`;

export default ModalRemove