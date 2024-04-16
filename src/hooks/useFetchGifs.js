import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (e) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGifs(e).then((imgs) => {
        setState({
          data: imgs,
          loading: false,
        });
      });
    }, 2000);
  }, [e]);

  return state;
};
