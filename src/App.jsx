import React from 'react';
import CityList from './CityList';
import 'bootstrap-icons/font/bootstrap-icons.css';
function App() {
  const citiesData = [
    { name: 'New York', year: 2020, action: 'Add' },
    { name: 'London', year: 2018, action: 'Delete' },
    { name: 'Tokyo', year: 2022, action: 'Add' },
    { name: 'Paris', year: 2015, action: 'Delete' },
    { name: 'Moscow', year: 2009, action: 'Add' },
    { name: 'Baghdad', year: 2000, action: 'Delete' },
  ];
  return (
    <>
        <CityList cities={citiesData} />
    </>
  )
}

export default App
