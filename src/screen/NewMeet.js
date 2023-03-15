import React from "react";
import NewMeetUpForm from "../components/meetup/NewMeetUpForm";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

function NewMeet() {
  // const navigate = useNavigate();

  return (
    <section>
      <h1>New Meetup</h1>

      <NewMeetUpForm />
    </section>
  );
}

export default NewMeet;
