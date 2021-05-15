import { connect } from "react-redux";
import inputChangeAction from "./../../actions/index";
import WheelsFormSection from "./WheelsFormSection/WheelsFormSection";
import { getTodayDate } from "./../../formatFunctions/formatFunctions";

import "./AddDepositForm.scss";

const AddDepositForm = (props) => {
  return (
    <form className="addDepositForm">
      <label>Data dodania</label>
      <input
        onChange={(e) => {
          props.handleInputChange("DEPOSIT_DATE_CHANGE", e.target.value);
        }}
        type="date"
        defaultValue={getTodayDate()}
        min={getTodayDate()}
      ></input>
      <label>Typ depozytu</label>
      <select
        onChange={(e) => {
          props.handleInputChange("DEPOSIT_TYPE_CHANGE", e.target.value);
        }}
      >
        <option>Opony</option>
        <option>Koła</option>
      </select>
      <label>Nazwa</label>
      <input
        onChange={(e) => {
          props.handleInputChange("DEPOSIT_NAME_CHANGE", e.target.value);
        }}
        type="text"
      ></input>
      <label>Liczba</label>
      <input
        onChange={(e) => {
          props.handleInputChange("TYRES_AMMOUNT_CHANGE", e.target.value);
        }}
        type="number"
        min={1}
      ></input>
      <label>Sezon</label>
      <select
        onChange={(e) => {
          props.handleInputChange("TYRES_SEASON_CHANGE", e.target.value);
        }}
      >
        <option>Letnie</option>
        <option>Zimowe</option>
      </select>
      <label>ID magazynu</label>
      <input
        onChange={(e) => {
          props.handleInputChange("STORE_ID_CHANGE", e.target.value);
        }}
        type="text"
      ></input>
      {props.addDepositFormData.depositType === "Koła" && <WheelsFormSection />}
      <label>ID klienta</label>
      <input
        onChange={(e) => {
          props.handleInputChange("CUSTOMER_ID_CHANGE", e.target.value);
        }}
        type="text"
      ></input>
      <label>Uwagi</label>
      <textarea
        onChange={(e) => {
          props.handleInputChange("COMMENTS_FIELD_CHANGE", e.target.value);
        }}
      ></textarea>
    </form>
  );
};

const mapStateToProps = (state) => ({
  addDepositFormData: state.addDepositFormData,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (field, value) =>
    dispatch(inputChangeAction(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDepositForm);
