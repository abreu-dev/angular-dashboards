import { Injectable } from '@angular/core';

import * as uuid from 'uuid';

import { DashboardModel } from '../models/dashboard.model';
import { DashboardItemModel } from '../models/dashboard-item.model';


@Injectable()
export class DashboardService {
    public get(): DashboardModel {
        const dashboard = new DashboardModel();

        dashboard.id = uuid.v4();
        dashboard.day = 1;
        dashboard.month = 2;
        dashboard.year = 2022;

        const technology = new DashboardItemModel();
        technology.id = uuid.v4();
        technology.name = 'Technology'
        technology.value = this.randomInteger();
        
        const clothing = new DashboardItemModel();
        clothing.id = uuid.v4();
        clothing.name = 'Clothing'
        clothing.value = this.randomInteger();
        
        const homeAppliance = new DashboardItemModel();
        homeAppliance.id = uuid.v4();
        homeAppliance.name = 'Home Appliance'
        homeAppliance.value = this.randomInteger();

        dashboard.values = [technology, clothing, homeAppliance];

        return dashboard;
    }

    private randomInteger() {
        return Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
    }
}