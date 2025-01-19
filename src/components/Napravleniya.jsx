import React from 'react'
import { Roboto, Philosopher } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });
const philosopher = Philosopher({ subsets: ["latin"], weight: ["400", "700"] });

export default function Napravleniya() {
    const obj = [
      {
        img: "/all/napravleniya/img1.png",
        title: "Уроки верховой езды",
        description:
          "Уроки профессиональной верховой езды для любителей и начинающих",
      },
      {
        img: "/all/napravleniya/img2.png",
        title: "Прогулки верхом с тренером",
        description:
          "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
      },
      {
        img: "/all/napravleniya/img3.png",
        title: "Фотосессии",
        description:
          "Уроки профессиональной верховой езды для любителей и начинающих",
      },
      {
        img: "/all/napravleniya/img4.png",
        title: "Прогулки верхом с тренером",
        description:
          "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
      },
      {
        img: "/all/napravleniya/img5.png",
        title: "Прогулки верхом с тренером",
        description:
          "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
      },
      {
        img: "/all/napravleniya/img6.png",
        title: "Фотосессии",
        description: "Уроки профессиональной верховой езды для любителей и начинающих",
      },
    ];
  return (
    <div className=" bg-[url('/all/napravleniya/osmon.png')] sm:bg-[url('/all/napravleniya/osmonSM.png')] md:bg-[url('/all/napravleniya/osmonMD.png')] xl:bg-[url('/all/napravleniya/osmonXL.png')] bg-no-repeat bg-cover 2xl:px-40">
      <h1
        className={`${philosopher.className} text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center mt-[100px] mb-3`}
      >
        Направления клуба
      </h1>
      <p className="text-center text-gray mb-[45px]">Подзаголовок блока</p>
      <ul className=" flex-col items-center  gap-10 grid sm:grid-cols-2 md:grid-cols-3  ">
        {obj.map((e, idx) => {
          return (
            <li key={idx} className="flex flex-col  items-center text-center ">
              <div className="max-w-[300px] h-[370px] bg-white">
                <img
                  src={e.img}
                  alt=""
                  className="mb-[15px] ml-4 relative -top-3"
                />
                <p className="mb-[21px] text-xl">{e.title}</p>
                {/* <img src="/all/napravleniya/line.svg" alt="" /> */}
                <p className="text-gray ">{e.description}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <picture className="flex justify-between items-center">
        <source
          media="(min-width: 1280px)"
          srcSet="/all/napravleniya/otQizXL.png"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/all/napravleniya/otQizMD.png"
        />

        <source
          media="(min-width: 470px)"
          srcSet="/all/napravleniya/otQizSM.png"
        />
        <img
          src="/all/napravleniya/otQiz.png"
          className=" bg-cover bg-no-repeat w-full relative -top-20 sm:-top-0 md:-top-0 xl:-top-0"
          alt=""
        />
      </picture>
    </div>
  );
}
