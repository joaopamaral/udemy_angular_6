import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {map} from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {
  private firebaseUrl = 'https://ng-recipe-book-17e25.firebaseio.com/recipes.json';
  constructor (private httpClient: HttpClient, private recipeServices: RecipeService,
               private authService: AuthService) {}

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer aahsuidhasudha');

    // return this.httpClient.put(this.firebaseUrl, this.recipeServices.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });

    const req = new HttpRequest('PUT', this.firebaseUrl, this.recipeServices.getRecipes(), {
      reportProgress: true
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    // return this.httpClient.get<Recipe[]>(this.firebaseUrl + token)
    return this.httpClient.get<Recipe[]>(this.firebaseUrl, {
      observe: 'body',
      responseType: 'json'
    })
      .pipe(map(
      (recipes) => {
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
      (recipes: Recipe[]) => {
        this.recipeServices.setRecipes(recipes);
      }
    );
  }
}
