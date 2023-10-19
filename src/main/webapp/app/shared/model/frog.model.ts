export interface IFrog {
  id?: number;
  name?: string | null;
  age?: number | null;
  species?: string | null;
}

export const defaultValue: Readonly<IFrog> = {};
