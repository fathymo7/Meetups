import MeetupList from "../components/meetups/MeetupList";

const dummy_MeetUps = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://ar.wikipedia.org/wiki/%D8%A8%D8%B1%D8%AC_%D8%A8%D9%8A%D8%B2%D8%A7_%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%84#/media/%D9%85%D9%84%D9%81:The_Leaning_Tower_of_Pisa_SB.jpeg",
    address: "Rome",
    description: "this is a first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://ar.wikipedia.org/wiki/%D8%A8%D8%B1%D8%AC_%D8%A8%D9%8A%D8%B2%D8%A7_%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D9%84#/media/%D9%85%D9%84%D9%81:The_Leaning_Tower_of_Pisa_SB.jpeg",
    address: "Napoli",
    description: "this is a second meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: dummy_MeetUps,
    },
    revalidate: 1,
  };
}
export default HomePage;
