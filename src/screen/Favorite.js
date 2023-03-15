import {
  collection,
  deleteDoc,
  deleteField,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomLoading from "../components/CustomLoading";
import FavoriteMeetUp from "../components/meetup/FavoriteMeetUp";
import { db } from "../firebase";

function Favorite() {
  const [meetup, setMeetup] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const removeFavorite = (id) => {
    deleteField(doc(db, "favorite", id));
  };

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
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {meetup.length === 0 ? (
            <div>No Favorite to show</div>
          ) : (
            <ul>
              {meetup.map((meetup) => (
                <FavoriteMeetUp
                  key={meetup.id}
                  meetups={meetup}
                  removeFavorite={() => removeFavorite(meetup.id)}
                />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Favorite;
