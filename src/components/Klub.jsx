import React from "react";
import { Roboto, Philosopher } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const philosopher = Philosopher({ subsets: ["latin"], weight: ["400", "700"] });

export default function Klub() {
  const obj = [
    { count: "1100+", title: "Довольный посетителе за последний год" },
    { count: "50+", title: "Проведенных мероприяти за 6 месяцев" },
    {
      count: "20+",
      title: "Выпущенных профессиональных спортсменов за 1 год",
    },
    {
      count: "15+",
      title: "Регулярный занятий в неделю с профессиональными наставниками",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-[56px] p-3 2xl:px-[145px]">
      <h1 className={`${philosopher.className} text-4xl pb-10`}>
        О нашем клубе
      </h1>
      <div className="flex flex-col sm:flex-row w-full">
        {/* Rasm faqat sm va undan katta ekranlarda ko'rinadi */}
        <img
          src="/tablet/klub/klubHorse.png"
          alt="Horse"
          className="hidden md:block md:w-1/2 object-cover"
        />
        <ul className="p-2 text-center grid grid-cols-1 sm:grid-cols-2 sm:gap-5 ">
          {obj.map((e, index) => {
            return (
              <li key={index} className="flex flex-col items-center mb-[35px]">
                <p className="text-3xl text-green font-bold mb-3">{e.count}</p>
                <p className="font-bold">{e.title}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <p className="mt-5 text-sm sm:text-base leading-relaxed text-gray">
        Занятия проводятся индивидуально и в группах, стоимость также будет
        зависеть от ваших навыков и умений. Более выгодные условия предусмотрены
        для регулярных занятий при покупке абонементов. Для тех, кто хочет
        отточить своё мастерство, разработаны программы по специализации
        (конкур, выездка и другие), участие в соревнованиях и чемпионатах.
        Для самых маленьких любителей лошадей действуют пони-клубы, где ребята
        учатся ухаживать за животными и ездить на милых и добрых пони.
      </p>
    </div>
  );
}
