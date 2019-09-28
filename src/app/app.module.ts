import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MglTimelineModule } from 'angular-mgl-timeline';

import { AppComponent } from './app.component';
//import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { PersoComponent } from './components/perso/perso.component';
import { ProComponent } from './components/pro/pro.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { SchoolComponent } from './components/school/school.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    //MenuComponent,
    HeaderComponent,
    PersoComponent,
    ProComponent,
    SkillsComponent,
    HobbiesComponent,
    SchoolComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    FlexLayoutModule,
    MglTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
