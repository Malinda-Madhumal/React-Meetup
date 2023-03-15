import React from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function FavoriteMeetUp({ meetups, removeFavorite }) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetups.image} alt={meetups.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetups.title}</h3>
          <address>{meetups.address}</address>
          <p>{meetups.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFavorite}>Remove from Favorite</button>
        </div>
      </Card>
    </li>
  );
}

export default FavoriteMeetUp;
