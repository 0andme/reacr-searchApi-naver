import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ItemList from "./ItemList";
import { Container } from "reactstrap";

function Home() {
  const [selectedData, setSelectedData] = useState("");
  return (
    <Container className="main">
      <SearchBar setSelectedData={setSelectedData} />
      <ItemList selectedData={selectedData} />
    </Container>
  );
}

export default Home;
