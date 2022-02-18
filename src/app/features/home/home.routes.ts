import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { MasterLayoutComponent } from '../../shared/layout/master-layout.component';

export class HomeRoutes {
    public root = 'home';
    public get(): Routes {
        return [
            {
                path: this.root,
                component: MasterLayoutComponent,
                children: [
                    {
                        path: '',
                        component: HomeComponent
                    }
                ]
            }
        ];
    }
}
