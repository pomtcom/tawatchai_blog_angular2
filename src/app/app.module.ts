import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent2Component } from './test-component-2/test-component-2.component';
import { BlogContentComponent } from './blog-content/blog-content.component';

const appRoutes: Routes = [
  { path: 'test1', component: TestComponentComponent },
  { path: 'test2', component: TestComponent2Component },
  { path: 'blog_content', component: BlogContentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestComponent2Component,
    BlogContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent,BlogContentComponent]
})
export class AppModule { }
