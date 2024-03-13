import { UseFormRegister, RegisterOptions } from 'react-hook-form'
import { InputField } from './styles'

interface InputProps {
  type: string
  placeholder: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

export function Input({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
}: InputProps) {
  return (
    <div>
      <InputField
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p>{error}</p>}
    </div>
  )
}
