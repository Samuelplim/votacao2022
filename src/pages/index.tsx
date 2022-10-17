import type { NextPage } from "next";
import Head from "next/head";
import clientPromise from "../../lib/mongodb";
/*
import { InferGetServerSidePropsType } from "next";
*/

export async function getServerSideProps() {
  try {
    await clientPromise;
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}

const Home: NextPage = () => {
  /*
  {
    isConnected,
}: InferGetServerSidePropsType<typeof getServerSideProps>
*/
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-blue-600 bg-black">
          <h1 className="">Welcome to Next.js with MongoDB!</h1>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};
export default Home;
