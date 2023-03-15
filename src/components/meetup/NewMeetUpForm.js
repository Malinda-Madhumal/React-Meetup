import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import Card from "../ui/Card";
import "./NewMeetUpForm.css";

function NewMeetUpForm() {
  const tiltleRef = React.useRef();
  const imageRef = React.useRef();
  const addressRef = React.useRef();
  const desRef = React.useRef();
  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const enteredTitle = tiltleRef.current.value;
    const enteredImage = imageRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDescription = desRef.current.value;

    await addDoc(collection(db, "meetup"), {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    })
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Card>
      <form className="form" onSubmit={handleSubmitForm}>
        <div className="controll">
          <label htmlFor="title">New MeetUp Title</label>
          <input type={"text"} required id="title" ref={tiltleRef} />
        </div>
        <div className="controll">
          <label htmlFor="image">New MeetUp Image</label>
          <input type={"url"} required id="image" ref={imageRef} />
        </div>
        <div className="controll">
          <label htmlFor="address">New MeetUp Address</label>
          <input type={"text"} required id="address" ref={addressRef} />
        </div>
        <div className="controll">
          <label htmlFor="description">New MeetUp Description</label>
          <textarea
            id="description"
            required
            rows={"5"}
            ref={desRef}
          ></textarea>
        </div>

        <div className="actions">
          <button>Add MeetUp</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetUpForm;
