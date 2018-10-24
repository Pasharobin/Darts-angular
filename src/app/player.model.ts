import { Dart } from "./dart.model";

export class Player {
    constructor(
        public name: string,
        public dart1: Dart = new Dart(),
        public dart2: Dart = new Dart(),
        public dart3: Dart = new Dart(),
        public results: number[] = []
    ) {}
}