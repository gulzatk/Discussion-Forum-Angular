import { Category } from './category.model';

export class Post {
    constructor (public title: string, public id: number, public description: string, public category: Category){}
}