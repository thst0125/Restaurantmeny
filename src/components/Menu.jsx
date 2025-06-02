import Dish from "./Dish";
import styles from "./Menu.module.css";

const Menu = ({ retter }) => {
  // Del opp i kategorier
  const grupperteRetter = retter.reduce((acc, rett) => {
    if (!acc[rett.kategori]) {
      acc[rett.kategori] = [];
    }
    acc[rett.kategori].push(rett);
    return acc;
  }, {});

  // Endre rekkefølge på type rett
  const rekkefølge = ["Forrett", "Hovedrett", "Dessert"];

  return (
    <div>
      {rekkefølge.map((kategori) => (
        <div key={kategori}>
          <h2 className={styles.kategoriTittel}>{kategori}</h2>
          <div className={styles.grid}>
            {grupperteRetter[kategori]?.map((rett) => (
              <Dish key={rett.id} rett={rett} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
