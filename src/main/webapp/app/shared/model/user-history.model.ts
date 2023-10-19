import dayjs from 'dayjs';

export interface IUserHistory {
  id?: number;
  name?: string | null;
  issue?: string | null;
  issueDate?: string | null;
}

export const defaultValue: Readonly<IUserHistory> = {};
