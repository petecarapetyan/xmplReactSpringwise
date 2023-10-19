import { ITicket } from 'app/shared/model/ticket.model';

export interface IStudent {
  id?: number;
  name?: string;
  initials?: string;
  tickets?: ITicket[] | null;
}

export const defaultValue: Readonly<IStudent> = {};
