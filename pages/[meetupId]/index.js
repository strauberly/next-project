import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Shop-window_in_Regensburg.jpg/220px-Shop-window_in_Regensburg.jpg"
      title="First Meetup"
      address="Some Location"
      description=" This is the first meetup deets"
    />
  );
};

// dynmically build array of values

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Shop-window_in_Regensburg.jpg/220px-Shop-window_in_Regensburg.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "some address",
        description: "this is the first meetup",
      },
    },
  };
};

export default MeetupDetails;
