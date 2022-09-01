import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const newMeetupPage = () => {
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};
export default newMeetupPage;
