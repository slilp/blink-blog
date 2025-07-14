"use client";

import JourneyCard from "@/component/JourneyCard";
import { allContents } from "@/markdown/content";

function RandomTopicCard() {
  const getRandomTopic = () => {
    return allContents[Math.floor(Math.random() * allContents.length)].id;
  };
  return (
    <JourneyCard
      title="Random topic to explore!"
      desc=""
      image1="/chill-guy.png"
      path={`/blog/${getRandomTopic()}`}
    />
  );
}

export default RandomTopicCard;
