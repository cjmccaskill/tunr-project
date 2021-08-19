import React from "react";
import "./FavList.css";

const FavList = (props) => {
  const { favs } = props;

  const loaded = () => (
    <div>
      <h3>My Fav List</h3>
      {favs.map((fav) => (
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
      ))}
    </div>
  );

  const loading = "Loading...";

  return FavList.length > 0 ? loaded() : loading;
};

export default FavList;
