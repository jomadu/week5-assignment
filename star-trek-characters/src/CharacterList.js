import React from "react";
import PropTypes from "prop-types";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({ uids }) => {
  const listItems = uids.map((uid) => (
    <li key={uid}>
      <CharacterListItem uid={uid} />
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

CharacterList.propTypes = {
  uids: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CharacterList;
