import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    
    <section className="flex items-center h-full p-16">
        <div>
        <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_qpwbiyxf.json"
          ></Player>
        </div>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">{error.statusText || error.message}</span>{error.status}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
          to="/"
          >
            <PrimaryButton>Back to homepage</PrimaryButton>
          </Link>
          
          
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
