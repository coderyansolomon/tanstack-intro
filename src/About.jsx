import { createRoute } from "@tanstack/react-router";
import { rootRoute } from ".";

export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: About
})


function About(){
    return (
        <div className="p-4 max-w-4xl mx-auto dark:bg-gray-800 dark:text-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">About Us</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Welcome to our About page. Here, you'll find information about our mission, values, and the team behind our project. We are committed to delivering quality content and services to our community. Feel free to reach out with any questions or feedback.
      </p>
    </div>
    )
}