import { Injectable } from '@angular/core';

import * as uuid from 'uuid';

import { DashboardModel } from '../models/dashboard.model';
import { DashboardItemModel } from '../models/dashboard-item.model';


@Injectable()
export class DashboardService {
    public getForAdvancedPie(): DashboardModel {
        const dashboard = new DashboardModel();

        dashboard.id = uuid.v4();
        dashboard.day = 1;
        dashboard.month = 2;
        dashboard.year = 2022;

        const technology = new DashboardItemModel();
        technology.id = uuid.v4();
        technology.name = 'Technology'
        technology.values = [
            { name: 'Cellphones & Phones', value: this.randomInteger()},
            { name: 'Computing', value: this.randomInteger()},
            { name: 'Cameras & Accessories', value: this.randomInteger()},
            { name: 'Televisions', value: this.randomInteger()}
        ];
        technology.value = technology.values.reduce((sum, current) => sum + current.value, 0);
        
        const clothing = new DashboardItemModel();
        clothing.id = uuid.v4();
        clothing.name = 'Clothing'
        clothing.values = [
            { name: 'Shirts', value: this.randomInteger()},
            { name: 'Dresses', value: this.randomInteger()},
            { name: 'Jeans', value: this.randomInteger()}
        ];
        clothing.value = clothing.values.reduce((sum, current) => sum + current.value, 0);
        
        const homeAppliance = new DashboardItemModel();
        homeAppliance.id = uuid.v4();
        homeAppliance.name = 'Home Appliance'
        homeAppliance.values = [
            { name: 'Fridges', value: this.randomInteger()},
            { name: 'Stoves', value: this.randomInteger()},
            { name: 'Washing Machine', value: this.randomInteger()},
        ];
        homeAppliance.value = homeAppliance.values.reduce((sum, current) => sum + current.value, 0);

        dashboard.values = [technology, clothing, homeAppliance];

        return dashboard;
    }

    public getForStackedArea(): DashboardModel[] {
        const technology = new DashboardModel();
        technology.id = uuid.v4();
        technology.name = 'Technology';
        technology.series = [
            { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
            { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
            { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
        ];
        technology.childs = [
            {
                id: uuid.v4(),
                name: 'Cellphones & Phones',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                id: uuid.v4(),
                name: 'Computing',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                id: uuid.v4(),
                name: 'Televisions',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            }
        ];

        const clothing = new DashboardModel();
        clothing.id = uuid.v4();
        clothing.name = 'Clothing';
        clothing.series = [
            { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
            { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
            { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
        ];
        clothing.childs = [
            {
                id: uuid.v4(),
                name: 'Cellphones & Phones',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                id: uuid.v4(),
                name: 'Computing',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                id: uuid.v4(),
                name: 'Televisions',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            }
        ];

        const homeAppliance = new DashboardModel();
        homeAppliance.id = uuid.v4();
        homeAppliance.name = 'Home Appliance';
        homeAppliance.series = [
            { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
            { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
            { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
        ];
        homeAppliance.childs = [
            {
                id: uuid.v4(),
                name: 'Cellphones & Phones',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                id: uuid.v4(),
                name: 'Computing',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            },
            {
                id: uuid.v4(),
                name: 'Televisions',
                series: [
                    { id: uuid.v4(), name: "12/2021", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "01/2022", value: this.randomInteger(), values: [] },
                    { id: uuid.v4(), name: "02/2022", value: this.randomInteger(), values: [] }
                ] 
            }
        ];

        return [technology, clothing, homeAppliance];
    }

    private randomInteger() {
        return Math.floor(Math.random() * (10000 - 10 + 1)) + 10;
    }
}