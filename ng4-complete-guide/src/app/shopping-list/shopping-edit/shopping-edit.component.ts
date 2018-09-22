import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  // editItemIndex: number;
  editItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService, private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editItem = data.editedIngredient;
          this.editMode = true;
          this.slForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );

    // this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
    //   this.editItemIndex = index;
    //   this.editMode = true;
    //   this.editItem = this.shoppingListService.getIngredient(index);
    //   this.slForm.setValue({
    //     name: this.editItem.name,
    //     amount: this.editItem.amount
    //   });
    // });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      // this.shoppingListService.updateIngredient(this.editItemIndex, newIngredient);
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    } else {
      // this.shoppingListService.addIngredient(newIngredient);
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  onDelete() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
    // this.shoppingListService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
