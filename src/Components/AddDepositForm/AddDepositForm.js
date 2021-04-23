import { connect } from "react-redux";
import TiresFormSection from "./TiresFormSection/TiresFormSection";
import "./AddDepositForm.scss";

const AddDepositForm = () => {
  return (
    <form className="addDepositForm">
      <label>Data dodania</label>
      <input type="date"></input>
      <label>Typ depozytu</label>
      <select>
        <option>Opony</option>
        <option>Koła</option>
        <option>Opony i koła</option>
      </select>
      <label>Nazwa</label>
      <input type="text"></input>
      <label>Liczba</label>
      <input type="text"></input>
      <label>Sezon</label>
      <select>
        <option>Letnie</option>
        <option>Zimowe</option>
      </select>
      <label>ID magazynu</label>
      <input type="text"></input>
      <TiresFormSection />
      <label>ID klienta</label>
      <input type="text"></input>
      <label>Uwagi</label>
      <textarea></textarea>
    </form>
  );
};

export default AddDepositForm;
