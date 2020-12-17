import "./Search.css";

const Search = ({ setSearch }) => {
  const onChangeInput = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <input
        onChange={onChangeInput}
        className="search"
        type="text"
        placeholder="search"
        autoComplete="off"
      />
    </>
  );
};

export default Search;
