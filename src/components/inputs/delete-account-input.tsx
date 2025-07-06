import IconTrash from "../../assets/images/icon-trash.svg";

// Botão para excluir a conta do usuário
export default function DeleteAccountInput({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center px-4 min-h-9 text-dangerPrimary border-[3px] border-dangerPrimary font-bold text-base rounded-xl"
    >
      <img src={IconTrash} alt="IconLogout" className="w-5 mr-1" /> Excluir
      conta
    </button>
  );
}
