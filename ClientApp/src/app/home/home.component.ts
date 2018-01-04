import {Component, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from "@angular/forms";

import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {NotesDataService} from "./notes-data.service";
import {Tag} from "./models/tag";
import {CreateNoteModel} from "./models/create-note-model";

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

  public animal: string;
  public name: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public dialog: MatDialog) {
    this.http = http;
    this.baseUrl = baseUrl;

    this.load();
  }

  public onSearch(e) {
    this.filter = e;
    this.load();
  }

  public onDelete(id) {
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

  public openDialog(): void {
    const dialogRef = this.dialog.open(NoteOverviewDialogComponent, {
      width: '2500px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.load();
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}

interface Note {
  id: number;
  title: string;
  text: string;
  tags: string[];
}

@Component({
  selector: 'app-note-overview-dialog',
  templateUrl: 'note-overview-dialog.html',
})
export class NoteOverviewDialogComponent {

  stateCtrl: FormControl;

  public filterdTags: Observable<Tag[]>;

  selectedTags: string[] = [];
  public title: string;
  public text: string;

  constructor(
    public dialogRef: MatDialogRef<NoteOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _notesData: NotesDataService) {
    this.stateCtrl = new FormControl();

    this.filterdTags = this.stateCtrl.valueChanges
      .debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this._notesData.getTags(term));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addTag(value: string) {
    this.selectedTags.push(value);
    this.stateCtrl.setValue('');
  }

  onTagSelected(e: any) {
    this.addTag(e.option.value);
  }

  onTagInputFocused() {
    this.stateCtrl.setValue('');
  }

  onCreate() {
    this._notesData.createNote({
      title: this.title,
      text: this.text,
      tags: this.selectedTags
    }).subscribe(res => this.dialogRef.close());
  }

  onInputKeyDown(e) {
    if(e.keyCode == 13) {
      e.preventDefault();
      this.addTag(this.stateCtrl.value);
    }
  }
}
