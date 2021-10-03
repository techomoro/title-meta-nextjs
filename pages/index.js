import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - TitleMetaNextjs</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <h1>This is Home page</h1>
      </div>
    </div>
  );
}
