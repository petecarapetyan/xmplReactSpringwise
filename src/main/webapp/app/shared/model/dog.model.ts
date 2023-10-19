export interface IDog {
  id?: number;
  name?: string | null;
  age?: number | null;
  breed?: string | null;
}

export const defaultValue: Readonly<IDog> = {};
