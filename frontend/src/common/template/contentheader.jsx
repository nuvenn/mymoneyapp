import React from 'react'

export default props => (
    <section className='content-header'>
        <h3>{props.title}<small>{(props.small) ? ' ' + props.small : ''}</small></h3>
    </section>
)