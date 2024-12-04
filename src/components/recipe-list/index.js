import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const RecipeList = ({ recipeList }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 via-white to-indigo-50">
      <div className="p-8 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-5xl font-extrabold text-indigo-800">Recipes</h2>
          <Link
            className="text-lg text-indigo-600 hover:text-indigo-800 transition-all underline"
            href={"/"}
          >
            ← Home
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((recipe) => (
              <Link
                key={recipe.id}
                href={`/recipe-list/${recipe.id}`}
                className="hover:scale-[1.05] transition-transform duration-300"
              >
                <Card className="shadow-lg rounded-lg overflow-hidden bg-white hover:shadow-2xl">
                  <CardContent className="bg-white">
                    <div className="relative">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-64 w-full object-cover rounded-t-lg"
                      />
                      <div className="absolute bottom-2 right-2 bg-white/85 px-3 py-1 rounded-full shadow-sm text-indigo-600 font-semibold">
                        ⭐ {recipe.rating}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-semibold text-center text-indigo-800">
                        {recipe.name}
                      </h3>
                      <p className="text-center text-gray-600 mt-2">
                        {recipe.cuisine}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No recipes found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
