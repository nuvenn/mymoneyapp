import React, {Component} from 'react'

import Content from '../common/template/content'
import Grid from '../common/layout/grid'
import ValueBox from '../common/widget/valueBox' 
import Row from '../common/layout/row'

class Summary extends Component {
    render() {
        return (
            <div>
                <Content>
                    <Row>
                        <Grid cols='12 4'>
                            <fieldset>
                                <legend>Resumo</legend>
                            </fieldset>
                        </Grid>
                    </Row>                  
                    <Row>
                        <ValueBox cols='12 4' color='green' value={`$ ${this.props.credit}`} text='total de créditos' icon='bank' />
                        <ValueBox cols='12 4' color='red' value={`$ ${this.props.debt}`} text='total de débitos' icon='bank' />
                        <ValueBox cols='12 4' color='blue' value={`$ ${this.props.credit - this.props.debt}`} text='valor consolidado' icon='bank' />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Summary