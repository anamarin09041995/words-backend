import { Component, OnInit } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../models/word';
import { Router, ActivatedRoute } from '@angular/router';


declare const M;

@Component({
  templateUrl: './word-list.page.html'
})
export class WordListComponent implements OnInit {

  searching = false;
  data: Word[] = [];

  removeIndex = 0;

  modalUpload: any;
  modalRemove: any;

  constructor(public service: WordService, public router: Router, public route: ActivatedRoute) { }

  ngOnInit() {
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
    M.Modal.init(document.querySelectorAll('.modal'));
    this.modalRemove = M.Modal.getInstance(document.getElementById('removeModal'));
    this.modalUpload = M.Modal.getInstance(document.getElementById('uploadModal'));

    this.searching = true;
    this.service.list()
      .finally(() => this.searching = false)
      .subscribe(x => {
        console.log(JSON.stringify(x));
        this.data = x;
      }, err => console.log(err));
  }

  removeModal(index: number) {
    this.removeIndex = index;
    this.modalRemove.open();
  }

  removeWord() {
    this.data.splice(this.removeIndex, 1);
  }

  uploadFile() {

  }

  goToEdit() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

  goToAdd() {
    this.router.navigate(['add'], { relativeTo: this.route });
  }

}
