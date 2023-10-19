export interface IAirplane {
  id?: number;
  model?: string | null;
  make?: string | null;
  color?: string | null;
}

export const defaultValue: Readonly<IAirplane> = {};
