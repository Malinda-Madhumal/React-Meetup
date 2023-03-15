import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupLists.module.css";

function MeetupList({ data }) {
  return (
    <ul className={classes.list}>
      {data.map((datas) => (
        <MeetupItem
          key={datas.id}
          id={datas.id}
          title={datas.title}
          description={datas.description}
          address={datas.address}
          image={datas.image}
          favorite={datas.favorite}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
