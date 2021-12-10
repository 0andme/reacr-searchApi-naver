import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ItemListItem from "./ItemListItem";
import { Pagination, PaginationItem, PaginationLink, Table } from "reactstrap";

function ItemList(props) {
  // home으로 부터
  const { selectedData } = props;
  const [itemList, setItemList] = useState([]);
  // selectedData의 변화가 있을때만 api호출
  const [pageNum, setPageNum] = useState(1);
  // 상품 검색 api body값 지정
  const searchOptions = useMemo(() => {
    return {
      query: selectedData,
      display: 10,
      start: pageNum,
      sort: "asc",
    };
  }, [selectedData, pageNum]);
  // pagination 렌더
  const pagelist = () => {
    const res = [];
    for (let index = 0; index < 10; index++) {
      res.push(
        <PaginationItem key={index}>
          <PaginationLink
            id={searchOptions.display * index + 1}
            onClick={changePage}
          >
            {index + 1}
          </PaginationLink>
        </PaginationItem>
      );
    }
    return res;
  };

  // 상품 검색 api 호출
  useEffect(() => {
    axios
      .post("/shop", searchOptions)
      .then((res) => {
        setItemList(res.data.items);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [searchOptions]);
  return (
    <>
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
              <ItemListItem item={item} key={item.productId} />
            ))}
          </tbody>
        )}
      </Table>
      <div className="itemList__pagination">
        <Pagination>{pagelist()}</Pagination>
      </div>
    </>
  );

  function changePage(e) {
    setPageNum(Number(e.target.id));
  }
}

export default ItemList;
