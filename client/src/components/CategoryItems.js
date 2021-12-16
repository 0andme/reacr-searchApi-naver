import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryItem from "./CategoryItem";
import { Table } from "reactstrap";

function CategoryItems({ categoryName }) {
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    getCategoryItem();
  }, [categoryName]);

  function getCategoryItem() {
    axios
      .post(`/chart`, { type: "category", categoryName: categoryName })
      .then((response) => {
        if (response.data.json) {
          const results = response.data.json;
          if (results.length > 0) {
            setCategoryItems(results);
          }
        }
      })
      .catch();
  }
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>{categoryName}</th>
            <th>상품명</th>
            <th>구매개수</th>
          </tr>
        </thead>
        <tbody className="itemList">
          {categoryItems.map((item) => {
            return <CategoryItem item={item} key={item.productId} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default CategoryItems;
