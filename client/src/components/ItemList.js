import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemListItem from "./ItemListItem";
import { Table } from "reactstrap";

function ItemList(props) {
  // home으로 부터
  const { selectedData } = props;
  const [itemList, setItemList] = useState([]);
  // selectedData의 변화가 있을때만 api호출
  useEffect(() => {
    axios
      .post("/shop", { query: selectedData })
      .then((res) => {
        setItemList(res.data.items);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [selectedData]);
  return (
    <Table striped>
      <thead>
        <tr>
          <th>검색결과</th>
          <th>상품명</th>
          <th>최저가</th>
          <th>쇼핑몰</th>
          <th>구매하기</th>
        </tr>
      </thead>
      {itemList.length > 0 && (
        <tbody className="itemList">
          {itemList.map((item, index) => (
            <ItemListItem item={item} key={index} />
          ))}
        </tbody>
      )}
    </Table>
  );
}

export default ItemList;
