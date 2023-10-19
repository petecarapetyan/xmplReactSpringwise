import dayjs from 'dayjs';
import { IStudent } from 'app/shared/model/student.model';

export interface ITicket {
  id?: number;
  issue?: string;
  timeStamp?: string | null;
  student?: IStudent | null;
}

export const defaultValue: Readonly<ITicket> = {};
