import meny from "./meny";
import styles from "./App.module.css";
import Menu from "./components/Menu";

const kategoriRekkefølge = {
  Forrett: 1,
  Hovedrett: 2,
  Dessert: 3,
};

const sortertMeny = [...meny].sort((a, b) => {
  return kategoriRekkefølge[a.kategori] - kategoriRekkefølge[b.kategori];
});

function App() {
  return (
    <div className={styles.container}>
      <h1>Meny</h1>
      <Menu retter={sortertMeny} />
    </div>
  );
}

export default App;
