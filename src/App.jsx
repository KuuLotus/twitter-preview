import { useState } from "react";
import { TweetForm } from "./components/TweetForm";
import TweetPreview from "./components/TweetPreview";
import "./App.css";

function App() {
  const [tweetData, setTweetData] = useState(null);

  const handleTweetChange = (newTweetData) => {
    setTweetData(newTweetData);
  };

  return (
    <div className="app">
      <div className="tweet-container">
        <TweetForm onTweetSubmit={handleTweetChange} />
        {tweetData && <TweetPreview tweetData={tweetData} />}
      </div>
    </div>
  );
}

export default App;
