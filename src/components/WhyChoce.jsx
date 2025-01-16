import React from "react";
import { Roboto, Philosopher } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const philosopher = Philosopher({ subsets: ["latin"], weight: ["400", "700"] });

export default function WhyChoce() {
  const obj = [
    {
      img: "/all/whychoce/karta.svg",
      title: "Удобное расположение",
      description:
        "Мы находимся недалеко от автостанции «Восточный» чтобы вам было удобно добираться",
    },
    {
      img: "/all/whychoce/stol.svg",
      title: "Обеденная зона ",
      description:
        "Имеется столовая, чтобы Вы могли  перекусить и немного отдохнуть. Бесплатно чай, кофе, печенки.",
    },
    {
      img: "/all/whychoce/soat.png",
      title: "Профессиональные тренера",
      description:
        "Наши преподаватели имеют награды в конном спорте, и отличные отзывы среди наших учеников",
    },
    {
      img: "/all/whychoce/moshina.png",
      title: "Бесплатная парковка",
      description:
        "У нас имеется просторная парковка, чтобы вы могли без проблем припарковать свой автомобиль",
    },
  ];
  return (
    <div className="text-center">
      <h1 className={`${philosopher.className} text-xl mt-[70px] font-bold sm:text-2xl md:text-3xl xl:text-4xl`}>
        Почему нас выбирают
      </h1>
      <p className="mt-3 mb-[35px]">Подзаголовок блока</p>
      <ul className=" flex-col gap-y-[45px] items-center grid sm:grid-cols-2 md:grid-cols-4 ">
        {obj.map((e, idx) => {
          return (
            <li key={idx} className="flex flex-col items-center text-center ">
              <div className="max-w-[300px] sm:max-w-[218px] md:max-w-[181px]">
                <img src={e.img} alt="" className="mb-5 mx-auto" />
                <p className="mb-3 text-xl font-bold">{e.title}</p>
                <p className="text-gray">{e.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
