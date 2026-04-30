import React from 'react'

type Box = {
    icon: React.ReactNode,
    title: string,
    text:string,
    link?: string
}

type Props = {
    className?:string,
    data: Box[]
}

export default function FourBoxLayout({className, data}: Props) {
  return (
    <section className={`max-w-5xl grid lg:grid-cols-3 gap-8 lg:gap-4 lg:mx-auto ${className}`}>
        {data.map((e, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-8 bg-white rounded-xl dark:bg-darkmode-white ${
              index === 0 || index === 3 ? "lg:col-span-2" : "col-span-1"
            }`}
          >
            <div className="flex flex-col pt-4">
              {e.icon}
              <h2 className="pt-8 dark:!text-custom-blue">{e.title}</h2>
              <p className="lg:text-sm dark:!text-custom-blue">{e.text}</p>
            </div>

            {/* <button className="self-start rounded-xl text-custom-red bg-custom-red-op px-4 py-2 mt-8 text-sm">
                Mehr Infos
              </button> */}
          </div>
        ))}
      </section>
  )
}
