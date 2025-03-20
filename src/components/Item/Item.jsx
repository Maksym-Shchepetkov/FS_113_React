const Item = ({ item }) => {
  return (
    <li>
      <img src={item.image} width={200} />
      <h2>{item.name}</h2>
      <p>{item.phone}</p>
      <p>{item.email}</p>
    </li>
  );
};
export default Item;
