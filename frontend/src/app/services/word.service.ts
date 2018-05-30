import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Word } from '../models/word';
import { Rspn } from './shared/response';

@Injectable()
export class WordService {

    url: string = environment.urlBase + '/words';
    urlSync: string = environment.urlSync;

    constructor(public http: HttpClient) { }

    list() {
        return this.http.get<Rspn<Word[]>>(this.url)
            .map(x => {
                if (x.success) {
                    return x.data;
                } else {
                    throw new Error(x.error);
                }
            });
    }

    addWord(word: Word) {
        return this.http.post<Rspn<string>>(this.url, word)
            .map(x => {
                if (x.success) {
                    return x.data;
                } else {
                    throw new Error(x.error);
                }
            });
    }

    saveImg(id: string, name: string, base64: string) {
        const content = base64.split(',')[1];
        return this.http.post<Rspn<string>>(this.url + '/' + id + '/image', { name: name, base64: content })
            .map(x => {
                if (x.success) {
                    return x.data;
                } else {
                    throw new Error(x.error);
                }
            });
    }

    getImgUrl(id: string, name: string): string {
        return this.url + '/' + id + '/' + name;
    }

    getImgIndex(id: string, index: number): string {
        return this.urlSync + '/' + id + '/blob_' + index;
    }

}
