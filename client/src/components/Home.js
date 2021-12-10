import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import { Container } from "reactstrap";

function Home() {
  const [selectedData, setSelectedData] = useState("");
  return (
    <div className="main">
      <SearchBar setSelectedData={setSelectedData} />
      {selectedData && <ItemList selectedData={selectedData} />}
    </div>
  );
}

export default Home;
