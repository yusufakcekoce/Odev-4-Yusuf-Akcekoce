import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.css";

const Details = () => {
  let { id } = useParams();
  let [fetchedData, updateFetchedData] = useState([]);
  let { data } = fetchedData;
  console.log(fetchedData);

  let api = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=d79fa519a6baaa5cd7b779b66e94c2bb`;
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="detailContainer">
      <div className="leftBar">
        <div className="leftImg">
          <img
            src={`${data?.results?.[0].thumbnail.path}.${data?.results?.[0].thumbnail.extension}`}
            width="350px"
            alt=""
            className="imgCharacter"
          />
        </div>

        <div className="details">
          <h2>{data?.results?.[0].name}</h2>
          <p>
            {!!data?.results?.[0].description
              ? data?.results?.[0].description
              : "no explanation"}
          </p>
        </div>
      </div>

      <div className="detailContent">
        <ul>
          <li>{data?.results?.[0].comics.items?.[0]?.name}</li>
        </ul>

        <ul>
          <li>{data?.results?.[0].comics.items?.[1]?.name}</li>
        </ul>

        <ul>
          <li>{data?.results?.[0].comics.items?.[2]?.name} </li>
        </ul>

        <ul>
          <li>{data?.results?.[0].comics.items?.[3]?.name} </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
