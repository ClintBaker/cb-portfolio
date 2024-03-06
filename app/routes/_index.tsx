import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import About from "~/components/about";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => [
  { title: "Clint Baker | Full Stack Javascript Developer" },
];

export default function Index() {
  return (
    <main className="bg-gray-100">
      <Hero />
      <About />
    </main>
  );
}
