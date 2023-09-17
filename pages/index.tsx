import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Leonard Rwai | Web Developer</title>
        <meta
          name="description"
          content="Showcasing a blend of front-end artistry and full-stack expertise. My portfolio prioritizes design and seamless user experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
