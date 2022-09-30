const FormInput = ({ label, type, onChange, name, value, placeholder }) => {
  return (
    <div className="relative">
      {label && (
        <label className="text-[#3B3E44] text-base pointer-events-none  transition-all duration-300">
          {label}
        </label>
      )}
      <input 
        type={type}
        onChange={onChange}
        name={name}
        value={value} 
        placeholder={placeholder} 
        className="bg-none bg-gray-200 text-gray-800 text-xl py-2 px-3 pt-2 w-full my-3 focus:outline-none rounded-lg"
      />
      
    </div>
  )
}

export default FormInput