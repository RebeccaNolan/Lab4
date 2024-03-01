import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listcomponent.component.html',
  styleUrl: './listcomponent.component.css'
})
export class ListcomponentComponent {
  presidents:string[] = ["Higgins", "McAleese", "Robinson", "Hillery"];

  presidents2:any[] = 
  [{name: "Higgins", tern:"2011-"},
  {name: "Higgins", tern:"2011-"},
  {name: "Higgins", tern:"2011-"},
  {name: "Higgins", tern:"2011-"},
  ];
}
