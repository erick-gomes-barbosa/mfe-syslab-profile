import IconLogout from "../../assets/images/icon-logout.svg";

// Botão para encerrar a sessão do usuário
export default function CloseSessionInput() {
  return (
    <button
      type="button"
      className="flex items-center px-4 min-h-9 text-white bg-blueMedium font-bold text-base rounded-xl"
    >
      <img src={IconLogout} alt="IconLogout" className="w-4 mr-1" /> Encerrar
      sessão
    </button>
  );
}
