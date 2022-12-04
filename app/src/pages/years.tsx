import { useEffect, useState } from 'react';
import API from '../api/api';
import YearCard from '../components/YearCard';
import Year from '../types/year';

function Years() {
  const [years, setYears] = useState<Year[]>();

  useEffect(() => {
    API.getSchools().then((y) => {
      setYears(y);
    });
  }, []);

  return (
    <div>
      {years?.map((y) => (
        <YearCard key={y.attributes.year} y={y} />
      ))}
    </div>
  );
}

export default Years;
