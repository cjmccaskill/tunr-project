import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Playlist from "./Components/PlayList/Playlist";
import FavList from "./Components/FavList/FavList";
import Form from "./Components/Form/Form";

function App() {
  const url = "https://tunr-project-api.herokuapp.com";

  const [list, setList] = useState([]);
  const [favs, setFavs] = useState([]);

  const emptySong = {
    artist: "",
    title: "",
    length: "",
  };

  const [selectedSong, setSelectedSong] = useState(emptySong);
  const selectSong = (song) => {
    setSelectedSong(song);
  };

  console.log("select song -", selectSong);

  const getSongs = async () => {
    const response = await fetch(url + "/songs");
    const data = await response.json();
    setList(data);
  };

  useEffect(() => {
    getSongs();
  }, []);

  const handleCreate = async (newSong) => {
    await fetch(url + "/songs", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSong),
    });
    getSongs();
  };

  const handleUpdate = async (song) => {
    await fetch(url + "/songs/" + song.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(song),
    });
    getSongs();
  };

  const handleDelete = async (song) => {
    await fetch(url + "/songs/" + song.id, {
      method: "delete",
    });
    getSongs();
  };

  const handleSave = async (song) => {
    const addFav = [...favs];
    addFav.push(song);
    setFavs(addFav);
  };

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <>
                <Playlist
                  {...rp}
                  list={list}
                  selectSong={selectSong}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                />
                <FavList {...rp} favs={favs} />
                <Form {...rp} song={selectedSong} handleSubmit={handleCreate} />
              </>
            )}
          />
          <Route
            path="/edit"
            render={(rp) => (
              <Form
                {...rp}
                song={selectedSong}
                handleSubmit={handleCreate}
                handleUpdate={handleUpdate}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
