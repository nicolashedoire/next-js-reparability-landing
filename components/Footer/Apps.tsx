import Image from "next/image";

const MobileApps = () => {
  return (
    <section className="w-full mb-5 mt-6 text-center md:text-left">
      <a href="/coming-soon" className="block mb-2">
        <Image
          src={`/images/app-store.svg`}
          width={135}
          height={43}
          alt="App Apple Store"
        />
      </a>
      <a href="/coming-soon" className="block mb-2">
        <Image
          src={`/images/google-play.svg`}
          width={135}
          height={43}
          alt="App Google Play"
        />
      </a>
    </section>
  );
};

export default MobileApps;
