

type Box = {
    icon: React.ReactNode,
    title: string,
    text:string
    link?: string
}

type Props = {
    className?:string,
    boxes: Box[]
}

export default function SixBoxLayout({className, boxes}: Props) {
  return (
     <div className={`lg:pb-32 grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto ${className}`}>
          {boxes.map((e, index) => (
            <div
              key={index}
              className="lg:aspect-square flex flex-col justify-between p-8 bg-white rounded-xl dark"
            >
              <div className="flex flex-col pt-4">
                {e.icon}
                <h2 className="pt-8">{e.title}</h2>
                <p className="lg:text-sm">{e.text}</p>
              </div>

              {/* <button className="self-start rounded-xl text-custom-red bg-custom-red-op px-4 py-2 mt-8 text-sm">
                Mehr Infos
              </button> */}
            </div>
          ))}
        </div>
  )
}
