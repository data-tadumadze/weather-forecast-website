import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { MainComponent } from './main/main.component';
import { PasswordRecoveryComponent } from './password-recovery/password-recovery.component';
import { AuthGuard } from './auth/auth.guard';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'map',
    component: MapComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LogInComponent },
  { path: 'main/:clickedCity', component: MainComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
