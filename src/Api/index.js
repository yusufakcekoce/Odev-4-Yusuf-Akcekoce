import axios from "axios";

export function getCharacters() {
  return axios.get(
    `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=d79fa519a6baaa5cd7b779b66e94c2bb&hash=f9cef047f4b4677abf10f7ea075405e1`
  );
}
