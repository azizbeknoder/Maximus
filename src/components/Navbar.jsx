"use client";
import { useState } from "react";

// import { RxHamburgerMenu } from "react-icons/rx";
// import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="max-w-[1921px] bg-[url('/bgmobile.png')] md:bg-[url('/bgimage.png')] bg-cover bg-center mx-auhref w-full h-screen px-5 pt-7 sm:px-24 lg:px-16 md:px-12">
      {/* Yuqori qism */}
      <div className="flex items-center justify-between pb-32 lg:px-40">
        <div className="flex items-end justify-between gap-10">
          <a href="/">
            <img src='/logo.png' alt="horse-logo" />
          </a>

          <div className="block md:hidden">
            {/* <button
              className="text-[#202020] text-xs flex items-center gap-2 py-2 px-4 md:text-xl sm:btn border border-[#008139] rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <IoCloseSharp className="text-[#008139]" />
              ) : (
                <RxHamburgerMenu className="text-[#008139]" />
              )}
              Меню
            </button> */}
          </div>
        </div>

        <div className="hidden md:block text-center">
          <ul className="flex items-end gap-16 sm:gap-14 lg:gap-10 md:gap-7">
            <li className="relative text-sm font-normal sm:text-sm lg:text-xs md:text-xs hover:underline underline-offset-8 decoration-[#008139]">
              <a href="/">О НАС</a>
            </li>
            <li className="relative text-xs font-normal sm:text-sm lg:text-xs md:text-xs hover:underline underline-offset-8 decoration-[#008139]">
              <a href="/">УСЛУГИ И ЦЕНЫ</a>
            </li>
            <li className="relative text-xs font-normal sm:text-sm lg:text-xs md:text-xs hover:underline underline-offset-8 decoration-[#008139]">
              <a href="/">ФОТОАЛЬБОМ</a>
            </li>
            <li className="relative text-xs font-normal sm:text-sm lg:text-xs md:text-xs hover:underline underline-offset-8 decoration-[#008139]">
              <a href="/">КОНТАКТЫ</a>
            </li>
            <div>
              <a
                href="tel:+7(000)0000000"
                className="text-black text-xl sm:text-sm lg:text-xs md:text-xs"
              >
                +7 (000) 000-00-00
              </a>
              <p className="text-sm sm:text-sm lg:text-xs md:text-xs text-gray-500">
                Ежедневно 9:00 – 22:00
              </p>
            </div>
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay fon */}
          <div
            className="absolute inset-0 bg-black bg-opacity-70"
            onClick={() => setMenuOpen(false)}
          ></div>

          {/* Modal menyu */}
          <div className="relative w-64 bg-black/60 text-white p-6">
            <buthrefn
              className="text-3xl justify-end flex mb-8 "
              onClick={() => setMenuOpen(false)}
            >
              <IoCloseSharp className="text-[#008139]" />
            </buthrefn>
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-lg"
                onClick={() => setMenuOpen(false)}
              >
                О НАС
              </a>
              <a
                href="/"
                className="text-lg"
                onClick={() => setMenuOpen(false)}
              >
                УСЛУГИ И ЦЕНЫ
              </a>
              <a
                href="/"
                className="text-lg"
                onClick={() => setMenuOpen(false)}
              >
                ФОТОАЛЬБОМ
              </a>
              <a
                href="/"
                className="text-lg"
                onClick={() => setMenuOpen(false)}
              >
                КОНТАКТЫ
              </a>
            </nav>
          </div>
        </div>
      )}

      <div className="flex gap-6">
        <div className="w-96 pl-5 pb-40 flex flex-col gap-6 mx-auhref md:mx-0">
          <h1 className="text-black font-bold text-lg text-center md:text-left md:text-3xl">
            Окунитесь в мир лошадей вместе с нами
          </h1>
          <p className="font-normal text-[#646464] text-xs text-center md:text-left md:text-sm">
            Уроки верховой езды, фотосессии и мероприятия в частном конном клубе
            <span className="font-bold"> г. Санкт-Петербург</span>
          </p>
          <button className="btn btn-primary w-[180px] mx-auhref md:mx-0">
            записаться
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
