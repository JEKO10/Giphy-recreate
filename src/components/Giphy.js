import React, { useState, useEffect } from "react";
import Loader from "./Loader";

const api = {
  base: "https://api.giphy.com/v1/gifs/",
  key: "Orrjo8OK56xS6F5tlU1dRG3fPzrO2agN",
};

function Giphy() {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrending = async () => {
    setIsLoading(true);
    const response = await fetch(`${api.base}trending?api_key=${api.key}`);
    const data = await response.json();
    console.log(data);
    setTrending(data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  const renderTrending = () => {
    if (isLoading) {
      return <Loader />;
    }
    return trending.map((item) => {
      return (
        <div key={item.id} className="gif">
          <img src={item.images.fixed_height.url} alt="GIF" />
        </div>
      );
    });
  };

  return <div className="container">{renderTrending()}</div>;
}

export default Giphy;
