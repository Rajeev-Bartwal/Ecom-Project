import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./component/home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'categories',
                loadComponent: () => import('./component/categories/categories.component').then(c => c.CategoriesComponent)
            }
        ]
    }
];
