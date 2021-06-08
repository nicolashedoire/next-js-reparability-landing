import Link from "next/link";
import Card from "../../components/Card";

const Step3 = () => {
  return (
    <section className="bg-gray-ultraLight container relative max-w-5xl mx-auto">
      <h2 className="mb-8 text-4xl text-center text-blue-900">
        <strong>La transparence</strong> sur toute la chaine
      </h2>
      <div className="grid grid-cols-1 gap-4 mb-10 gap-x-6 sm:grid-cols-2 justify-center">
        <Card
          title="Indice de réparation"
          subtitle="Le matériel est noté en fonction des certains critères afin de vous conseilller la meilleure solution"
          imageUrl={`/images/index/indice.png`}
          imageWidth={90}
          imageHeight={90}
          imageAlt="Indice de confiance"
          lg="center"
        />
        <Card
          title="Avis réparateurs"
          subtitle="Quand votre matériel est en panne, il passe dans les mains de réparateurs avisés"
          imageUrl={`/images/index/indice.png`}
          imageWidth={90}
          imageHeight={90}
          imageAlt="Donner la difficulté des réparations"
          lg="center"
        />
        <Card
          title="Avis consommateurs"
          subtitle="Parce que votre avis compte énormément sur toute la chaine"
          imageUrl={`/images/index/indice.png`}
          imageWidth={90}
          imageHeight={90}
          imageAlt="Valoriser un objet avec votre avis"
          lg="center"
        />
        <Card
          title="Évolution"
          subtitle="Pour rester connecté avec le marché"
          imageUrl={`/images/index/indice.png`}
          imageWidth={90}
          imageHeight={90}
          imageAlt="Évolution de la qualité"
          lg="center"
        />
      </div>
      <div className="mb-5 flex justify-center text-center">
        <Link href="/evaluate/">
          <button
            type="button"
            className="w-5/6 sm:w-auto bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-3 px-6 border border-purple-500 hover:border-transparent rounded"
          >
            Je recherche des informations
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Step3;
