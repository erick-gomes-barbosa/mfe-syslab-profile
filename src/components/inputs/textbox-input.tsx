import { useForm } from "react-hook-form";
interface TextboxInputProps {
  name: string;
  register: ReturnType<typeof useForm>["register"];
  required: boolean;
  type: string;
  readOnly: boolean;
}

// Componente de entrada de texto para formulários
export default function TextboxInput({
  name,
  register,
  required,
  type,
  readOnly,
}: TextboxInputProps) {
  return (
    <input
      type={type}
      readOnly={readOnly}
      className={`max-xl:w-full 2xl:min-w-[280px] border-b-[3px] border-b-blueMedium text-grayDark font-medium outline-none p-3 ${
        readOnly && "text-grayMedium"
      }`}
      {...register(name, { required })}
    />
  );
}
