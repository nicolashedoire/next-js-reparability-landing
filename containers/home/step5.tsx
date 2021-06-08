import Link from "next/link";

const Step5 = () => {
  return (
    <section className="py-14 bg-purple-900 mt-12">
      <div className="container relative max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl text-center text-white">
          Rejoignez <strong>le mouvement</strong>
        </h2>
        <div className="text-center">
          <Link href="/register">
            <a>
              <button
                type="button"
                className="flex flex-row justify-center items-center mx-auto text-black bg-white text-md px-3 py-3 font-bold rounded-md outline-none focus:outline-none"
              >
                <img src={`/icons/user-account-black.svg`} alt="" />
                <span className="pl-3">Créer mon compte</span>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Step5;
