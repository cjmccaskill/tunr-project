import React from "react";
import { Link } from "react-router-dom";

const Playlist = (props) => {
  const { list } = props;

  const loaded = () => (
    <div className="playlist">
      <h2>Playlist 1</h2>
      <section clasName="song-data">
        {list.map((song) => {
          <div key={song._id}>
            <Link to="/edit">
              <button
                className="save"
                onclick={() => {
                  props.selectSong(song);
                  props.handleSave(song);
                  props.history.push("/edit");
                }}
              >
                {"😍"}
              </button>
            </Link>
            <h4>{song.title}</h4>
            <h4>{song.artist}</h4>
            <button
              className="delete"
              onClick={() => {
                props.handleDelete(song);
              }}
            >
              {"❌"}
            </button>
            <h4>{song.time}</h4>
          </div>;
        })}
      </section>
    </div>
  );

  const loading = <h2>Loading...</h2>;

  return list.length > 0 ? loaded() : loading;
};

export default Playlist;
