import React from "react";

const Playlist = (props) => {
  const { list } = props;

  const loaded = () => (
    <div className="playlist">
      <h2>Playlist 1</h2>
      <section clasName="song-data">
        {list.map((song) => {
          <div key={song._id}>
            <button>{"😍"}</button>
            <h3>{song.title}</h3>
            <h3>{song.artist}</h3>
            <button>{"❌"}</button>
            <h3>{song.time}</h3>
          </div>;
        })}
      </section>
    </div>
  );

  const loading = <h2>Loading...</h2>;
  return list.length > 0 ? loaded() : loading;
};

export default Playlist;
