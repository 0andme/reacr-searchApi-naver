import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Container } from "reactstrap";

function Home() {
  const [selectedData, setSelectedData] = useState("");
  return (
    <Container className="main">
      <SearchBar setSelectedData={setSelectedData} />
    </Container>
  );
}

export default Home;
