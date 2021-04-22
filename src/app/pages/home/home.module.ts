import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { HomeEffects } from './state/home.effects';

import { HomePage } from './containers/home/home.page';
import { homeReducer } from './state/home.reducer';
import { EffectsModule } from '@ngrx/effects';
import {ComponentsModule} from 'src/app/shared/components/components.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { UnitSelectorComponent } from './containers/unit-selector/unit-selector.component';




@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent,
    UnitSelectorComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home',homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ],
})
export class HomeModule { }
