import { Card } from "./card";

export class CardList {

    count:number;
    results: Card[];

    constructor(obj?:any){

        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((x:any)=> new Card(x)) || [];
    }

}