function ItemImage(props) {
  //If className is provided in props, use that, otherwise just specify a blank string
  return (
    <img
      className={props.className || ""}
      src={`/assets/icons/${props.item.id}.svg`}
      alt={props.item.name}
      title={props.item.name}
    />
  );
}

export default ItemImage;
