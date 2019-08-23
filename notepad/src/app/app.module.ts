import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/************ Manual Imports ************/
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpIntepectorService } from './helpers/http-inteceptor/http-intepector.service';

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		/************ Manual Imports ************/
		HttpClientModule
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		// provider used to create fake backend
		httpIntepectorService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
