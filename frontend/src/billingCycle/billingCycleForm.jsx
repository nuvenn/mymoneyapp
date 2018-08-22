import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { init } from '../billingCycle/billingCycleActions'
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
                        <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}

const BillingCycleFormConst = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch) 
export default connect(null, mapDispatchToProps)(BillingCycleFormConst)