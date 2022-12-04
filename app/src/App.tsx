import { useEffect, useState } from 'react';
import API from './api/api';
import SchoolCard from './components/SchoolCard';
import School from './types/school';

function App() {
  const [schools, setSchools] = useState<School[]>();

  useEffect(() => {
    API.getSchools().then((s) => {
      setSchools(s);
    });
  }, []);

  return (
    <div>
      {schools?.map((s) => (
        <SchoolCard key={s.attributes.name} s={s} />
      ))}
    </div>
  );
}

export default App;
