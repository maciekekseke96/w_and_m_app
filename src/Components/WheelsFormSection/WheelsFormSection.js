import FormInput from '../FormInput/FormInput';

const WheelsFormSection = (props) => {
  return (
    <div className="wheelsFormSection">
      <FormInput
        handleChange={props.handleInputChange}
        type="number"
        min={1}
        label="Liczba felg"
        name="rimsAmmount"
        value={props.state.rimsAmmount}
      />
      <FormInput
        handleChange={props.handleInputChange}
        type="number"
        min={1}
        label="Liczba śrub"
        name="screwsAmmount"
        value={props.state.screwsAmmount}
      />
      <FormInput
        handleChange={props.handleInputChange}
        type="number"
        min={0}
        label="Liczba kołpaków"
        name="hubcapsAmmount"
        value={props.state.hubcapsAmmount}
      />
      <FormInput
        handleChange={props.handleInputChange}
        type="number"
        min={0}
        label="Liczba czujników TPMS"
        name="TPMSSensorsAmmount"
        value={props.state.TPMSSensorsAmmount}
      />
    </div>
  );
};

export default WheelsFormSection;
