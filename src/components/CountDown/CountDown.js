import CountDownTimer from "./CountDownTimer";

export default function CountDown() {
  return (
    <section className="bg-gradient-to-r from-black to-cyan-500 h-[100vh]">
      {/* container */}
      <section className="container mx-auto">
        <h1 className="py-2 text-center text-3xl md:text-5xl font-semibold text-white text-5xl">
          Upcoming Flash Sale:
        </h1>
        <section className="md:flex  md:justify-between my-5 py-5">
          <div className="relative hidden md:block">
            <div className="absolute bottom-2 left-1">
              <CountDownTimer />
            </div>
            <img
              src="https://demo.bestprestashoptheme.com/digimart1/modules/novpagemanage/img/14e2b2cd718c66e7127fa5f4b6e5612c.jpg"
              className=""
              alt=""
            />
          </div>
          <div className="relative">
            <div className="absolute top-2 left-2">
              <CountDownTimer />
            </div>
            <div>
              <img
                src="https://images.vinovathemes.com/prestashop_digimart/banner-02-02.jpg"
                className=""
                alt=""
              />
            </div>
            <div className="flex justify-between">
              <div>
                <img
                  src="https://images.vinovathemes.com/prestashop_digimart/banner-02-04.jpg"
                  className=""
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.vinovathemes.com/prestashop_digimart/banner-02-05.jpg"
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute bottom-2 left-1">
              <CountDownTimer />
            </div>
            <img
              src="https://demo.bestprestashoptheme.com/digimart1/modules/novpagemanage/img/37e863bc1319a1a1586476de1be5e24d.jpg"
              className=""
              alt=""
            />
          </div>
        </section>
      </section>
    </section>
  );
}

CountDown.defaultProps = {
  days: 10,
  hours: 10,
  minutes: 10,
  seconds: 10,
};
