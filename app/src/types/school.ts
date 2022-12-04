import Year from './year';

export default interface School {
  readonly id: number;
  readonly attributes: SchoolAttributes;
}

interface SchoolAttributes {
  readonly name: string;
  readonly years: {
    readonly data: Year[];
  };
  readonly cover: {
    readonly data: Cover;
  };
}

interface Cover {
  readonly id: number;
  readonly attributes: {
    readonly name: string;
    readonly url: string;
  };
}
