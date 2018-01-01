import {Component, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public notes: Note[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Note[]>(baseUrl + 'notes').subscribe(result => {
      this.notes = result;
    }, error => console.error(error));
  }
}

interface Note {
  title: string;
  text: string;
  tags: string[];
}
