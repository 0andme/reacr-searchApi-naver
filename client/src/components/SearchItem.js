import React from "react";
import { ListGroupItem } from "reactstrap";
// 검색어 자동완성 결과리스트의 아이템 컴포넌트

function SearchItem(props) {
  const { searchedItem, setSelectedData, setIsSelectItem } = props;
  return (
    <ListGroupItem className="searchedItem" onClick={seleced}>
      {searchedItem.toString()}
    </ListGroupItem>
  );

  function seleced() {
    setSelectedData(searchedItem.toString());
    setIsSelectItem(true);
  }
}
export default SearchItem;
