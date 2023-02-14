import { useEffect, useState } from "react";
export default function CountDownTimer() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Feb 28,2023 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        //stop time
        clearInterval(interval);
      } else {
        //update timer
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  return (
    <section className="flex justify-center gap-2">
      <div className="flex font-semibold flex-col items-center text-cyan-500 shadow-xl bg-black  w-16 h-12 rounded-lg">
        <p>
          {days}
        </p>
        <p className="text-xs">DAYS</p>
      </div>
      <div className="flex font-semibold flex-col items-center text-cyan-500 shadow-xl bg-black  w-16 h-12 rounded-lg">
        <p>
          {hours}
        </p>
        <p className="text-xs">HOURS</p>
      </div>
      <div className="flex font-semibold flex-col items-center text-cyan-500 shadow-xl bg-black  w-16 h-12 rounded-lg">
        <p>
          {minutes}
        </p>
        <p className="text-xs">MINUTES</p>
      </div>
      <div className="flex font-semibold flex-col items-center text-cyan-500 shadow-xl bg-black  w-16 h-12 rounded-lg">
        <p>
          {seconds}
        </p>
        <p className="text-xs">SECONDS</p>
      </div>
    </section>
  );
}
