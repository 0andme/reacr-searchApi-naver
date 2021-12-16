import { Button } from "reactstrap";
import axios from "axios";
function ItemListItem(props) {
  const { item } = props;
  return (
    <tr className="itemList__item">
      <td>
        <img src={item.image} alt={item.title} />
      </td>
      <td>
        <a href={item.link}>{item.title.replace(/([<b>]|[</b>])/g, "")}</a>
      </td>
      <td>
        <span>{item.lprice}</span>
      </td>

      <td>
        <span>{item.mallName}</span>
      </td>
      <td>
        <Button onClick={funSaveItem}>구매</Button>
      </td>
    </tr>
  );
  function funSaveItem() {
    axios
      .post("/save", {
        title: item.title,
        image: item.image,
        productId: item.productId,
        category1: item.category1,
        category2: item.category2,
        category3: item.category3,
        category4: item.category4,
        buyCount: 1,
      })
      .then((res) => {
        alert("구매 완료!");
      })
      .catch((error) => {
        alert("구매 중 오류가 발생했습니다.", error, "error", "닫기");
      });
  }
}
export default ItemListItem;
