import {Link, Outlet} from '@tanstack/react-router'

function NavigationHeader(){
    return (
        <>
        <div className="bg-gray-800 p-4 flex justify-between items-center dark:bg-gray-900">
          <div className="flex gap-4">
            <Link to="/" className="text-white hover:text-blue-400 [&.active]:font-bold">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 [&.active]:font-bold">
              About
            </Link>
          </div>
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-700" />
        <Outlet className="p-4 dark:bg-gray-800 dark:text-gray-200" />
        </>
    )
}

export default NavigationHeader