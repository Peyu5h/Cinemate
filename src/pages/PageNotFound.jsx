import { useEffect } from "react"
import { Link } from "react-router-dom"


const PageNotFound = () => {

useEffect(() => {
  document.title = `Page Not Found`;
});

  return (
    <section className="flex justify-center  flex-col px-2 h-[80vh]">
      <div className="flex items-center flex-col">
        <p className="text-zinc-600 dark:text-slate-200 text-9xl font-sans font-bold">404</p>
        <p className="text-zinc-600 dark:text-slate-200 text-3xl my-2 font-sans font-semibold">Page Not Found!</p>
        <Link to="/">
          <button className="flex my-8 items-center w-60 h-12 rounded-lg font-sans font-medium text-lg text-slate-100 dark:text-slate-300 justify-center bg-blue-500"> Go back to Home</button>
        </Link>
      </div>
      
    </section>
  )
}

export default PageNotFound
