export class User {
    constructor(
        public name: string,
        public email: string,
        public selected: boolean = false
    ) {}
}