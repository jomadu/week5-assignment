import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter, fetchCharacterFake } from "./characterHelpers";

const CharacterDetail = (props) => {
  const { uid } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCharacter(uid)
      // fetchCharacterFake(uid)
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
        <div>
          <h2>{data.character.name}</h2>
          <p>
            Year of birth:{" "}
            {data.character.yearOfBirth !== null &&
            data.character.yearOfBirth !== undefined
              ? data.character.yearOfBirth
              : "Unknown..."}
          </p>
          <p>
            Gender:{" "}
            {data.character.gender !== null &&
            data.character.gender !== undefined
              ? data.character.gender
              : "Unknown..."}
          </p>
          <p>
            Place of birth:{" "}
            {data.character.placeOfBirth !== null &&
            data.character.placeOfBirth !== undefined
              ? data.character.placeOfBirth
              : "Unknown..."}
          </p>
          <p>
            Serial number:{" "}
            {data.character.serialNumber !== null &&
            data.character.serialNumber !== undefined
              ? data.character.serialNumber
              : "Unknown..."}
          </p>
          <p>
            Number of episodes:{" "}
            {data.character.episodes !== null &&
            data.character.episodes !== undefined
              ? data.character.episodes.length
              : 0}
          </p>
        </div>
      )}
    </div>
  );
};

CharacterDetail.propTypes = {};

export default CharacterDetail;
