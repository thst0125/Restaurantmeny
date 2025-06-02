import styles from "./Dish.module.css";

const Dish = ({ rett }) => {
  const kategoriFarge = {
    Hovedrett: styles.hovedrett,
    Forrett: styles.forrett,
    Dessert: styles.dessert,
  };

  return (
    <div className={styles.card}>
      <h2>{rett.tittel}</h2>
      <p>
        <strong>Pris:</strong> {rett.pris}
      </p>
      <p>{rett.ingredienser}</p>
      <p className={`${styles.kategori} ${kategoriFarge[rett.kategori]}`}>
        <em>{rett.kategori}</em>
      </p>
    </div>
  );
};

export default Dish;
