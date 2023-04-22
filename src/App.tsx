import SearchBar from "./components/SearchBar";

function App() {
  return (
    <>
      <div className="flex justify-center gap-10 items-center flex-col h-screen">
        <h1 className="text-4xl font-bold text-white">Search Bar</h1>
        <SearchBar />
      </div>
    </>
  );
}

export default App;
