import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      title={props.meetUpData.title}
      image={props.meetUpData.image}
      address={props.meetUpData.address}
      description={props.meetUpData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://fathy:4487181f@cluster0.gylpxdp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://fathy:4487181f@cluster0.gylpxdp.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const selectedMeetups = await meetupsCollections.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(selectedMeetups);

  client.close();

  return {
    props: {
      meetUpData: {
        id: selectedMeetups._id.toString(),
        title: selectedMeetups.title,
        address: selectedMeetups.address,
        image: selectedMeetups.image,
        description: selectedMeetups.description, 
      },
    },
  };
}

export default MeetupDetails;
