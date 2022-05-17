import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipe/:id', component: RecipeDetailComponent },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'shopping-list/edit', component: ShoppingEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }