import { useEffect, useState } from "react";
import { HeroListSearch } from "../components/HeroListSearch";
import { ISuperhero } from "../helpers";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { useForm } from "../hooks/useForm";
import './PageStyle.css'

export const SearchPage = () => {
  const { searchText, onInputChange } = useForm({
    searchText: ''
  });

  const [searchResults, setSearchResults] = useState<ISuperhero[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [noResultsText, setnoResultsText] = useState()
  const [page, setpage] = useState(1)
  const [pageSize, setPageSize] = useState(6);
  const [noResults, setNoResults] = useState(false);


  const onSearchSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchText.trim().length === 0) {
      intialData()
      return;
    }
    getData();
  };

  const intialData = () =>{
    setSearchResults([])
    setNoResults(false)
    setpage(1)
  }
  const getData = async () => {
    try {
      const { data, totalPages } = await getHeroesByName(searchText, page, pageSize);
      setSearchResults(data);
      setTotalPages(totalPages);
      setNoResults(data.length === 0); 
      setnoResultsText(searchText)
    } catch (error) {
      console.log(error);
      setSearchResults([]);
      setTotalPages(0);
      setNoResults(true); 
    }
  };

  useEffect(() => {
    if (searchText.trim().length === 0) {
      intialData()
      return;
    }
    getData();

  }, [page]);

  return (
    <>
      <h1>Search</h1>
      <div className="row">
        <div className="col-sm-12 col-md-5 col-lg-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7 image-below-search">
          <h4>Results</h4>
          <hr />
          {searchResults.length === 0 && !noResults && (
            <div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>
          )}
          {noResults && (
            <div className="alert alert-danger animate__animated animate__bounce">
              No hero found with <b>"{noResultsText}"</b>
            </div>
          )}
          {searchResults.length > 0 && (
            <HeroListSearch
              searchResults={searchResults}
              page={page}
              totalPages={totalPages}
              setPage={setpage}
            />
          )}
        </div>
      </div>
    </>
  );
};
