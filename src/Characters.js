import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Character from "./Character";

export default function Characters() {
  const [page, setPage] = React.useState(1);

  const fetchCrypto = (page = 0) =>
    fetch("https://rickandmortyapi.com/api/character?page=" + page).then(
      (res) => res.json()
    );

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["coin", page], () => fetchCrypto(page), {
      keepPreviousData: true,
    });

  console.log({ isLoading, isError, error, data, isFetching, isPreviousData });

  if (data) {
    console.log(data, data.hasMore);
  }

  return (
    <div>
      {isLoading ? (
        <div className="loading">
          <h3>Loading...</h3>
        </div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="characters">
          {data.results.map((character) => (
            <Character character={character} />
          ))}
        </div>
      )}
      <button
        onClick={() => setPage((old) => Math.max(old - 1, 0))}
        disabled={page === 1}
      >
        Previous Page
      </button>{" "}
      <button
        onClick={() => {
          if (!isPreviousData) {
            setPage((old) => old + 1);
          }
        }}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
