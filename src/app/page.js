import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white">
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fade-in">
          Welcome to Recipe App
        </h1>
        <p className="text-lg sm:text-2xl animate-fade-in animation-delay-1">
          Discover and explore delicious recipes from around the world.
        </p>
        <Link
          href={"/recipe-list"}
          className="inline-block px-6 py-3 rounded-full bg-white text-blue-600 font-semibold text-lg shadow-lg hover:bg-blue-100 transition-all duration-300 ease-in-out animate-bounce"
        >
          Explore Recipes
        </Link>
      </div>
    </div>
  );
};

export default page;
