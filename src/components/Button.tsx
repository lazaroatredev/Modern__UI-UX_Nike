import { ButtonProps } from "../Types/types"

const Button = ({ label , iconUrl , className }: ButtonProps) => {
  return (
    <button
        className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${className ? className : 'bg-coral-red text-white' }  rounded-full `}
    >
      {label}
    {iconUrl && 
      <img 
          src={iconUrl} 
          alt="Hero right Icon" 
          className="ml-2 rounded-full w-5 h-5"
      />
    }
    </button>
  )
}

export default Button