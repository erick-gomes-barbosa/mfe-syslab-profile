import { useForm } from "react-hook-form";
import LabelForm from "./components/labels/label-form";
import TextboxInput from "./components/inputs/textbox-input";
import SaveInput from "./components/inputs/save-input";
import CancelInput from "./components/inputs/cancel-input";
import IconEdit from "./assets/images/icon-edit.svg";
import { useState } from "react";
import CloseSessionInput from "./components/inputs/close-session-input";
import DeleteAccountInput from "./components/inputs/delete-account-input";
import CancelModal from "./components/modals/cancel-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserType } from "./types/user-type";
import { UserSchema } from "./schemas/user-schema";

export default function Root() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [showDeleteAccountModal, setShowDeleteAccountModal] =
    useState<boolean>(false);
  const [showCancelEditModal, setShowCancelEditModal] =
    useState<boolean>(false);
  const { register, reset } = useForm<UserType>({
    defaultValues: {
      registery: 1232025120,
      name: "Antonio Manso Pacífico de Oliveira Sossegado",
      email: "pacifico.sossegado@syslab.com",
      password: "123@123",
      type: "Aluno",
      entry_time: "08:00",
      departure_time: "09:00",
    },
    resolver: zodResolver(UserSchema),
  });

  return (
    <>
      <form className="relative m-auto mt-28 w-11/12 2xl:max-h-[750px] max-w-[1024px] min-[290px]: h-9/12 max-h-[900px] rounded-3xl shadow-lg shadow-[#00000040] 2xl:py-8 2xl:px-16 p-6">
        <div className="flex w-full pb-6 last:justify-end">
          <div className="flex-1 text-center">
            <h1 className=" text-grayDark font-bold text-2xl select-none">
              Meus Dados
            </h1>
          </div>
          {isEdit ? (
            ""
          ) : (
            <button onClick={() => setIsEdit((prevState) => !prevState)}>
              <img
                src={IconEdit}
                alt="ìcone de editar"
                className="w-6 cursor-pointer"
              />
            </button>
          )}
        </div>
        <div className="flex flex-col 2xl:content-between flex-wrap w-full 2xl:max-h-[400px] m-auto my-8 gap-4">
          <div className="flex flex-col">
            <LabelForm title="Nome Completo:" />
            <TextboxInput
              name="name"
              required={true}
              readOnly={isEdit ? false : true}
              type="text"
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <LabelForm title="Matrícula:" />
            <TextboxInput
              name="registery"
              required={true}
              type="text"
              readOnly={true}
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <LabelForm title="E-mail:" />
            <TextboxInput
              name="email"
              required={true}
              readOnly={true}
              type="text"
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <LabelForm title="Senha:" />
            <TextboxInput
              name="password"
              readOnly={isEdit ? false : true}
              required={true}
              type="password"
              register={register}
            />
          </div>

          <div className="flex flex-col">
            <LabelForm title="Ocupação:" />
            <TextboxInput
              name="type"
              required={true}
              readOnly={true}
              type="text"
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <LabelForm title="Horário de Entrada:" />
            <TextboxInput
              name="entry_time"
              required={true}
              type="text"
              readOnly={isEdit ? false : true}
              register={register}
            />
          </div>
          <div className="flex flex-col">
            <LabelForm title="Horário de Saida:" />
            <TextboxInput
              name="departure_time"
              required={true}
              readOnly={isEdit ? false : true}
              type="text"
              register={register}
            />
          </div>
        </div>
        {isEdit ? (
          <div className="flex w-full justify-end gap-2">
            <CancelInput onClick={() => setShowCancelEditModal(true)} />
            <SaveInput />
          </div>
        ) : (
          <div className="flex w-full justify-end gap-2">
            <DeleteAccountInput
              onClick={() => setShowDeleteAccountModal(true)}
            />
            <CloseSessionInput />
          </div>
        )}
        <CancelModal
          isOpen={showDeleteAccountModal}
          text="Atenção! Caso prossiga com esta ação você não poderá mais acessar esta conta."
          textCancelButton="Excluir conta"
          title="Tem certeza que deseja excluir a conta?"
          onClickClose={() => setShowDeleteAccountModal(false)}
          onClickAction={() => {
            // console.log("Conta excluída com sucesso!");
            setShowDeleteAccountModal(false);
          }}
        />
        <CancelModal
          isOpen={showCancelEditModal}
          text="Você perderá todas as alterações não salvas."
          textCancelButton="Cancelar"
          title="Tem certeza que deseja cancelar?"
          onClickClose={() => setShowCancelEditModal(false)}
          onClickAction={() => {
            // console.log("Edição cancelada com sucesso!");
            reset();
            setIsEdit(false);
            setShowCancelEditModal(false);
          }}
        />
      </form>
    </>
  );
}
