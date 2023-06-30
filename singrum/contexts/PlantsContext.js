import {createContext, useState, useEffect, useCallback} from 'react';

const PlantsContext = createContext();

export function PlantsContextProvider({children}) {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/plants');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        if (result) {
          setPlants(result.data);
        }
      } catch (error) {
        console.error('Error', error);
      }
    };
    fetchData();
  }, []);

  const sortPlants = useCallback(
    sortType => {
      const sortedData = [...plants];

      switch (sortType) {
        case 'newest':
          sortedData.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );
          break;
        case 'likes':
          sortedData.sort((a, b) => b.likes - a.likes);
          break;
        case 'name':
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }

      return sortedData;
    },
    [plants],
  );

  return (
    <PlantsContext.Provider value={{plants, sortPlants}}>
      {children}
    </PlantsContext.Provider>
  );
}

export default PlantsContext;
