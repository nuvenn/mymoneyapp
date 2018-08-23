import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { init } from '../billingCycle/billingCycleActions'
import Input from '../common/form/labelAndInput'
import ItemList from './itemList';

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props            // --> const handleSubmit =  this.props.handleSubmit
        return (
            <div>
                <form role='form' onSubmit={handleSubmit}>
                    <div className='box-body'>   
                        <Field name='name' cols='12 4' placeholder='Preencha com o nome' readOnly={readOnly} component={Input} />
                        <Field name='month' cols='12 4' placeholder='Preencha com o mês' type='number' readOnly={readOnly} component={Input} />
                        <Field name='year' cols='12 4' placeholder='Preencha com o ano' type='number' readOnly={readOnly} component={Input} />
                        <ItemList list={credits} field='credits' title='Créditos' cols='12 6' readOnly={readOnly} showStatus={false} />
                        <ItemList list={debts}  field='debts' title='Débitos' cols='12 6' readOnly={readOnly} showStatus={true} />
                    </div>
                    <div className='box-footer'>   
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitMethod}</button>
                        <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                    </div>
                </form>
            </div>
        )
    }
}

const selector = formValueSelector('billingCycleForm')
const BillingCycleFormConst = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch) 
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleFormConst)