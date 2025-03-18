import React from 'react';
function CityCards({ cities,onDelete }) { // Receive cities as a prop
    const greenStyle = { color: 'green' ,cursor:"pointer"};
    const trashIcon = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="red"
        className="bi bi-trash3-fill"
        viewBox="0 0 16 16"
        style={{cursor:"pointer"}}
        onClick={(e) => {e.stopPropagation(); onDelete(city.name, city.year)}} // Added onClick
          >
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5.5 0 0 1 6.5 0h3A1.5.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
      </svg>
    );
  
    const plusCircle = <i className="bi bi-plus-circle" style={greenStyle}></i>; // Corrected class name
  
    return (
      <div className="container d-flex flex-row justify-content-center">
        {cities
          .sort((c1, c2) => c1.year - c2.year)
          .map((city) => (
            <div className="card" style={{ width: "18rem" }} key={city.name + city.year}>
              <div className="card-header">{city.name}</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{city.year}</li>
                <li className="list-group-item">
                {city.action === 'Delete' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                    style={{ cursor: 'pointer' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(city.name, city.year); // Access city from the map's scope
                    }}
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5.5 0 0 1 6.5 0h3A1.5.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                ) : (
                  <i className="bi bi-plus-circle" style={greenStyle}></i>
                )}
                </li>
              </ul>
            </div>
          ))}
      </div>
    );
  }
  
export default CityCards;