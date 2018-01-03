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
  private filter: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;

    this.load();
  }

  public onSearch(e) {
    this.filter = e;
    this.load();
  }

  public onDelete(id) {
    console.log(id);
    this.http.delete(this.baseUrl + 'notes/' + id.toString()).subscribe(result => {
      this.load();
    });
  }

  private load() {
    this.http.get<Note[]>(
      this.baseUrl + 'notes', {
        params: {
          filter: this.filter || ''
        }}).subscribe(result => {
      this.notes = result;
    }, error => console.error(error));
  }
}

interface Note {
  id: number;
  title: string;
  text: string;
  tags: string[];
}
