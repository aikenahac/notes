import API from '../api/api';
import Year from '../types/year';
import { FC } from 'react';

const YearCard: FC<{ y: Year }> = ({ y }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{y.attributes.year}. letnik</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Go there</button>
        </div>
      </div>
    </div>
  );
};

export default YearCard;
