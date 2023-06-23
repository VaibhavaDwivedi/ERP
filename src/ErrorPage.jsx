import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="bg-red-600 text-6xl flex h-screen items-center justify-center">
      <h1>
        Oops! Sorry, an unexpected error has occurred.Please go to the{" "}
        <Link className="text-blue-700 underline text-4xl" to="/">
          home page
        </Link>
      </h1>
      <p></p>
    </div>
  );
}
