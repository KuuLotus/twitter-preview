import React from "react";
import TweetSimple from "./TweetSimple";
import TweetDetails from "./TweetDetails";

const TweetPreview = ({ tweetData }) => {
  return (
    <div className="">
      <TweetSimple tweetData={tweetData} />
      <TweetDetails tweetData={tweetData} />
    </div>
  );
};

export default TweetPreview;
