import {MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from "../../components/meetups/MeetupDetail";


function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://celeste:marie313@cluster0.tnhom.mongodb.net/meetupsAPIpractice?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({params: {
      meetupId: meetup._id.toString() 
    },
  }))
}
//      [
//       {
//         params: {
//           meetupId: "m1"
//         },
//       },
//       {
//         params: {
//           meetupId: "m2"
//         },
//       },
//     ],
//   };
// }

export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://celeste:marie313@cluster0.tnhom.mongodb.net/meetupsAPIpractice?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});

  console.log(meetupId);

  return {
    props: {
      meetupData:  {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
      // {
      //   image: "https://unsplash.com/photos/nUkxLPE5Fto",
      //   id: meetupId,
      //   title: "1st meetup",
      //   address: "NOLA",
      //   description: "first vacay",
      // },
    },
  };
}

export default MeetupDetails;
