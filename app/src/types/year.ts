import Subject from './subject';

export default interface Year {
  readonly id: number;
  readonly attributes: YearData;
}

interface YearData {
  readonly year: number;
  readonly subjects: Subject[];
}
