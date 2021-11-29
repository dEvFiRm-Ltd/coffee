import React from 'react';
import './main.css';

const Navbar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark navbar-static">
            <div className="d-flex flex-1 d-lg-none">
                <button type="button" className="navbar-toggler sidebar-mobile-main-toggle">
                    <i className="icon-transmission" />
                </button>
                <button
                    data-target="#navbar_search"
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                >
                    <i className="icon-search4" />
                </button>
            </div>

            <div className="navbar-brand text-center text-lg-left">
                <a href="index.html" className="d-inline-block">
                    <img
                        src="../../../../global_assets/images/logo_light.png"
                        className="d-none d-sm-block"
                        alt=""
                    />
                    <img
                        src="../../../../global_assets/images/logo_icon_light.png"
                        className="d-sm-none"
                        alt=""
                    />
                </a>
            </div>

            <div className="collapse navbar-collapse order-2 order-lg-1" id="navbar_search">
                <div className="navbar-search d-flex align-items-center py-3 py-lg-0">
                    <div className="form-group-feedback form-group-feedback-left flex-grow-1">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="form-control-feedback">
                            <i className="icon-search4 text-white opacity-50" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-1 order-lg-2 d-flex flex-1 flex-lg-0 justify-content-end align-items-center">
                <span className="badge badge-success d-none d-lg-inline-block mr-3">Active</span>

                <ul className="navbar-nav flex-row align-items-center h-100">
                    <li className="nav-item nav-item-dropdown-lg dropdown">
                        <a
                            href="!#"
                            className="navbar-nav-link navbar-nav-link-toggler"
                            data-toggle="modal"
                            data-target="#notifications"
                        >
                            <i className="icon-bell2" />
                            <span className="badge badge-warning badge-pill">3</span>
                        </a>
                    </li>

                    <li className="nav-item nav-item-dropdown-lg dropdown dropdown-user h-100">
                        <a
                            href="!#"
                            className="navbar-nav-link navbar-nav-link-toggler dropdown-toggle d-inline-flex align-items-center h-100"
                            data-toggle="dropdown"
                        >
                            <img
                                src="../../../../global_assets/images/demo/users/face11.jpg"
                                className="rounded-pill"
                                height="34"
                                alt=""
                            />
                            <span className="d-none d-lg-inline-block ml-2">Victoria</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right wmin-lg-250 py-2">
                            <div className="dropdown-item d-flex py-2">
                                <div className="flex-1">
                                    <div className="font-weight-semibold">Account summary</div>
                                    <span className="text-muted font-size-sm">
                                        Profile, overview
                                    </span>
                                </div>
                                <span className="btn btn-dark-100 btn-icon btn-sm text-body border-transparent rounded-pill ml-1">
                                    <i className="icon-arrow-right8" />
                                </span>
                            </div>

                            <div className="dropdown-item d-flex py-2">
                                <div className="flex-1">
                                    <div className="font-weight-semibold">Privacy</div>
                                    <span className="text-muted font-size-sm">
                                        Access, permissions
                                    </span>
                                </div>
                                <span className="btn btn-dark-100 btn-icon btn-sm text-body border-transparent rounded-pill ml-1">
                                    <i className="icon-arrow-right8" />
                                </span>
                            </div>

                            <div className="dropdown-item d-flex py-2">
                                <div className="flex-1">
                                    <div className="font-weight-semibold">Payments</div>
                                    <span className="text-muted font-size-sm">
                                        Expenses, subscription
                                    </span>
                                </div>
                                <span className="btn btn-dark-100 btn-icon btn-sm text-body border-transparent rounded-pill ml-1">
                                    <i className="icon-arrow-right8" />
                                </span>
                            </div>

                            <div className="dropdown-item d-flex py-2">
                                <div className="flex-1">
                                    <div className="font-weight-semibold">Settings</div>
                                    <span className="text-muted font-size-sm">
                                        Security, app config
                                    </span>
                                </div>
                                <span className="btn btn-dark-100 btn-icon btn-sm text-body border-transparent rounded-pill ml-1">
                                    <i className="icon-arrow-right8" />
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
