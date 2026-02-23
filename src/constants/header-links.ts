import { PATHS } from "#constants/paths";
import { bottomSheetModal } from "#shared/bottom-sheet-modal";

export const LINKS = [
  { href: PATHS.availableKit, isAuth: false, title: "Все наборы" },
  { href: PATHS.faq, isAuth: false, title: "Часто задаваемые вопросы" },
  { href: PATHS.paymentInfo, isAuth: false, title: "Доставка и оплата" },
  // { href: "", title: "Контакты" },
  {
    isAuth: true,
    onClick: () => {
      bottomSheetModal.open("exit-modal", {
        title: "Вы уверены что хотите выйти?",
        type: "EXIT_MENU",
      });
    },
    title: "Выйти",
  },
];
