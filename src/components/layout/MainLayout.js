import { collection, onSnapshot, query } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import FavoriteContext from "../../context/favorite-context";
import { db } from "../../firebase";
import classes from "./MainLayout.module.css";

function MainLayout() {
  const { totalFavorites } = React.useContext(FavoriteContext);
  const [meetup, setMeetup] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "favorite"));
    const unsubscribe = onSnapshot(q, (querySnapShot) => {
      let meetUps = [];

      querySnapShot.forEach((doc) => {
        meetUps.push({
          id: doc.id,
          ...doc.data(0),
        });
      });
      setMeetup(meetUps);
    });

    return () => unsubscribe();
  }, []);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetup</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorite"}>
              Favorite
              <span className={classes.badge}>{meetup.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainLayout;
