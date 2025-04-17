import { Link } from "react-router-dom"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (


<footer className="bg-sky-300 rounded-lg shadow-sm md:mx-8 mt-1">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm  sm:text-center dark:text-gray-400">
    © {currentYear}{" "}

      <Link to="/" className="hover:underline">Fresh Cart</Link>. All Rights Reserved.
    </span>
    <ul className="md:flex flex-wrap items-center mt-3 text-center text-sm font-medium text-gray-800 dark:text-gray-400 sm:mt-0">
      <li>
        <Link to="/products" className="hover:underline me-4 md:me-6" aria-label="Move to products page">Products</Link>
      </li>
      <li>
        <Link to='/categories' className="hover:underline me-4 md:me-6" aria-label="Move to categories page">Categories</Link>
      </li>
      <li>
        <Link to="/brands" className="hover:underline me-4 md:me-6" aria-label="Move to brands page">Brands</Link>
      </li>
      
    </ul>
  </div>
</footer>

  )
}

export default Footer