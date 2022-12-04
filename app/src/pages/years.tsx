import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import YearCard from '../components/YearCard';
import Year from '../types/year';

function Years() {
  const { id } = useParams();
  const [years, setYears] = useState<Year[]>();

  useEffect(() => {
    API.getSchoolYears(id!).then((y) => {
      setYears(y);
      console.log(y);
    });
  }, [id]);

  return (
    <div className="grid">
      {years?.map((y) => (
        <YearCard key={y.attributes.year} y={y} />
      ))}
    </div>
  );
}

export default Years;
