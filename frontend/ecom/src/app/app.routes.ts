import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { PagePath } from './constant/page-path-constant';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                children: [
                    {
                        path: '',
                        loadComponent: () => import('./component/home/home.component').then(c => c.HomeComponent),
                    },
                    {
                        path: ':itemID',
                        children: [
                            {
                                path: 'details',
                                loadComponent: () => import('./component/details/details.component').then(c => c.DetailsComponent)
                            }
                        ]
                    }
                ]
            },
            {
                path: 'categories',
                loadComponent: () => import('./component/categories/categories.component').then(c => c.CategoriesComponent)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: PagePath.HomePage
            },
            {
                path: '**',
                redirectTo: PagePath.HomePage
            }
        ]
    }
];
