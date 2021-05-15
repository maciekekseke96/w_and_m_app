import { connect } from "react-redux";
import inputChangeAction from "./../../../actions/index";
const WheelsFormSection = (props) => {
  return (
    <div className="wheelsFormSection">
      <label>Liczba felg</label>
      <input
        onChange={(e) => {
          props.handleInputChange("RIMS_AMMOUNT_CHANGE", e.target.value);
        }}
        type="number"
        min={1}
      ></input>
      <label>Liczba Śrub</label>
      <input
        onChange={(e) => {
          props.handleInputChange("SCREWS_AMMOUNT_CHANGE", e.target.value);
        }}
        type="text"
        type="number"
        min={1}
      ></input>
      <label>Liczba kołpaków</label>
      <input
        onChange={(e) => {
          props.handleInputChange("HUBCAPS_AMMOUNT_CHANGE", e.target.value);
        }}
        type="text"
        type="number"
        min={1}
      ></input>
      <label>Liczba czujników TPMS</label>
      <input
        onChange={(e) => {
          props.handleInputChange("TPMS_SENSORS_CHANGE", e.target.value);
        }}
        type="text"
        type="number"
        min={1}
      ></input>
    </div>
  );
};

const mapStateToProps = (state) => ({
  addDepositFormData: state.addDepositFormData,
});

const mapDispatchToProps = (dispatch) => ({
  handleInputChange: (field, value) =>
    dispatch(inputChangeAction(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WheelsFormSection);
