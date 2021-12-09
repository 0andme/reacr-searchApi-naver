import { Button } from "reactstrap";

function ItemListItem(props) {
  const { item } = props;
  return (
    <tr className="itemList__item">
      <td>
        <img src={item.image} alt="" />
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
        <Button>button</Button>
      </td>
    </tr>
  );
}
export default ItemListItem;
