import React from "react";
import img from "@/images/Planning.jpeg";
import Image from "next/image";
import Link from "next/link";
function Discription() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
            <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      <header className="text-center">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          Welcome to the{" "} <br />
          <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
            Gastric Lavage Simulator Project
          </span>
        </h1>
        <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-600">
          {" "}
          Experience an Innovative and Educational Medical Simulation
        </p>
      </header>
      <section id="description" className="mt-8">
      <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl ">Project Discription</h2>

        <p className="text-xl font-normal text-gray-500 lg:text-md dark:text-gray-600">
          The Gastric Lavage Simulator is designed to simulate the medical
          procedure of gastric lavage, providing a hands-on and visual learning
          experience for medical students and professionals.
        </p>
        <Image
          src={img}
          alt="Gastric Lavage Simulator Image"
          className="block mx-auto my-4 rounded-md"
          width={800}
          height={600}
        />
      </section>
      <footer className="text-center text-xl mt-8">
        <p className="text-gray-700">
          Go to{" "}
          <Link href="/simulator" className="text-blue-500 font-bold">
            Simulation Page
          </Link>
        </p>
      </footer>
    </div>
  );
}

export default Discription;
