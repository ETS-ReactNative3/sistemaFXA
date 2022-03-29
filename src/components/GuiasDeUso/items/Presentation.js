import React from 'react'
import { Link } from 'react-router-dom'


const Presentation = () => {
  return (
    <div>
        <h4>Documentación SIGE:</h4>
        <p>En el siguiente apartado se encuentra la documentacion del uso de la página y documentación para desarrollo</p>
        <ul>
            <li>
                <h5>Manuales De Usuario</h5>
                <ul>
                    <li>
                        <Link to='/guia-uso/manual-empleado'>Rol Usuario</Link>
                    </li>
                    <li>
                        <Link to='/guia-uso/manual-admin'>Rol Admin</Link>
                    </li>
                    <li>
                        <Link to='/guia-uso/manual-soporte'>Rol Soporte</Link>
                    </li>
                </ul>
            </li>
            <li>
                <h5>Documentacion Desarrollador</h5>
            </li>
        </ul>
    </div>
  )
}

export default Presentation