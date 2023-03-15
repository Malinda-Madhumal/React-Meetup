import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const toggleFavoriteMeetUp = async () => {
    await addDoc(collection(db, "favorite"), {
      id: props.id,
      title: props.title,
      address: props.address,
      image: props.image,
      description: props.description,
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteMeetUp}>
            {/* {isFavorite ? "Remove from Favorites" : "To Favorites"} */}
            To Favorite
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
