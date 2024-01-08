import Image from "next/image"

type ButtonProps = {
  type:'button'|'submit',
  title: string,
  icone?: string,
  variant: string
}
const Button = ({type , title , icone, variant}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flex justify-center items-center cursor-pointer gap-3 rounded-full border ${variant}`}
    >
      {icone && <Image src={icone} width={24} height={24} alt={title} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button
