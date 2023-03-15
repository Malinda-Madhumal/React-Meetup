import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetup from "./screen/AllMeetup";
import Favorite from "./screen/Favorite";
import NewMeet from "./screen/NewMeet";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<AllMeetup />} />
        <Route path="/new-meetup" element={<NewMeet />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </Layout>
  );
}

export default App;
