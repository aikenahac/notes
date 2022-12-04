import { FC } from 'react';
import Subject from '../types/subject';

const SubjectCard: FC<{ s: Subject }> = ({ s }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{s.name}</h2>
        <p>{s.professor}</p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-primary"
            href={s.notebook}
            target="_blank"
            rel="noreferrer"
          >
            Open notes
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubjectCard;
