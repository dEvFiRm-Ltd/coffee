import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar sidebar-light sidebar-main sidebar-expand-lg align-self-start">
            {/* Sidebar content */}
            <div className="sidebar-content">
                {/* Header */}
                <div className="sidebar-section sidebar-header">
                    <div className="sidebar-section-body d-flex align-items-center justify-content-center pb-0">
                        <h6 className="sidebar-resize-hide flex-1 mb-0">Navigation</h6>
                        <div>
                            <button
                                type="button"
                                className="btn btn-outline-light text-body border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex"
                            >
                                <i className="icon-transmission" />
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-light text-body border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none"
                            >
                                <i className="icon-cross2" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* /header */}

                {/* User menu */}
                <div className="sidebar-section sidebar-user">
                    <div className="sidebar-section-body d-flex justify-content-center">
                        <a href="!#">
                            <img
                                src="../../../../global_assets/images/demo/users/face11.jpg"
                                className="rounded-circle"
                                alt=""
                            />
                        </a>

                        <div className="sidebar-resize-hide flex-1 ml-3">
                            <div className="font-weight-semibold">Victoria Baker</div>
                            <div className="font-size-sm line-height-sm text-muted">
                                Senior developer
                            </div>
                        </div>
                    </div>
                </div>
                {/* /user menu */}

                {/* Main navigation */}
                <div className="sidebar-section">
                    <ul className="nav nav-sidebar" data-nav-type="accordion">
                        {/* Main */}
                        <li className="nav-item-header pt-0">
                            <div className="text-uppercase font-size-xs line-height-xs">Main</div>{' '}
                            <i className="icon-menu" title="Main" />
                        </li>
                        <li className="nav-item">
                            <a href="index.html" className="nav-link active">
                                <i className="icon-home4" />
                                <span>
                                    Dashboard
                                    <span className="d-block font-weight-normal opacity-50">
                                        No active orders
                                    </span>
                                </span>
                            </a>
                        </li>
                        {/* /main */}

                        {/* Layout */}
                        <li className="nav-item-header">
                            <div className="text-uppercase font-size-xs line-height-xs">Layout</div>{' '}
                            <i className="icon-menu" title="Layout options" />
                        </li>
                        <li className="nav-item nav-item-submenu">
                            <a href="!#" className="nav-link">
                                <i className="icon-stack2" /> <span>Page layouts</span>
                            </a>
                            <ul className="nav nav-group-sub" data-submenu-title="Page layouts">
                                <li className="nav-item">
                                    <a href="layout_navbar_fixed.html" className="nav-link">
                                        Fixed navbar
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="layout_navbar_hideable.html" className="nav-link">
                                        Hideable navbar
                                    </a>
                                </li>
                                <li className="nav-item-divider" />
                                <li className="nav-item">
                                    <a href="layout_no_header.html" className="nav-link">
                                        No header
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="layout_no_footer.html" className="nav-link">
                                        No footer
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="layout_fixed_footer.html" className="nav-link">
                                        Fixed footer
                                    </a>
                                </li>
                                <li className="nav-item-divider" />
                                <li className="nav-item">
                                    <a href="layout_2_sidebars_1_side.html" className="nav-link">
                                        2 sidebars on 1 side
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="layout_2_sidebars_2_sides.html" className="nav-link">
                                        2 sidebars on 2 sides
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="layout_3_sidebars.html" className="nav-link">
                                        3 sidebars
                                    </a>
                                </li>
                                <li className="nav-item-divider" />
                                <li className="nav-item">
                                    <a href="layout_boxed_page.html" className="nav-link">
                                        Boxed page
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="layout_boxed_content.html" className="nav-link">
                                        Boxed content
                                    </a>
                                </li>
                            </ul>
                        </li>
                        {/* /layout */}
                    </ul>
                </div>
                {/* /main navigation */}
            </div>
            {/* /sidebar content */}
        </div>
    );
};

export default Sidebar;
