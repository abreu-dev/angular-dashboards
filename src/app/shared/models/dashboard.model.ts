import { DashboardItemModel } from './dashboard-item.model';

export class DashboardModel {
    id: string;
    year: number;
    month: number;
    day: number;
    values: DashboardItemModel[];
}
