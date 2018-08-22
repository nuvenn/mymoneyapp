import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Input from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props            // --> const handleSubmit =  this.props.handleSubmit
        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>   
                        <Field name='name' cols='12 4' placeholder='Preencha com o nome' component={Input} />
                        <Field name='month' cols='12 4' placeholder='Preencha com o mês' type='number' component={Input} />
                        <Field name='year' cols='12 4' placeholder='Preencha com o ano' type='number' component={Input} />
                    </div>
                    <div className='box-footer'>   
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)