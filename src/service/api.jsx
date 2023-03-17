import axios from 'axios';

const instanceCharacter = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacter = async () => {
  const { data } = await instanceCharacter.get('/character', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getCharacterByQuery = async query => {
  const { data } = await instanceCharacter.get('/character/', {
    params: {
      name: query,
    },
  });
  return data;
};

export const getCharacterById = async character_id => {
  const { data } = await instanceCharacter.get(`/character/${character_id}`);
  return data;
};
