import React from 'react'

export default function Icons() {
    const obj = [
      {
        img: "/all/icons/instagram.svg",
        href: "https://www.instagram.com/borzz_az1zbek/",
      },
      {
        img: "/all/icons/youtube.svg",
        href: "https://www.youtube.com/",
      },
      {
        img: "/all/icons/telefon.svg",
        href: "https://web.telegram.org",
      },
      {
        img: "all/icons/wk.svg",
        href: "https://www.watsapp.com",
      }
    ];
  return (
    <div>
        <ul className='flex gap-4'>
            {obj.map(e =>{
                return <li>
                    <a href={e.href}>
                        <img src={e.img} alt="icon" />

                    </a>
                </li>
            })}
        </ul>
    </div>
  )
}
