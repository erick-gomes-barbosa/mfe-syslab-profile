// Botão para cancelar uma ação
export default function CancelInput({ onClick }: { onClick: () => void }) {
  return (
    <input
      onClick={onClick}
      type="button"
      value={"Cancelar"}
      className="w-32 h-9 text-dangerPrimary border-2 border-dangerPrimary font-bold text-base rounded-xl cursor-pointer"
    />
  );
}
