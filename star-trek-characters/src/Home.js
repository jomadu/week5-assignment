import React from "react";
import CharacterList from "./CharacterList";

const Home = (props) => {
  const characterUids = [
    "CHMA0000132571",
    "CHMA0000123073",
    "CHMA0000128858",
    "CHMA0000123141",
  ];

  return (
    <div>
      <CharacterList uids={characterUids} />
    </div>
  );
};

export default Home;
