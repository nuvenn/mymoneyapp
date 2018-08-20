import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/contentheader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox' 
import Row from '../common/layout/row'

class DashBoard extends Component {
    componentWillMount(){
        this.props.getSummary()
    }
    render() {
        const { credit, debt } = this.props.summary
        return  (
            <div>
                <ContentHeader title='DashBoard' small='v1.0'/>
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' value={`$ ${credit}`} text='total de créditos' icon='bank' />
                        <ValueBox cols='12 4' color='red' value={`$ ${debt}`} text='total de débitos' icon='bank' />
                        <ValueBox cols='12 4' color='blue' value={`$ ${credit-debt}`} text='valor consolidado' icon='bank' />
                    </Row>
                </Content>    
            </div>
        )
    }
}

const mapStateToProps = state => ({
    summary: state.dashboard.summary
})
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard)