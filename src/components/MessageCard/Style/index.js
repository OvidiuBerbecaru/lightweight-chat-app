import styled from "styled-components";

export const MessageCardWrapperStyle = styled.div`
  margin-top: 100px;
  width: 40%;
  .card-paper {
    text-align: left;
    padding: 10px;
    height: 100px;
    overflow-y: scroll;
  }
`;

export const MessageWrapperStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TimeStyle = styled.p`
  font-size: 10px;
  color: gray;
`;

export const TextStyle = styled.p`
  margin-left: 10px;
  font-size: 18px;
`;