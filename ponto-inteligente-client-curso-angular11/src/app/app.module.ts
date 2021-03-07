import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';

import {
	LoginModule,
	LoginRoutingModule,
	CadastroPjModule,
	CadastroPjRoutingModule,
	CadastroPfModule,
	CadastroPfRoutingModule
} from './autenticacao';
import {
	FuncionarioModule,
	FuncionarioRoutingModule
} from './funcionario';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		FlexLayoutModule,
		LoginModule,
		LoginRoutingModule,
		CadastroPjModule,
		CadastroPjRoutingModule,
		CadastroPfModule,
		CadastroPfRoutingModule,
		FuncionarioModule,
		FuncionarioRoutingModule,

		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
