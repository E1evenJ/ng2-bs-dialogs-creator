import { Component, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

import { DialogsService } from '../../modal';
import { FirstDialogComponent } from './first-dialog.component/first-dialog.component';

@Component({
	template: `<h2>Login</h2>
			   <button (click)="openDialog()">Open first dialog</button>
			   <div class="link" (click)="goToHome()">Go to home</div>
			   `,
	styles: [`
		.link {
			color: blue;
			margin-top: 50px;
		}
	`]
})
export class LoginComponent {
	title = 'app works!';

	constructor(private dialogsSvc: DialogsService, private componentFactoryResolver: ComponentFactoryResolver, private router: Router) { }

	openDialog(): void {
		this.dialogsSvc.showAsync('fd', FirstDialogComponent, this.componentFactoryResolver, this.title)
			.then(res => alert('The result is: ' + res))
			.catch(res => alert('Dialog close from user'));
	}

	goToHome(): void {
		this.router.navigate(['home']);
	}
}
