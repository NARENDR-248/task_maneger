import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

const useFetchQuote = () => {

  // States
  const [tip, setTip] =
    useState("");

  const [author, setAuthor] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  // Fetch Quote
  const fetchQuote = () => {

    axios
      .get(
        "https://dummyjson.com/quotes/random"
      )

      .then((response) => {

        setTip(response.data.quote);

        setAuthor(response.data.author);

        setLoading(false);
      })

      .catch(() => {

        setTip(
          "Stay focused and keep improving 🚀"
        );

        setAuthor("Narendra");

        setLoading(false);
      });
  };

  // Initial Load
  useEffect(() => {

    fetchQuote();

    // Every 30 Seconds
    const interval =
      setInterval(fetchQuote, 30000);

    return () =>
      clearInterval(interval);

  }, []);

  return {
    tip,
    author,
    loading,
    fetchQuote,
  };
};

export default useFetchQuote;