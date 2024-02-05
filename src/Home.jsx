import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";

export const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
})


function Home(){
    return (
        <div className="p-4 max-w-4xl mx-auto dark:bg-gray-800 dark:text-white">
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Welcome Home!</h3>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          This is your starting page. Feel free to explore and customize your application.
        </p>
      </div>
    )
}