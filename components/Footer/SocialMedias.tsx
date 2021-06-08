import config from "../../config";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <section className="w-full text-center md=text-left mb-5 sw-8/12">
      <h4 className="mb-5 text-sm text-gray-dark text-bold">Suivez-nous</h4>
      <div className="md:flex md:flex-wrap">
        <a href="#" rel="noreferrer" target="_blank" className="mr-2">
          <Image
            src={`/images/footer-youtube.svg`}
            width={30}
            height={30}
            alt={`${config.appName} sur Youtube`}
            title={`${config.appName} sur Youtube`}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/nicolashedoire"
          rel="noreferrer"
          target="_blank"
          className="mr-2"
        >
          <Image
            src={`/images/footer-linkedin.svg`}
            width={30}
            height={30}
            alt={`${config.appName} sur LinkedIn`}
            title={`${config.appName} sur LinkedIn`}
          />
        </a>
        <a href="#" rel="noreferrer" target="_blank" className="mr-2">
          <Image
            src={`/images/footer-facebook.svg`}
            width={30}
            height={30}
            alt={`${config.appName} sur Facebook`}
            title={`${config.appName} sur Facebook`}
          />
        </a>
        <a
          href="https://twitter.com/hnhack"
          rel="noreferrer"
          target="_blank"
          className="mr-2"
        >
          <Image
            src={`/images/footer-twitter.svg`}
            width={30}
            height={30}
            alt={`${config.appName} sur Twitter`}
            title={`${config.appName} sur Twitter`}
          />
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
