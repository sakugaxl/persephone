import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const ALICE = (props) => {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [voiceId, setVoiceId] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://api.elevenlabs.com/v1/text-to-speech/${process.env.ELEVEN_LABS_API_KEY}`, {
        text,
      }, {
        responseType: 'arraybuffer',
      });
      const audio = new Blob([response.data], { type: 'audio/mp3' });
      setResponse(URL.createObjectURL(audio));
    } catch (error) {
      console.error(error);
      setResponse("Error generating response. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-900 text-white h-screen">
      <Navbar />
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4">
          {response && (
            <div className="bg-gray-200 rounded-lg p-3 shadow-md">
              <audio controls src={response} />
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-4">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter text to convert to speech"
            className="border border-gray-400 bg-gray-800 rounded-lg p-3 shadow-md w-full mb-4"
          />
          <select
            value={voiceId}
            onChange={event => setVoiceId(event.target.value)}
            className="border border-gray-400 bg-gray-800 rounded-lg p-3 shadow-md w-full mb-4"
          >
            <option value="">Select a voice</option>
            <option value="voice1">Voice 1</option>
            <option value="voice2">Voice 2</option>
            ...
          </select>
          <button type="submit" className="bg-blue-500 text-white rounded-lg p-3 mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ALICE;
