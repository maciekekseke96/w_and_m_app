import React, { Component } from 'react';
import { connect } from 'react-redux';
import WheelsFormSection from '../WheelsFormSection/WheelsFormSection';
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import FormTextarea from '../FormTextarea/FormTextarea';
import CustomButton from '../CustomButton/CustomButton';
import { getTodayDate } from './../../formatFunctions/formatFunctions';

import './AddDepositForm.scss';

class AddDepositForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingDate: getTodayDate(),
      depositType: 'Opony',
      depositName: '',
      tiresAmmount: undefined,
      season: 'Letnie',
      storeId: undefined,
      customerId: undefined,
      comments: '',
      rimsAmmount: undefined,
      screwsAmmount: undefined,
      hubcapsAmmount: undefined,
      TPMSSensorsAmmount: undefined,
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
          options={['', ...this.props.storeBase.map((store) => store.id)]}
          label="ID magazynu"
          value={this.state.storeId}
        />
        {this.state.depositType === 'Koła' && (
          <WheelsFormSection
            handleInputChange={this.handleInputChange}
            state={this.state}
          />
        )}
        <FormSelect
          handleChange={this.handleInputChange}
          name="customerID"
          options={[
            '',
            ...this.props.customersBase.map((customer) => customer.id),
          ]}
          label="ID klienta"
          value={this.state.customerId}
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
  storeBase: state.storeBase,
  customersBase: state.customersBase,
});

export default connect(mapStateToProps, {})(AddDepositForm);
