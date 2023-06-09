import React, { useEffect, useState, useContext } from "react";
import Search from "../components/Search";
import List from "../components/List";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "usehooks-ts";
import axios, { API_KEY } from "./../api/client";
import { Container } from "./style";
import { HistoryContext } from "../contexts/HistoryContext";
import { Link } from "react-router-dom";

function App() {
  const { setHistory, history } = useContext(HistoryContext);
  const [search, setSearch] = useState<string>("cheeseburgers");
  const [gifs, setGifs] = useState([]);
  const debounceSearchTerm = useDebounce<string>(search, 500);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const { data, refetch } = useQuery(["GIFS"], async () => {
    const response = await axios.get("gifs/search", {
      params: {
        api_key: API_KEY,
        q: search,
      },
    });

    const { data } = response.data;

    return data;
  });

  useEffect(() => {
    setGifs(data);
  }, [data]);

  useEffect(() => {
    setHistory([...history, search]);
    refetch();
  }, [debounceSearchTerm]);

  return (
    <Container>
      <Link to={`history`}>History</Link>
      <Search onChange={handleSearch} value={search} />
      <List gifs={gifs} />
    </Container>
  );
}

export default App;
