import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './downloads/downloads.component';
import { ErrorComponent } from './error/error.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { RoutingExampleComponent } from './routing-example/routing-example.component';


const routes: Routes = [
  { path: 'articles', component: Page1Component },
  { path: 'articles/today', component: Page2Component },
  { path: 'articles/today/noon', component: Page3Component },
  { path: 'exampleRoute/:name', component: RoutingExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
