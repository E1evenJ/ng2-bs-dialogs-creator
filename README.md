# Intro

`ng2-bs-dialogs-creator` is a utility that helps developers to show [Boostrap 3.* modals](http://getbootstrap.com/javascript/#modals) using [Angular2](https://angular.io).
Bootstrap modals works better if you append them as close as you can to the `body` element.
Given a `Component` `Type`, this library let you instantiate a dialog from code (without declaring it in the template) and it
automatically appends the component to a specific dialogs-container. You have the control over
the dialogs-container, so you can put it where ever you want. It is suggested to put it as close as you can to the
`body` element.

This library is in beta, so if you have any suggestion please contact us.
Thanks!

In the [repository](https://github.com/MasDevProject/ng2-bs-dialogs-creator.git) you can find a complete example with 2 dialogs.

# How to use it

## Download

Use `npm` to download tha library.
```
npm install ng2-bs-dialogs-creator
```


## Import the module

Import the module into the `AppModule` as follows:

**src/app.module.ts**
```
import { DialogsModule } from 'ng2-bs-dialogs-creator';

@NgModule({
	...
	imports: [ ...,  DialogsModule, ... ],
	...
})
export class AppModule { }
```
You have to import it just one time, if you try to import it in multiple modules, you will get an `Exception`.


## Add the DialogsContainerComponent into the AppComponent template

Next you should import the `DialogsContainerComponent` into a template.
This Component will create dialogs and will append them inside its template.
As said before, Bootstrap modals works better if you put them near the body element, so it is suggested to add the 
selector as the last element in the `AppComponent` template.

**src/app.component.html**
```
<div>
	...my template...
</div>

<bdc-dialogs-container></bdc-dialogs-container>
```


## Create a new dialog

A dialog is a `Component`, so you can create it in the same way.
The only difference is that you have to extend `BaseDialogComponent<TArgument, TResult>`.
This is an example:

**src/home/my-dialog.component.ts**
```
@Component({
	templateUrl: './my-dialog.component.html'
})
export class MyDialogComponent extends BaseDialogComponent<void, string> implements OnInit {
	public constructor(elementRef: ElementRef) {
		super(elementRef);
	}
	public done(): void { 
		this.closeDialogWithResult('myResult');
	}
	public ngOnInit(): void {
		super.ngOnInit();
	}
}
```

We are talking about Boostrap modals so the template has to follow the Bootstrap modal guide lines, but you can customize it as you like.
This is an example:
**src/home/my-dialog.component.ts**
```
<div class="modal fade" id="{{id}}" tabindex="-1" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			...
			<div (click)="done()">Close me</div>
			...
		</div>
	</div>
</div>
```


## Declare the dialog

Now you have to register it in the module that contains it.
This library allows you to use whatever module you want (lazy, eager, ...) but you need to register
the dialog is the `declarations` AND in the `entryComponents`.
This is an example:

**src/home/home.module.ts**
```
import { MyDialogComponent } from './my-dialog.component';

@NgModule({
	...,
	declarations: [
		...
		MyDialogComponent
	],
	entryComponents: [MyDialogComponent]
})
export class HomeModule { }
```


## Open the dialog

Everything is setup, so you just need to open the dialog.
To open it you need to use the DialogsService.
DialogsService has just 2 methods: `open` and `openAsync`.
The first accepts a callback as paramenter, the second returns a `Promise`.
You can use them in the following way;


**src/home/home.module.ts**
```
import { MyDialogComponent } from './my-dialog.component';

class MyComponent {
	constructor(private d: DialogsService, private r: ComponentFactoryResolver) { }

	public openDialog():void {
		this.d.show('my-dialog-id', MyDialogComponent, 'myArg', this.r, res => {
			console.log(res);
		});
	}

	public openDialogAsync():void {
		this.d.showAsync('my-dialog-id', MyDialogComponent, 'myArg', this.r)
		.then(res => console.log(res)
		.catch(() => console.log('Dialog closed by clicking on the shadow or pressing the "esc" button'));
	}
}
```

# Contributors
- Francesco Mazzarol
- Gianluca Bonacin
- Jonny Fox
- Salvatore Di Stefano