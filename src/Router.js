import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import styled from 'styled-components'; 
import NaviHeader from './components/NaviHeader'; 
import Main from './components/Main';
import Mbti from './components/Mbti';
import All from './components/All';
import Members from './components/Members';
import Login from './components/Login';
import Join from './components/Join';
import Registration from './components/Registration';

export default function Router() {
  return (
    <>
      <NaviHeader/>
      <BaseScreen>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mbti" element={<Mbti />} />
          <Route path="/all" element={<All />} />
          <Route path="/members" element={<Members />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </BaseScreen>
    </>
  );
}

const BaseScreen = styled.div`
  width:100%;
  max-width:48rem;
  margin: 0 auto;
`;
