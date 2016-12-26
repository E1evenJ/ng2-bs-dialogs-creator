import { Component, ComponentFactoryResolver } from '@angular/core';
import { DialogsService } from 'ng2-bs-dialogs-creator';
import { Router } from '@angular/router';

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
		this.dialogsSvc.showAsync('fd', SecondDialogComponent, 123, this.componentFactoryResolver)
			.then(res => alert('The result is: ' + res))
			.catch(res => alert('Dialog close from user'));
	}

	goToLogin(): void {
		this.router.navigate(['login']);
	}
}
