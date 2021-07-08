import React, { Component } from 'react';
import { connect } from 'react-redux';
import WheelsFormSection from './../../Components/WheelsFormSection/WheelsFormSection';
import FormInput from './../../Components/FormInput/FormInput';
import FormSelect from './../../Components/FormSelect/FormSelect';
import FormTextarea from './../../Components/FormTextarea/FormTextarea';
import CustomButton from './../../Components/CustomButton/CustomButton'
import { getTodayDate } from './../../formatFunctions/formatFunctions';

import './AddDepositForm.scss';

class AddDepositForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingDate: getTodayDate(),
      depositType: 'Opony',
      depositName: '',
      tiresAmmount: 1,
      season: 'Letnie',
      storeId: '',
      customerId: '',
      comments: '',
      rimsAmmount: 1,
      screwsAmmount: 1,
      hubcapsAmmount: 0,
      TPMSSensorsAmmount: 0,
    };
  }
  addDeposit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.addDeposit} className="addDepositForm">
        <FormInput
          name="addingDate"
          handleChange={this.handleInputChange}
          type="date"
          value={this.state.addingDate}
          min={getTodayDate()}
          label="Data dodania"
        />
        <FormSelect
          handleChange={this.handleInputChange}
          name="depositType"
          options={['Opony', 'Koła']}
          label="Typ Depozytu"
          value={this.state.depositType}
        />
        <FormInput
          handleChange={this.handleInputChange}
          type="text"
          label="Nazwa"
          name="depositName"
          value={this.state.depositName}
        />
        <FormInput
          handleChange={this.handleInputChange}
          type="number"
          min={1}
          label="Liczba"
          name="tiresAmmount"
          value={this.state.tiresAmmount}
        />
        <FormSelect
          handleChange={this.handleInputChange}
          name="season"
          options={['Letnie', 'Zimowe']}
          label="Sezon"
          value={this.state.season}
        />
        <FormSelect
          handleChange={this.handleInputChange}
          name="storeId"
          options={[...this.props.storageBase]}
          label="ID magazynu"
          value={this.state.storeId}
          withInfoOption
          idAndNameOption
        />
        {this.state.depositType === 'Koła' && (
          <WheelsFormSection
            handleInputChange={this.handleInputChange}
            state={this.state}
          />
        )}
        <FormSelect
          handleChange={this.handleInputChange}
          name="customerId"
          options={[...this.props.customerBase]}
          label="ID klienta"
          value={this.state.customerId}
          withInfoOption
          idAndNameOption
        />
        <FormTextarea
          maxLength={150}
          handleChange={this.handleInputChange}
          name="comments"
          label="Uwagi"
          value={this.state.comments}
        />
        <CustomButton type="submit">Dodaj</CustomButton>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  storageBase: state.storageBase,
  customerBase: state.customerBase,
});

export default connect(mapStateToProps, {})(AddDepositForm);
