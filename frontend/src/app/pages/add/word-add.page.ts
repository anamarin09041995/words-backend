import { Component, ViewChild, ElementRef } from '@angular/core';
import { WordService } from '../../services/word.service';
import { Word } from '../../models/word';
import { Router, ActivatedRoute } from '@angular/router';
import { toast, toastError } from '../../util/toast-util';
import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: './word-add.page.html',
  styleUrls: ['./word-add.page.css']
})
export class WordAddComponent {

  @ViewChild('exFileInput') exInput: ElementRef;
  @ViewChild('signFileInput') signInput: ElementRef;

  readonly EX = 0;
  readonly SIGN = 1;

  imgSign: string;
  img: string;
  word: string;

  selected: number;
  process = false;

  reader: FileReader;



  constructor(public service: WordService, private router: Router, private route: ActivatedRoute) {
    this.reader = new FileReader();
  }

  addWord() {
    if (this.validate(this.img) && this.validate(this.imgSign) && this.validate(this.word)) {
      this.process = true;
      const timestamp = Date.now();
      this.service.addWord(new Word(this.word, timestamp + 'a', timestamp + 'b', ['word']))
        .flatMap(x => timer(1500)
          .flatMap(y => this.service.saveImg(x, timestamp + 'a', this.imgSign)))
        .flatMap(x => this.service.saveImg(x, timestamp + 'b', this.img))
        .finally(() => this.process = false)
        .subscribe(x => {
          toast('Palabra agregada');
          this.router.navigate(['../'], { relativeTo: this.route });
        }, err => toastError(err));
    } else {
      toast('Agrega el campo de palabra y las dos imagenes para continuar');
    }
  }

  validate(value: string): boolean {
    return value !== '' && value !== undefined;
  }

  onClickImg(input: ElementRef, type: number) {
    input.nativeElement.click();
    this.selected = type;
  }

  imgSelected(input: any) {
    const file = input.target.files[0];
    this.reader.readAsDataURL(file);
    this.reader.onload = (event: any) => {
      if (this.selected === this.EX) {
        this.img = event.target.result;
      } else {
        this.imgSign = event.target.result;
      }
    };
  }


}
