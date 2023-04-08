import { Component } from '@angular/core';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular-app';
	showButtonClicked: string = "";
	myMessage = 'Hello, world!';
	onButtonClick() {
		this.showButtonClicked = "button clicked from child";
	}
}
