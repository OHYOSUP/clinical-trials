import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ClinicContext } from "../context/useClinic";
import styled from "styled-components";

function Main() {
  const { clinic, setClinic } = useContext(ClinicContext);
  const [input, setInput] = useState("");
  const [serachClinic, setSearchClinic] = useState([]);

  const onSearchChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const filteredData = clinic.filter((v) => v.sickNm.includes(input));
    setSearchClinic(filteredData);
    console.log(serachClinic);
  };

  useEffect(() => {
    const getIssues = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/sick");
        setClinic(data);
        
      } catch (e) {
        console.log(e.error);
      }
    };
    getIssues();
  }, []);

  return (
    <Container>
      <Wrapper>
        <TitleWrapper>
          <h1>
            국내 모든 임상시험 검색하고 <br />
            온라인으로 참여하기
          </h1>
        </TitleWrapper>

        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="질환명을 입력해 주세요"
            onChange={onSearchChange}
          />
          <SubmitBtn type="submit">검색</SubmitBtn>
        </Form>
        <ListWrapper>
          {serachClinic.map((sick) => (
            <ListItemWrapper key={sick.sickCd}>{sick.sickNm}</ListItemWrapper>
          ))}
        </ListWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50vw;
  background-color: #d0e8fd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  margin-top: 70px;
  text-align: center;
`;
const ListWrapper = styled.ul`
  max-width: 50vw;
  display: flex;
  padding: 30px;
  flex-direction: column;
`;
const ListItemWrapper = styled.li`
  width: 400px;
  border-bottom: 1px solid #000;
  
  padding: 20px;
`;
const Form = styled.form`
  position: relative;
`;

const Input = styled.input`
  width: 300px;
  height: 50px;
  border: 0;
  border-radius: 20px;
  padding: 15px;
`;
const SubmitBtn = styled.button`
  width: 50px;
  height: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: absolute;
  right: 0;
  background-color: #007be9;
  color: #fff;
  font-weight: bold;
`;
export default Main;
