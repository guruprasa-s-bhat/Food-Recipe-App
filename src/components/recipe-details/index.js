import Link from "next/link";
import React from "react";

const RecipeDetailsItem = ({ getRecipeDetails }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <div className="p-4">
        <Link
          href={"/recipe-list"}
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          ← Go to Recipe List
        </Link>
      </div>

      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto bg-white shadow-md rounded-lg">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex justify-center">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-full max-w-md rounded-lg object-cover shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-gray-800">
              {getRecipeDetails?.name}
            </h2>
            <div className="flex flex-wrap gap-4 mt-5">
              <p className="text-xl bg-blue-100 text-blue-600 py-1 px-3 rounded-lg">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-lg text-gray-700">
                <strong>Cuisine:</strong> {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-5">
              <p className="text-lg font-semibold text-gray-800">Ingredients</p>
              <ul className="space-y-3 list-disc mt-4 text-gray-700 pl-6">
                {getRecipeDetails?.ingredients.map((item, index) => (
                  <li key={index} className="text-base">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsItem;
