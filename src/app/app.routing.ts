import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SportsComponent } from './sports/sports.component';
import { PostDetailsComponent } from './post-details/post-details.component';


const appRoutes: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'sports',
        component: SportsComponent
    },
    {
        path: 'sports/post-details/:id',
        component: PostDetailsComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
