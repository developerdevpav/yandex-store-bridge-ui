import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './blocks/header/header.component';
import { HttpClientModule} from "@angular/common/http";
import { StoreModule } from '@ngrx/store';
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {reducers} from "./store";
import { OAuth2LoginComponent } from './blocks/oauth2-login/oauth2-login.component';
import {RouterModule} from "@angular/router";
import { WorkspaceComponent } from './blocks/workspace/workspace.component';
import { GooglePhotoPageComponent } from './components/google-photo-page/google-photo-page.component';
import {EffectsModule} from "@ngrx/effects";
import {YandexStreamEffects, YandexUserEffects} from "./store/yandex-user/effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OAuth2LoginComponent,
    WorkspaceComponent,
    GooglePhotoPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([YandexUserEffects, YandexStreamEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RouterModule.forRoot([
      {path: '', component: WorkspaceComponent},
      {path: 'login', component: OAuth2LoginComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
