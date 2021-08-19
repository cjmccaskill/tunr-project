import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [formData, setFormData] = useState(props.song);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(formData);
    props.history.push("/");
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="form-group">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add a New Song</h2>
        <div className="title">
          <label>Title</label>
          <input
            className="title-input"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="artist">
          <label>Artist</label>
          <input
            className="artist-input"
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
          />
        </div>
        <div className="time">
          <label>Time</label>
          <input
            className="time-input"
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <input className="add-song" type="submit" value="Add New Song" />
      </form>
    </div>
  );
};

export default Form;
