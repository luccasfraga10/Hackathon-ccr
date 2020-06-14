import React, { useState } from 'react';

import SearchBar from '../SearchBar';
import CalculateDistance from '../CalculateDistance';

const Header = () => {
  const [distance, setDistance] = useState([]);

  return (
    <div>
      <SearchBar id={1} valueDistance={distance} setDistance={setDistance} />
      <SearchBar id={2} valueDistance={distance} setDistance={setDistance} />

      {distance && distance.length === 2 && (
        <CalculateDistance coordinates={distance} />
      )}
    </div>
  );
};

export default Header;
