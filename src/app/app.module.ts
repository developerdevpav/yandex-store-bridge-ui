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
import {EffectsModule} from "@ngrx/effects";
import {YandexUserEffects} from "./store/yandex-user/effects";
import { StreamCardComponent } from './blocks/stream-card/stream-card.component';
import { StreamPageComponent } from './pages/stream-page/stream-page.component';
import {YandexStreamEffects} from "./store/yandex-stream/effects";
import { MimeTypeCardComponent } from './blocks/mime-type-card/mime-type-card.component';
import { StreamContainerComponent } from './blocks/stream-container/stream-container.component';
import { StreamFormComponent } from './blocks/stream-form/stream-form.component';
import {MimeTypeEffects} from "./store/mime-type/effects";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OAuth2LoginComponent,
    WorkspaceComponent,
    StreamCardComponent,
    StreamPageComponent,
    MimeTypeCardComponent,
    StreamContainerComponent,
    StreamFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([YandexUserEffects, YandexStreamEffects, MimeTypeEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    RouterModule.forRoot([
      {path: '', component: WorkspaceComponent},
      {path: 'streams', component: StreamPageComponent},
      {path: 'login', component: OAuth2LoginComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
