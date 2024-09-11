import { Link } from "react-router-dom";

export default function PageNotfound() {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black text-cyan-50 w-screen h-screen">
        <p className="text-4xl font-bold mb-10">404 - Page Not Found</p>

        <Link
          className="bg-slate-600 text-white rounded-full py-3 px-6 hover:bg-cyan-50 hover:text-slate-600 hover:font-bold transition-all duration-300 ease-in-out"
          to="/"
        >
          Go back home
        </Link>
      </div>
    </>
  );
}
