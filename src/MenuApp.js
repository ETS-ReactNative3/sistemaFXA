export class MenuApp {

    optionsMenu(rol){
        switch(rol){
            case 'Soporte':
                return [
                    {
                        label: 'Principal',
                        items: [
                            {label: 'Inicio', icon: 'pi pi-fw pi-home', to: '/dash/inicio'},
                            {label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/dash/perfil'},
                            {label: 'Documentos', icon: 'pi pi-fw pi-file-pdf', to: '/dash/documentos'},
                            {label: 'Generar Certificado', icon: 'pi pi-fw pi-download', to: '/dash/certificado'},
                        ]
                    },
                    {
                        label: 'Admin',
                        items: [
                            {label: 'Dashboard', icon: 'pi pi-fw pi-briefcase', to: '/dash'},
                            {label: 'Usuarios', icon: 'pi pi-fw pi-users', to: '/dash/usuarios'},
                            {label: 'Permisos', icon: 'pi pi-fw pi-shield', to: '/dash/permisos'},
                        ]
                    },
                    {   label: 'Plantilla',
                        items:[
                            {
                            label: 'Plantilla',
                            icon: 'pi pi-fw pi-spin pi-star',
                            items:[
                                {
                                    label: 'UI Components', icon: 'pi pi-fw pi-sitemap',
                                    items: [
                                        { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/dash/formlayout' },
                                        { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/dash/input' },
                                        { label: "Float Label", icon: "pi pi-fw pi-bookmark", to: "/floatlabel" },
                                        { label: "Invalid State", icon: "pi pi-fw pi-exclamation-circle", to: "invalidstate" },
                                        { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/dash/button' },
                                        { label: 'Table', icon: 'pi pi-fw pi-table', to: '/dash/table' },
                                        { label: 'List', icon: 'pi pi-fw pi-list', to: '/dash/list' },
                                        { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/dash/tree' },
                                        { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/dash/panel' },
                                        { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/dash/overlay' },
                                        { label: "Media", icon: "pi pi-fw pi-image", to: "/media" },
                                        { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/dash/menu' },
                                        { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/dash/messages' },
                                        { label: 'File', icon: 'pi pi-fw pi-file', to: '/dash/file' },
                                        { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/dash/chart' },
                                        { label: 'Misc', icon: 'pi pi-fw pi-circle-off', to: '/dash/misc' },
                                    ]
                                },
                                {
                                    label: 'UI Blocks',
                                    items: [
                                        { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/dash/blocks', badge: "NEW" },
                                        { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: 'https://www.primefaces.org/primeblocks-react' }
                                    ]
                                },
                                {
                                    label: 'Icons',
                                    items: [
                                        { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', to: '/dash/icons' }
                                    ]
                                },
                                {
                                    label: 'Pages', icon: 'pi pi-fw pi-clone',
                                    items: [
                                        { label: 'Crud', icon: 'pi pi-fw pi-user-edit', to: '/dash/crud' },
                                        { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/dash/timeline' },
                                        { label: 'Empty', icon: 'pi pi-fw pi-circle-off', to: '/dash/empty' }
                                    ]
                                },
                                {
                                    label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
                                    items: [
                                        {
                                            label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                {
                                                    label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                                    items: [
                                                        { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                        { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                        { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                                    ]
                                                },
                                                {
                                                    label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                                    items: [
                                                        { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' },
                                                        { label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark' }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                {
                                                    label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                                    items: [
                                                        { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                        { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                        { label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark' },
                                                    ]
                                                },
                                                {
                                                    label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                                    items: [
                                                        { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                                        { label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark' }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    label: 'Get Started',
                                    items: [
                                        { label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => { window.location = "#/documentation" } },
                                        { label: 'View Source', icon: 'pi pi-fw pi-search', command: () => { window.location = "https://github.com/primefaces/sakai-react" } }
                                    ]
                                }
                            ]}
                    ]}
                ]

            case 'Admin':{
                return [
                    {
                        label: 'Principal',
                        items: [
                            {label: 'Inicio', icon: 'pi pi-fw pi-home', to: '/dash/inicio'},
                            {label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/dash/perfil'},
                            {label: 'Documentos', icon: 'pi pi-fw pi-file-pdf', to: '/dash/documentos'},
                            {label: 'Generar Certificado', icon: 'pi pi-fw pi-download', to: '/dash/certificado'},
                        ]
                    },
                    {
                        label: 'Admin',
                        items: [
                            {label: 'Dashboard', icon: 'pi pi-fw pi-briefcase', to: '/dash'},
                            {label: 'Usuarios', icon: 'pi pi-fw pi-users', to: '/dash/usuarios'},
                        ]
                    }
                    
                ]
            }
            case 'Empleado':{
                return [
                    {
                        label: 'Principal',
                        items: [
                            {label: 'Inicio', icon: 'pi pi-fw pi-home', to: '/dash/inicio'},
                            {label: 'Perfil', icon: 'pi pi-fw pi-user', to: '/dash/perfil'},
                            {label: 'Documentos', icon: 'pi pi-fw pi-file-pdf', to: '/dash/documentos'},
                            {label: 'Generar Certificado', icon: 'pi pi-fw pi-download', to: '/dash/certificado'},
                        ]
                    }
                ]
            }

            default:
        }
    }

}