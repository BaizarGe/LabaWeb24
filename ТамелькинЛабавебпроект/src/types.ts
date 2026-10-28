// src/types.ts
export type Category =
 | "Завтрак"
 | "Обед"
 | "Ужин"
 | "Десерт";

export interface Recipe {
 readonly id: string;
 title: string;
 category: Category;
 servings: number;
 cookingTime: number;
 ingredients: string[];
 instructions: string;
 favorite: boolean;
}
export type sortMode = "default" | "minutesAsc" | "minutesDesc"
export type RecipeDraft = Omit<Recipe, "id" | "favorite">;
export type RecipeFilter = {
 query: string;
 category: Category | "Все";
 favoritesOnly: boolean;
};
