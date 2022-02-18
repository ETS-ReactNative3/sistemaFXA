import React from 'react';

export const AppFooter = (props) => {

    const logo = require('./assets/images/logo-fxa-version-principal.svg')

    return (
        <div className="layout-footer">
            <img src={logo} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">Fuxia</span>
        </div>
    );
}
