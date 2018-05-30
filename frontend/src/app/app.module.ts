import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { LoaderComponent } from './components/indicator/loader.component';

import { LoginPageComponent } from './pages/login/login.page';
import { WordAddComponent } from './pages/add/word-add.page';
import { WordListComponent } from './pages/list/word-list.page';

import { LoginService } from './services/login.service';
import { WordService } from './services/word.service';

import { AppComponent } from './app.component';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/delay';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'words', component: WordListComponent },
  { path: 'words/add', component: WordAddComponent }
];

@NgModule({
  declarations: [
    AppComponent, WordAddComponent, WordListComponent, LoginPageComponent, LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoginService, WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
