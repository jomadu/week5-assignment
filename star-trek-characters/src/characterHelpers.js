import data from "./_data.json";

export const fetchCharacterFake = (uid) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var characterData = data.find((e) => e.character.uid === uid);
      if (characterData !== undefined) {
        resolve(new Response(JSON.stringify(characterData)));
      } else {
        reject(`Character with uid (${uid}) not found.`);
      }
    }, 1000);
  });
};

export const fetchCharacter = (uid) => {
  return fetch(`http://stapi.co/api/v1/rest/character?uid=${uid}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
