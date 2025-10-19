import { PATHS } from "#constants/paths";
import { bottomSheetModal } from "#shared/bottom-sheet-modal";

export const LINKS = [
  { href: PATHS.availableKit, title: "Все наборы" },
  { href: PATHS.faq, title: "Часто задаваемые вопросы" },
  // { href: "", title: "Контакты" },
  {
    onClick: () => {
      bottomSheetModal.open("exit-modal", {
        title: "Вы уверены что хотите выйти?",
        type: "EXIT_MENU",
      });
    },
    title: "Выйти",
  },
];
