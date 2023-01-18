import { ColorModeScript, theme } from "@chakra-ui/react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import { ReactNode } from "react";

export type Props = {
  title?: string;
  children: ReactNode;
};

export default function Layout({ children, title }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? `${title}` : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </main>
    </div>
  );
}