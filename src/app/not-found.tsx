import Link from "next/link";
export default async function Page() {
  return (
    <section className="pb-28 z-50 bg-primary">
      <div className="bg-white rounded-b-[100px] py-28">
        <div className="max-w-[1200px] mx-auto flex flex-col justify-center  items-center" >
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <p className="mt-4 text-2xl text-gray-800">Oops! Page not found.</p>
          <p className="mt-2 text-gray-600">
            The page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="mt-6 px-4 py-2 bg-primary text-white rounded  transition"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
