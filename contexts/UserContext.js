import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    username: null,
    email: null,
    streak: 0,
    fitpoints: 0,
    reminders: [],
    devices: [],
    acceptedChallenges: [],
    offeredChallenges: [
      {
        id: 1,
        name: 'One billion push ups',
        description: 'Attempt if you dare',
        reward: 1000,
      },
      {
        id: 2,
        name: '500 Total Reps',
        description: 'For only the most swole!',
        reward: 500,
      },
      {
        id: 2,
        name: '500 Total Reps',
        description: 'For only the most swole!',
        reward: 200,
      },
      {
        id: 3,
        name: '1000 Total Reps',
        description: 'For only the most swole!',
        reward: 100,
      },
    ],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
