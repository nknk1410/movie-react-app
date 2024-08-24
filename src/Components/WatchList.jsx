import React, { useEffect, useState } from "react";
import genreIds from "../Utility/genre";

const WatchList = ({ watchlist, setWatchList,handleRemoveFromWatchList }) => {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genre"]);
  const [currGenre, setCurrGenre] = useState("All Genre");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDescreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...sortedDescreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreIds[movieObj.genre_ids[0]];
    });
    temp = new Set(temp); // to remove duplicate Genre
    setGenreList(["All Genre", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="overflow-x-auto px-4 flex justify-center my-4 text-center">
      <div className='flex flex-nowrap scrollable-container'>
        {genreList.map((genre, index) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              key={index}
              className={
                currGenre == genre
                  ? "p-2 mx-2 font-medium text-white rounded-lg  bg-sky-500/60 w-[8rem]"
                  : "p-2 mx-2 font-medium text-white rounded-lg bg-gray-300/80 w-[8rem]"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>
  </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Movie"
          className="h-[3rem] w-[18rem] bg-gray-200 px-3 outline-none rounded-md"
        />
      </div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 m-4 scrollable-container">
        <table className="min-w-[600px] w-full text-gray-500 text-center">
          <thead className="border-b ">
            <tr>
              <th>Name</th>

              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2">
                  <i className="fas fa-arrow-up"></i>
                </div>
                <div className="p-2">Rating</div>
                <div onClick={sortDecreasing} className="p-2">
                  <i className="fas fa-arrow-down px-2"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genre") {
                  return true;
                } else {
                  return genreIds[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj, index) => (
                <tr key={index} className="border-b-2">
                  <td className="flex items-center px-6 py-3">
                    <img
                      className="h-[6rem] "
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt={movieObj.title}
                    />
                    <div className="mx-4">{movieObj.title}</div>
                  </td>
                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreIds[movieObj.genre_ids[0]]}</td>
                  <td className="text-red-500 cursor-pointer"  onClick={() => handleRemoveFromWatchList(movieObj)}   >
                  <i className="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
