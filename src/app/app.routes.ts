import { Routes } from '@angular/router';
import { DataBinding } from './components/data-binding/data-binding';
import { Directive } from './components/directive/directive';
import { Variables } from './components/variables/variables';

export const routes: Routes = [
    {
        path:'data-binding',
        component:DataBinding
    },
    {
        path:'directive',
        component:Directive
    },
    {
        path:'variables',
        component:Variables
    }
];
