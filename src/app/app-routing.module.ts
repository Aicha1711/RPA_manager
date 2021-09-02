import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EnvironnementsComponent } from './modules/environnements/environnements.component';
import { JobsComponent } from './modules/jobs/jobs.component';
import { PostsComponent } from './modules/posts/posts.component';
import { ProcessusComponent } from './modules/processus/processus.component';
import { RobotsComponent } from './modules/robots/robots.component';
import { LogComponent } from './login/log/log.component';



const routes: Routes = 
[  
 
  {
      path:'',
      component: DefaultComponent,
      children: [{ path:'',component:DashboardComponent},
                 { path:'posts',component:PostsComponent},
                 { path:'environnements',component:EnvironnementsComponent},
                 { path:'robots',component:RobotsComponent},
                 { path:'processus',component:ProcessusComponent},
                 { path:'jobs',component:JobsComponent}],
    },
  
   {
      path:'**',
      redirectTo:''}
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
