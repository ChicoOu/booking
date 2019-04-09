import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyngIfComponent } from './myng-if/myng-if.component';
import { MyngSwitchComponent } from './myng-switch/myng-switch.component';
import { MyngStyleComponent } from './myng-style/myng-style.component';
import { MyngClassComponent } from './myng-class/myng-class.component';
import { StuComponent } from './stu/stu.component';

@NgModule({
  declarations: [
    AppComponent,
    MyngIfComponent,
    MyngSwitchComponent,
    MyngStyleComponent,
    MyngClassComponent,
    StuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
