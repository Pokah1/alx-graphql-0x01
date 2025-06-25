
import { useQuery } from "@apollo/client";
import { GET_EPISODES } from "@/graphql/queries";

type Episode = {
  id: string;
  name: string;
  air_date: string;
  episode: string;
};

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading episodes...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error: {error.message}</p>;

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Rick and Morty Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.episodes.results.map((episode: Episode) => (
          <div key={episode.id} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-indigo-600">{episode.name}</h2>
            <p className="text-gray-700">{episode.episode}</p>
            <p className="text-sm text-gray-500 mt-1">Air date: {episode.air_date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Home
