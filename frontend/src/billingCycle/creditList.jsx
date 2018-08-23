import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {
    add(index, item = {}) {
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', 'credits', index, item)
        }    
    }
    remove(index) {
        if(!this.props.readOnly){
            this.props.arrayRemove('billingCycleForm', 'credits', index)
        }    
    }
    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`credits[${index}].name`} placeholder='Nome' readOnly={this.props.readOnly} component={Input} /></td>
                <td><Field name={`credits[${index}].value`} placeholder='Valor' readOnly={this.props.readOnly} component={Input} /></td>
                <td>
                    <button type='button' onClick={() => this.add(index + 1)} className='btn btn-success'>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type='button' onClick={() => this.add(index + 1, item)} className='btn btn-warning'>
                        <i className='fa fa-clone'></i>
                    </button>
                    <button type='button' onClick={() => this.remove(index)} className='btn btn-danger'>
                        <i className='fa fa-remove'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                </fieldset>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </Grid>
        )
    }
}

const mapDispatchtoProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchtoProps)(CreditList)