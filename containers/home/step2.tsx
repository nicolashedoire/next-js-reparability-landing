import Link from "next/link";
import Card from "../../components/Card";

const Step2 = () => {
  return (
    <section className="bg-gray-ultraLight container relative max-w-5xl mx-auto">
      <div className="relative flex justify-center">
        <div className="w-11/12 mx-auto mb-12 bg-white rounded-lg shadow-2xl sm:w-10/12 lg:w-full">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-3">
            <Card
              title="Accéder à l'information"
              subtitle="Nos mettons à disposition les informations sur chaque constructeur"
              imageUrl={`/images/index/picto-cadenas.svg`}
              imageWidth={36}
              imageHeight={40}
              imageAlt="Accès à l'information"
            />
            <Card
              title="Accéder à l'information"
              subtitle="Nos mettons à disposition la barèmes en toute transparence"
              imageUrl={`/images/index/picto-cadenas.svg`}
              imageWidth={36}
              imageHeight={40}
              imageAlt="Accès à l'information"
            />
            <Card
              title="Dépenser moins cher"
              subtitle="Achetez des objets durables dans le temps"
              imageUrl={`/images/index/picto-chart.svg`}
              imageWidth={36}
              imageHeight={40}
              imageAlt="Gérer moins cher"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step2;
