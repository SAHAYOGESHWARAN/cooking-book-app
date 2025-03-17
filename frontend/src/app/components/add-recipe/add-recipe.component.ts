
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent {
  recipe: Recipe = { title: '', ingredients: [], instructions: '' };

  constructor(private recipeService: RecipeService, private router: Router) { }

  addRecipe(): void {
    this.recipeService.addRecipe(this.recipe).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}