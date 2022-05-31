import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesModule } from './views/courses/courses.module';
import { ViewsModule } from './views/views.module';
import { AgendasModule } from './views/agendas/agendas.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/reducers/counter.reducer';
import { breadCrumbReducer } from './store/reducers/bread-crumb.reducer';

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ViewsModule,
    CoursesModule,
    AgendasModule,
    HttpClientModule,
    StoreModule.forRoot({breadcrumb: breadCrumbReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
