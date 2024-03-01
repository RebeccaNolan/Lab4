import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListcomponentComponent } from './listcomponent/listcomponent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'databinding-app';

  counter:number = 0;
  hide:boolean = false;

  counterClicked()
  {
    this.counter++;
  }

  onDoubleClick()
    {
      this.hide = !this.hide;
    }
}