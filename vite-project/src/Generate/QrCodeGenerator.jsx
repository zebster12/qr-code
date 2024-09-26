import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import "./qrCodeGenerator.css";
import { Generate_DATA } from "../GenerateDATA";
function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(Generate_DATA) || "[]");

    localStorage.setItem(Generate_DATA, JSON.stringify([...prevData, value]));
    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  return (
    <div className="container">
      <h1 className="title">Генератор QR</h1>
      <div className="qr__wrapper">
        <div className="qr__top">
          {result !== "" && <QRCodeSVG size={200} value={result} />}
        </div>

        <input
          className="input"
          type="text"
          placeholder="Введите текст"
          value={value}
          onChange={onChangeHandler}
        />

        <button className="btn" type="button" onClick={onClickHandler}>
          Сгенерировать QR
        </button>
      </div>
    </div>
  );
}

export default QrCodeGenerator;
