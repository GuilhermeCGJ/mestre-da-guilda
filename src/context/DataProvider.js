import React, { useState } from 'react';
import DataContext from './DataContext';

function DataProvider({ children }) {
  const [user, setUser] = useState({
    name: '',
    HPTotal: 10,
    HPCurrent: 10,
    combat: 1,
    magic: 0,
    gold: 0,
    equip: '',
    busy: false,
    skills: [],
    locations: [],
    quests: [],
    doneQuest: [],
  })

  return (
    <DataContext.Provider
      value={ {
        user, setUser,
      } }
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;