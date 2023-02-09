import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Howler from "howler";
import Navbar from "../components/Navbar";

const ALICE = (props) => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const API_KEY = props.apiKey;
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
      };
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci/completions",
        {
          prompt: text,
          max_tokens: 100,
          temperature: 0.7,
        },
        config
      );
      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error(error);
      setResponse("Error generating response. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      {response && (
        <div className="bg-gray-200 rounded-lg p-3 shadow-md">
          <p>{response}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Ask ALICE"
          className="border border-gray-400 rounded-lg p-3 shadow-md"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-lg p-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ALICE;
