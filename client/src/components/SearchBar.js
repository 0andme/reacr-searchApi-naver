import { useState } from "react";
import axios from "axios";
import SearchItem from "./SearchItem";
import { Input, CardHeader, ListGroup } from "reactstrap";
function SearchBar(props) {
  const [searchKeyWords, setSearchKeyWords] = useState([]);
  const [isSelectItem, setIsSelectItem] = useState(false);
  // home으로부터 SearchItem로 전달만
  const { setSelectedData } = props;
  return (
    <>
      {/* <Card body className="text-right"> */}
      <CardHeader tag="h5">상품 검색</CardHeader>
      <Input
        id="searchBar"
        placeholder="검색어를 입력하세요"
        onFocus={resetIsSelectItem}
        onChange={getSearchRes}
      />
      {/* </Card> */}

      {!isSelectItem && searchKeyWords.length > 0 && (
        <ListGroup>
          {searchKeyWords.map((item, index) => (
            <SearchItem
              setSelectedData={setSelectedData}
              setIsSelectItem={setIsSelectItem}
              searchedItem={item}
              key={index}
            />
          ))}
        </ListGroup>
      )}
    </>
  );
  // input 창 focus시 isSelectItem state false로 reset
  function resetIsSelectItem() {
    setIsSelectItem(false);
  }
  // 검색어 자동완성 api호출
  function getSearchRes(userInput) {
    axios
      .post("/search", { query: userInput.target.value })
      .then((res) => {
        setSearchKeyWords(res.data.items[0]);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
}

export default SearchBar;
