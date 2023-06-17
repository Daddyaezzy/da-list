import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Niggas List | Home</title>
        <meta name="keywords" content="niggas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic
          distinctio dolor perspiciatis necessitatibus quidem laudantium quam,
          in explicabo iure quas dolores. Voluptatem possimus expedita deleniti,
          sunt sapiente totam illo rem aspernatur, aliquid iure dolor nobis
          veritatis consectetur odit accusantium maiores?
        </p>
        <div className={styles.btn}>
          <Link href="/niggas">See Niggas List</Link>
        </div>
      </div>
    </>
  );
}
