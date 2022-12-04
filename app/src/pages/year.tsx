import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api/api';
import SubjectCard from '../components/SubjectCard';
import Year from '../types/year';

function YearPage() {
  const { id } = useParams();
  const [year, setYear] = useState<Year>();

  useEffect(() => {
    API.getYear(id!).then((y) => {
      setYear(y);
    });
  }, []);

  return (
    <div className="grid">
      {year?.attributes.subjects?.map((s) => (
        <SubjectCard key={s.id} s={s} />
      ))}
    </div>
  );
}

export default YearPage;
