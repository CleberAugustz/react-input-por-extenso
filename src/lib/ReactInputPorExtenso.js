import React from 'react'
import PropTypes from 'prop-types'
import numero from 'numero-por-extenso'

const ReactInputPorExtenso = ({ tipoExtenso, onChange,...props }) => (
<input 
type="number" 
onChange={e => {
    const numberoPorExtenso = numero.porExtenso(e.target.value, numero.estilo[tipoExtenso])
    onChange(numberoPorExtenso, e);
}} 
{...props}
/>
)

ReactInputPorExtenso.propTypes={
    tipoExtenso: PropTypes.oneOf(['normal', 'monetario', 'porcentagem'])
}

ReactInputPorExtenso.defaultProps = {
    tipoExtenso: "normal"
}

export default ReactInputPorExtenso;