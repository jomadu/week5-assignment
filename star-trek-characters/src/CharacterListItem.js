import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchCharacterFake } from "./characterHelpers";

const CharacterListItem = ({ uid }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //fetchCharacter(uid)
    fetchCharacterFake(uid)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [uid]);

  const errorContent = <p>Error!</p>;
  const loadingContent = <p>Loading...</p>;

  return (
    <div>
      {error !== null ? (
        errorContent
      ) : loading === true ? (
        loadingContent
      ) : (
        <Link to={`/character/${uid}`}>{data.character.name}</Link>
      )}
    </div>
  );
};

CharacterListItem.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default CharacterListItem;
