import React from 'react';
//import CityCards from './CityCards';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Grid from './Grid'
function App() {
  const citiesData = [
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' },
    { name: 'New York', negativeVotes: 2020, positiveVotes: '800' }
  ];
  return (
    <>
        <Grid cities={citiesData} />
    </>
  )
}

export default App
