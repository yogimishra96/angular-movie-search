import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './child-component/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MovieService } from './shared/services/movie.service';
import { FormsModule } from '@angular/forms'; 
import { TimePipe } from './pipes/time.pipe'; 
import { HighlightDirective } from './shared/directive/highlight.directive';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
	declarations: [
		AppComponent,
		ChildComponent,
		MovieComponentComponent,
		DashboardComponent,
		NavBarComponent,
		TimePipe ,
		HighlightDirective
	],
	imports: [
		BrowserModule,
		MatSlideToggleModule,
		MatProgressSpinnerModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		HttpClientModule,
		FormsModule,
		AppRoutingModule,
		CommonModule 
	],
	exports: [
		BrowserModule,
		MatSlideToggleModule,
		MatProgressSpinnerModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		HttpClientModule
	],
	providers: [
		MovieService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
