import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutDefaultComponent } from './layouts/layout-default/layout-default.component';
import { LayoutEmptyComponent } from './layouts/layout-empty/layout-empty.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PriorxSharedModule } from './priorx-shared/priorx-shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        LayoutDefaultComponent,
        LayoutEmptyComponent,
        DashboardComponent,
        PageNotFoundComponent,
        AuthenticationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        PriorxSharedModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
