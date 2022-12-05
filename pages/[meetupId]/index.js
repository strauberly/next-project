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

export default MeetupDetails;
