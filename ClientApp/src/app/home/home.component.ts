import {Component, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  http: HttpClient;
  baseUrl: string;

  public notes: Note[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
    http.get<Note[]>(baseUrl + 'notes').subscribe(result => {
      this.notes = result;
    }, error => console.error(error));
  }

  public onSearch(e) {
    this.http.get<Note[]>(
      this.baseUrl + 'notes', {
      params: {
        filter: e
      }}).subscribe(result => {
      this.notes = result;
    }, error => console.error(error));
  }
}

interface Note {
  title: string;
  text: string;
  tags: string[];
}
