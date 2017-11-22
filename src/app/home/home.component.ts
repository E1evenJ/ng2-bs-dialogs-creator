import { Component, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

import { DialogsService } from '../../modal';
import { SecondDialogComponent } from './second-dialog.component/second-dialog.component';

@Component({
	template: `<h2>Home</h2>
			   <button (click)="openDialog()">Open second dialog</button>
			   <div class="link" (click)="goToLogin()">Go to login</div>`,
	styles: [`
		.link {
			color: blue;
			margin-top: 50px;
		}
	`]
})
export class HomeComponent {

	constructor(private dialogsSvc: DialogsService, private componentFactoryResolver: ComponentFactoryResolver, private router: Router) { }

	openDialog(): void {
		this.dialogsSvc.showAsync('fd', SecondDialogComponent, this.componentFactoryResolver, 123)
			.then(res => alert('The result is: ' + res))
			.catch(res => alert('Dialog close from user'));
	}

	goToLogin(): void {
		this.router.navigate(['login']);
	}
}
