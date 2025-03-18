import React, { useState, useMemo } from 'react';
import CityCards from './CityCards';

function CityList({ cities: initialCities }) { // Rename prop to initialCities
  const [currentPage, setCurrentPage] = useState(1);
  const [cityList, setCityList] = useState(initialCities); // Rename state to cityList

  const handleDelete = (name, year) => {
    setCityList(cityList.filter((city) => city.name !== name || city.year !== year));
    // Here you would also call your API to delete the city from the server
  };

  const cardsPerPage = 4;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;

  const sortedCities = useMemo(() => {
    return [...cityList].sort((c1, c2) => c1.year - c2.year);
  }, [cityList]);

  const currentCards = sortedCities.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(sortedCities.length / cardsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <CityCards cities={currentCards} onDelete={handleDelete} />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CityList;