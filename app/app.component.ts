import { Component } from '@angular/core';

import { CharacterService } from './character.service';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/characters']">Characters</a>
    <a [routerLink]="['/login']">login</a>
    <a [routerLink]="['/todo']">todo</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
