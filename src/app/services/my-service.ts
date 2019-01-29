import { Post } from '../models/post.model';
import { Details } from '../models/details.model';
import { Category } from '../models/category.model';

export class MyServices {

    sports: Category = new Category(1, "Sports");
    technology: Category = new Category(1, "Technology");
    politics: Category = new Category(1, "Politics");


    postList: Post[] = [
        new Post("SuperBowl", 1, "Discussion for Superbowl Rams vs Patriots", this.sports),
        new Post("Baseball", 4, "Discussion for baseball", this.sports),
        new Post("New iPhone", 2, "Discussion for new iPhone", this.technology),
        new Post("Government Shutdown", 3, "When will the government reopen?", this.politics)
    ]

    postDetailList: Details[] = [
        new Details(1, ["test comments one", "new comment"], new Date)
    ]

    getPostsByCategory(selectedCategory: Category) {
        let results = [];
        this.postList.forEach(function(post) {
            if (post.category == selectedCategory) {
                results.push(post);
            }
        })
        return results;
    }
    listOfPosts(){
        return this.postList;
    }

    getPostById(id: number) {
        for (let post of this.postList) {
          if (post.id == id) {

            return post;
          }
    
        }
        
      }

      getDetailsById(id: number) {
        for (let detail of this.postDetailList) {
          if (detail.id == id) {

            return detail;
          }
    
        }
        
      }

}