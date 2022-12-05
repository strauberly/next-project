import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Shop-window_in_Regensburg.jpg/220px-Shop-window_in_Regensburg.jpg",
    address: "Some address 5, 12345 Some Location",
    description: "This is our first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D8zhRQMS-eAHFzGl_2nI-wHaE8%26pid%3DApi&f=1&ipt=55c7adf50bcffdaf5cd60bb8acff9e8a005f13b193056233fdda4da840dc895b&ipo=images",
    address: "Some address 2, 12345 Some Location",
    description: "This is our second meetup!",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export function getStaticProps() {
  // api fetch or filesystem fetch return object
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
