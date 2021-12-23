import { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'Coming Soon',
    image: 'https://unsplash.com/photos/nUkxLPE5Fto',
    address: 'NOLA',
    description: 'First vacay'
  },
  {
    id: 'm2',
    title: 'Beach Life',
    image: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.climatechangenews.com%2Ffiles%2F2020%2F07%2F02123958%2Fjamaica.jpg&imgrefurl=https%3A%2F%2Fwww.climatechangenews.com%2F2020%2F07%2F02%2Fjamaica-becomes-first-caribbean-nation-submit-tougher-climate-plan-un%2F&tbnid=mlpLMEGMVI3FaM&vet=12ahUKEwjTmdiRxfj0AhVGUs0KHdLWCXYQMygOegUIARDnAQ..i&docid=OEVeP-8JWHTQBM&w=796&h=448&q=jamaica&ved=2ahUKEwjTmdiRxfj0AhVGUs0KHdLWCXYQMygOegUIARDnAQ',
    address: 'Jamaica',
    description: 'Second vacay'
  }
];

function Home () {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    // send http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return (
  <MeetupList meetups={loadedMeetups} />
  )}

export default Home;