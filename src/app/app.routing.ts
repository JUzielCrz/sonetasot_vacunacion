import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { IndexComponent } from "./components/appointment/index/index.component";
import { RegisterCompletedComponent } from "./components/appointment/register-completed/register-completed.component";
const appRoute : Routes = [

    {path: 'appointment', children: [
        {path: 'index', component: IndexComponent },
        {path: 'register/completed', component: RegisterCompletedComponent },
    ]}
]

export const appRoutingProviders : any[]=[];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute);