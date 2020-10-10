import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubServiceService } from './github-service.service'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository/repository.component';
import { HttpClientModule } from '@angular/common/http'
import { TruncatePipe } from '../truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
