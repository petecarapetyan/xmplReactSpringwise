export interface IMovie {
  id?: number;
  name?: string | null;
  yearOf?: number | null;
  genre?: string | null;
  rating?: string | null;
}

export const defaultValue: Readonly<IMovie> = {};
