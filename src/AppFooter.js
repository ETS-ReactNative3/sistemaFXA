import React from 'react';

export const AppFooter = (props) => {

    const logo1 = require('./assets/images/version_principal_negro.png')
    const logo2 = require('./assets/images/version_principal_blanco.png')

    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === 'light' ? logo1 : logo2} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">Fuxia</span>
        </div>
    );
}
