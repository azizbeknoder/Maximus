import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center text-start bg-[#0B0B0B] text-[#EAEAEA] rounded p-10">
        <div className="footer text-neutral-content items-center p-4">
          <div>
            <img
              src="/footer-logo.png"
              className="mx-auto md:mx-0 my-8 md:block hidden"
              alt=""
            />
          </div>

          <div className="grid grid-col items-center gap-4 md:grid-flow-col">
            <nav className="grid grid-col gap-4 md:grid-flow-col">
              <a className="link link-hover hover:underline underline-offset-8 decoration-white ">
                О НАС
              </a>
              <a className="link link-hover hover:underline underline-offset-8 decoration-white ">
                УСЛУГИ И ЦЕНЫ
              </a>
              <a className="link link-hover hover:underline underline-offset-8 decoration-white ">
                ФОТОАЛЬБОМ
              </a>
              <a className="link link-hover hover:underline underline-offset-8 decoration-white ">
                КОНТАКТЫ
              </a>
            </nav>
            <nav>
              <div className="grid grid-col gap-4">
                <button className="border btn btn-ghost px-8 py-4 border-yellow-500 rounded-md">
                  Заказать звонок
                </button>

                <img
                  src="/footer-logo.png"
                  className="mx-auto my-8 md:hidden block"
                  alt=""
                />
              </div>
            </nav>
          </div>
        </div>

        <div className="text-left">
          <p>Соглашение на обработку персональных данных</p>
          <p>Политика конфенденциальности</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
