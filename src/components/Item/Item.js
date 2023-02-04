import './Item.css';

const Item = ({ item, onClick }) => {
  const { image, name, price, shortDescription, toppings } = item;

  return (
    <section className="Item">
      <div className="Item__avatar">
        <img src={image} alt={name} />
      </div>
      <div className="Item__info">
        <ul>
          <li className="Item__name">{name}</li>
          <li>{shortDescription}</li>
          <li>${price.toFixed(2)}</li>
          {toppings.length > 0 && <li>Toppings: {toppings.join(', ')}</li>}
        </ul>
      </div>
      <div className="Item__cta">
        <button onClick={onClick}>Add to Order</button>
      </div>
    </section>
  );
};

export default Item;
