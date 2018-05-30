export class Word {
    constructor(
        public text: string,
        public signImage: string,
        public meanImage: string,
        public channels: string[],
        public type: string = 'Word',
        public id?: string,
    ) { }
}
