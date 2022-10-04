import { useEffect } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {

  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
    }
  }

  return {
    tg,
    onClose,
    user: tg.initDataUnsafe?.user?.username,
    onToggleButton,
  };
};
