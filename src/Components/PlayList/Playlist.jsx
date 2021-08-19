import React from "react";
import { Link } from "react-router-dom";

const Playlist = (props) => {
  const { list } = props;

  const loaded = () => (
    <div className="playlist">
      <h2>Playlist 1</h2>
      <section className="song-data">
        {list.map((song) => {
          <div key={song._id}>
            <Link to="/edit">
              <button
                className="save"
                onclick={() => {
                  props.handleSave(song);
                }}
              >
                {"😍"}
              </button>
            </Link>
            <h4>{song.title}</h4>
            <h4>{song.artist}</h4>
            <button
              className="edit"
              onClick={() => {
                props.selectSong(song);
                props.history.push("/edit");
              }}
            >
              Edit
            </button>
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

  return Playlist.length > 0 ? loaded() : loading;
};

export default Playlist;
