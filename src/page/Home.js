import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ClinicContext } from "../context/useClinic";
import styled from "styled-components";
import Main from "./Main";
import { Outlet } from "react-router-dom";


const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 10px;
`;

const Home = () => (
  <Container>
    <Main />
  </Container>
);


export default Home;
