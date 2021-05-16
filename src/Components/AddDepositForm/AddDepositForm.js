import { connect } from "react-redux";
import inputChangeAction from "./../../actions/index";
import WheelsFormSection from "./WheelsFormSection/WheelsFormSection";
import { getTodayDate } from "./../../formatFunctions/formatFunctions";

import "./AddDepositForm.scss";

const AddDepositForm = (props) => {
  const addDeposit = (e) => {
    e.preventDefault();

    const addDepositFormData = props.addDepositFormData;

    const basicFieldsToCheck = [
      "addingDate",
      "depositType",
      "depositName",
      "tiresAmmount",
      "tiresSeason",
      "storeID",
      "customerID",
    ];

    const specificFieldsToCheck = [
      "rimsAmmount",
      "screwsAmmount",
      "hubcapsAmmount",
      "TPMSSensorsAmmount",
    ];

    console.log(JSON.stringify(addDepositFormData));
  };
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
      <select
        onChange={(e) => {
          props.handleInputChange("STORE_ID_CHANGE", e.target.value);
        }}
        type="text"
      >
        <option></option>
        {props.storeBase.map((store) => {
          return <option key={store.id}>{store.id}</option>;
        })}
      </select>
      {props.addDepositFormData.depositType === "Koła" && <WheelsFormSection />}
      <label>ID klienta</label>

      <select
        onChange={(e) => {
          props.handleInputChange("CUSTOMER_ID_CHANGE", e.target.value);
        }}
        type="text"
      >
        <option></option>
        {props.customersBase.map((customer) => {
          return <option key={customer.id}>{customer.id}</option>;
        })}
      </select>
      <label>Uwagi</label>
      <textarea
        maxLength={150}
        onChange={(e) => {
          props.handleInputChange("COMMENTS_FIELD_CHANGE", e.target.value);
        }}
      ></textarea>
      <button onClick={addDeposit}>Dodaj</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  storeBase: state.storeBase,
  customersBase: state.customersBase,
  addDepositFormData: state.addDepositFormData,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (field, value) =>
    dispatch(inputChangeAction(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDepositForm);
