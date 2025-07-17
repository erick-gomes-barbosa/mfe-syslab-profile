import { useForm } from "react-hook-form";
interface TextboxInputProps {
  name: string;
  register: ReturnType<typeof useForm>["register"];
  required: boolean;
  type: string;
  readOnly: boolean;
  editLine?: boolean;
}

// Componente de entrada de texto para formulários
export default function TextboxInput({
  name,
  register,
  required,
  type,
  readOnly,
  editLine = false,
}: TextboxInputProps) {
  return (
    <input
      type={type}
      readOnly={readOnly}
      className={`max-xl:w-full md:min-w-[280px] border-b-[3px] border-b-blueMedium text-grayDark font-medium outline-none p-3 ${
        readOnly && "text-grayMedium "
      }${editLine && "border-b-blueMedium-50"} `}
      {...register(name, { required })}
    />
  );
}
