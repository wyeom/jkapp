import clientPromise from "../../lib/mongodb";
import { use } from "react"

export default function Page() {
    const movies = use(getData())
    return (
        <div>
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Top 20 Movies of All Time
                </h1>
            </div>
            <p>
                <small>(According to Metacritic)</small>
            </p>
            <ul className="mt-6 grid grid-cols-3 ">
                {movies.map((movie : any) => (
                    <li className="border rounded-xl mx-2 my-2 px-4 py-2 bg-gray-50"
                        key={movie._id}>
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <h3>metacritic : {movie.metacritic}</h3>
                        <p className="mt-1 text-md border-t border-gray-300 pt-3 text-gray-400">{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getData() {
    const client = await clientPromise;
    const db = client.db("docs");

    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray();
    return movies;
}
