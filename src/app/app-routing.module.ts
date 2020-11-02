import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LedPageComponent } from './led-page/led-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/led-page', pathMatch: 'full' },
  { path: 'led-page', component: LedPageComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
