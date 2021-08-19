import React from "react";
import "./FavList.css";

const FavList = (props) => {
  const loaded = props.favs.map((fav) => {
    return (
      <div className="fav" key={fav._id}>
        <section>
          <span className="fav-title">
            <strong>Title:</strong>
            {fav.title}
          </span>
          <span className="fav-artist">
            <strong>Artist:</strong>
            {fav.artist}
          </span>
          <span className="fav-time">
            <strong>Time:</strong>
            {fav.time}
          </span>
        </section>
      </div>
    );
  });

  const loading = "Loading...";

  return (
    <div>
      <h3>My Fav List</h3>
      {props.favs.length > 0 ? loaded : loading}
    </div>
  );
};

export default FavList;
