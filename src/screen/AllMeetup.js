import { collection, onSnapshot, query } from "firebase/firestore";
import React from "react";
import CustomLoading from "../components/CustomLoading";
import MeetupList from "../components/meetup/MeetupList";
import { db } from "../firebase";

function AllMeetup() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const q = query(collection(db, "meetup"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let meetup = [];

      querySnapshot.forEach((doc) => {
        meetup.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setData(meetup);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section>
      <h1>All MeetUp</h1>

      {loading ? (
        <CustomLoading />
      ) : (
        <>
          {data.length <= 0 ? (
            <div>No MeetUp here!</div>
          ) : (
            <MeetupList data={data} />
          )}
        </>
      )}
    </section>
  );
}

export default AllMeetup;
