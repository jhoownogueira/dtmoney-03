import * as Dialog from "@radix-ui/react-dialog";
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";
import logoImg from "../../assets/logo.svg";
import { NewTransactionsModal } from "../NewTransactionsModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova transação</NewTransactionsButton>
          </Dialog.Trigger>
          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
