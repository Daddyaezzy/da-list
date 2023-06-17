import styles from "../../styles/Niggas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { niggas: data },
  };
};

const Niggas = ({ niggas }) => {
  return (
    <div>
      <h1>All Niggas</h1>

      {niggas.map((nigga) => (
        <div className={styles.single} key={nigga.id}>
          <Link href={"/niggas/" + nigga.id}>
            <h3>{nigga.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Niggas;
