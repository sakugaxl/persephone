import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Howler from "howler";
import Navbar from "../components/Navbar";

const ALICE = () => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://api.openai.com/v1/engines/text-davinci-002/jobs", {
        prompt: text,
      })
      .then((res) => {
        setResponse(res.data.choices[0].text);
      });
  };

  useEffect(() => {
    if (response) {
      axios
        .get(`https://api.openai.com/v1/images/generations`, {
          responseType: "arraybuffer",
        })
        .then((res) => {
          const url = URL.createObjectURL(new Blob([res.data]));
          const sound = new Howler.Howl({ src: [url] });
          sound.play();
        });
    }
  }, [response]);

  return (
    <div>
      <Navbar />
      {response && (
        <div>
          <p>{response}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Ask ALICE"
        />
        <button type="submit" style={{ backgroundColor: "blue" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ALICE;
