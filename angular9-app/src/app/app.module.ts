import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/http';

import { Routes, RouterModule } from "@angular/router";
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IframeComponent } from './iframe/iframe.component';
import { CounterComponent } from './counter/counter.component';
import { OtherComponent } from './other/other.component';

const routes: Routes = [
    { path: '', redirectTo: 'ng9-counter', pathMatch: 'full' },
    { path: 'ng9-counter', component: CounterComponent },
    { path: 'ng9-other', component: OtherComponent },
    { component: IframeComponent, path: "**" } // Fallback route
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        IframeComponent,
        CounterComponent,
        OtherComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        // HttpModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [
        // In Angular 1.6 hash based routing now has #! for google ajax crawlers, we should match in Angular
        // https://docs.angularjs.org/guide/migration#commit-aa077e8
        { provide: APP_BASE_HREF, useValue: '!' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
