import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
import { Fragment } from "react";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Shop-window_in_Regensburg.jpg/220px-Shop-window_in_Regensburg.jpg",
//     address: "Some address 5, 12345 Some Location",
//     description: "This is our first meetup!",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     image:
//       "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D8zhRQMS-eAHFzGl_2nI-wHaE8%26pid%3DApi&f=1&ipt=55c7adf50bcffdaf5cd60bb8acff9e8a005f13b193056233fdda4da840dc895b&ipo=images",
//     address: "Some address 2, 12345 Some Location",
//     description: "This is our second meetup!",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const DB = process.env.ATLAS_CONNECTION;

  const client = await MongoClient.connect(DB);

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}).toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
