import API from '../api/api';
import School from '../types/school';
import { FC } from 'react';

const SchoolCard: FC<{ s: School }> = ({ s }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src={`${API.baseUrl}${s.attributes.cover.data.attributes.url}`}
          alt={s.attributes.cover.data.attributes.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{s.attributes.name}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary" href={`/school/${s.id}`}>
            Go there
          </a>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
