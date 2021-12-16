function CategoryItem(props) {
  const { item } = props;
  return (
    <tr className="itemList__item">
      <td>
        <img src={item.image} alt={item.title} />
      </td>
      <td>
        <a href={item.link}>{item.title.replace(/([<b>]|[</b>])/g, "")}</a>
      </td>
      <td>{item.buyCount}</td>
    </tr>
  );
}
export default CategoryItem;
