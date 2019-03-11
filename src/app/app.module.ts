import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// DATABASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerAddComponent } from './player-add/player-add.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { HeaderComponent } from './header/header.component';

// SERVICES
import { CreateUserService } from './services/firebase.service';

// MODULES
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerAddComponent,
    PlayerListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase, 'drinkingscore'),
    AngularFirestoreModule
  ],
  providers: [CreateUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
