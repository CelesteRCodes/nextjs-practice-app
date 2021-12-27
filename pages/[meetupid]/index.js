import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://unsplash.com/photos/nUkxLPE5Fto"
      title="1st meetup"
      address="NOLA"
      description="first vacay"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1"
        },
      },
      {
        params: {
          meetupId: "m2"
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: "https://unsplash.com/photos/nUkxLPE5Fto",
        id: meetupId,
        title: "1st meetup",
        address: "NOLA",
        description: "first vacay",
      },
    },
  };
}

export default MeetupDetails;
