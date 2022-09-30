const Button = ({children, type, id, disabled, width}) => {
  return (
    <button id={id} type={type} disabled={disabled} className={`flex flex-row justify-center items-center p-4 gap-3 bg-gradient-to-r from-primaryMid to-primaryLight rounded-xl text-white font-bold text-base text-right ${width}`}>🎉 {children}</button>
  )
}

export default Button