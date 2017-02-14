import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CapitalisePipe } from './pipes/capitalisePipe'

import './style.css'

@NgModule({
  declarations: [
    AppComponent,
    CapitalisePipe,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
