import IconAttention from "../../assets/images/icon-attention.svg";

interface CancelModalProps {
  title: string;
  text: string;
  textCancelButton: string; // Texto do botão de cancelamento
  isOpen: boolean;
  onClickClose: () => void; // Função para fechar o modal
  onClickAction: () => void; // Função para ação de cancelamento
}

export default function CancelModal({
  title,
  text,
  textCancelButton,
  isOpen,
  onClickClose,
  onClickAction,
}: CancelModalProps) {
  if (isOpen) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex  flex-col items-center p-6 bg-white shadow-xl shadow-[#00000040] rounded-3xl">
          <div className="flex justify-center w-full">
            <img src={IconAttention} alt="icon-attention" />
            <h3 className="font-semibold ml-2 text-xl">{title}</h3>
          </div>
          <p className=" text-center text-base my-6 w-10/12">{text}</p>
          <div className="flex justify-around w-full ">
            <button
              type="button"
              className="border-[3px] border-dangerPrimary w-36 rounded-full font-extrabold text-dangerPrimary hover:bg-dangerPrimary hover:text-white delay-200 duration-200"
              onClick={onClickAction}
            >
              {textCancelButton}
            </button>
            <button
              className="bg-dangerPrimary w-36 py-2 rounded-full font-extrabold text-white"
              onClick={onClickClose}
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
