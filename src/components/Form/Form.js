import React, { useEffect, useState } from "react";
import { useTelegram } from "../../hooks/useTelegram";
import "./Form.css";

export const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [face, setFace] = useState("physical");

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeFace = (e) => {
    setFace(e.target.value);
  };

  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
        text: 'Отправить данные'
    })
  }, [tg.MainButton])

  useEffect(() => {
    if (!street || !country) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.show()
    }
  }, [country, street, tg.MainButton])

  return (
    <form className="form">
      <h3>Введите ваши данные</h3>
      <input
        className="input"
        placeholder="country"
        type="text"
        onChange={onChangeCountry}
        value={country}
      />
      <input
        className="input"
        placeholder="street"
        type="text"
        onChange={onChangeStreet}
        value={street}
      />
      <select className="select" value={face} onChange={onChangeFace}>
        <option value={"physical"}>Физ. лиц</option>
        <option value={"legal"}>Юр. лицо</option>
      </select>
    </form>
  );
};
