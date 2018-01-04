import {Inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {Tag} from "./models/tag";
import {CreateNoteModel} from "./models/create-note-model";

@Injectable()
export class NotesDataService {

  constructor(private _http:HttpClient, @Inject('BASE_URL') private _baseUrl: string ) { }

  public getTags(filter: string): Observable<Tag[]> {
    return this._http.get<Tag[]>(this._baseUrl + 'tags', {
      params: {
      filter: filter || ''
    }});
  }

  public createNote(note: CreateNoteModel) {
    return this._http.post(this._baseUrl + 'notes', note);
  }
}
