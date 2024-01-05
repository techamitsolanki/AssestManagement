import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
  return <div>
     <header id="default_header" className="header_style_1">
           {/* header*/}
        
            {/* header top*/}
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="full">
                                <div className="topbar-left">
                                    <ul className="list-inline">
                                        <li> <span className="topbar-label"><i className="fa  fa-home"></i></span> <span className="topbar-hightlight">540 Lorem Ipsum New York, AB 90218</span> </li>
                                        <li> <span className="topbar-label"><i className="fa fa-envelope-o"></i></span> <span className="topbar-hightlight"><Link to="mailto:info@yourdomain.com">info@yourdomain.com</Link></span> </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 right_section_header_top">
                            <div className="float-left">
                                <div className="social_icon">
                                    <ul className="list-inline">
                                        <li><Link className="fa fa-facebook" to="https://www.facebook.com/" title="Facebook" target="_blank"></Link></li>
                                        <li><Link className="fa fa-google-plus" to="https://plus.google.com/" title="Google+" target="_blank"></Link></li>
                                        <li><Link className="fa fa-twitter" to="https://twitter.com" title="Twitter" target="_blank"></Link></li>
                                        <li><Link className="fa fa-linkedin" to="https://www.linkedin.com" title="LinkedIn" target="_blank"></Link></li>
                                        <li><Link className="fa fa-instagram" to="https://www.instagram.com" title="Instagram" target="_blank"></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="float-right">
                                <div className="make_appo"> <Link className="btn white_btn" to="make_appointment.html">Make Appointment</Link> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end header top*/}
      

    
        <div className="header_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                            {/* logo start*/}
                            <div className="logo"  > <img src="images\annova-solutions-01.png" alt="logo" width={200} /> </div>
                            {/* logo end*/}
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                            {/* menu start*/}
                            <div className="menu_side">
                                <div id="navbar_menu">
                                    <ul className="first-ul">
                                        <li> <Link className="active" to="/assets">Assets</Link></li>
                                        <li> <Link to="/employeetb">Employee</Link></li>
                                        <li> <Link to="/itassets">ITAssets</Link></li>
                                        <li> <Link to="">Forms</Link>
                                            <ul>
                                                <li><Link to="/assetassignment">AssetAssignment</Link></li>
                                                <li><Link to="/assetcategory">Asset-Category</Link></li>
                                                <li><Link to="/assets">Assets</Link></li>
                                                <li><Link to="/assetstatustb">Asset-Status</Link></li>
                                                <li><Link to="/assettypetb">AssetType</Link></li>
                                                <li><Link to="/countrytb">Country</Link></li>
                                                <li><Link to="/depttb">Department</Link></li>
                                                <li><Link to="/disposalmethodtb">DisposalMethod</Link></li>
                                                <li><Link to="/employeetb">Employee</Link></li>
                                                <li><Link to="/itassets">ITAssets</Link></li>
                                                <li><Link to="/locationtb">Location</Link></li>
                                                <li><Link to="/nonitasset">NonITAsset</Link></li>
                                                <li><Link to="/operatingsystemtb">Opertaing-System</Link></li>
                                                <li><Link to="/softwareinstalled">Software-Installed</Link></li>
                                                <li><Link to="/statenametb">StateName</Link></li>
                                            </ul>
                                        </li>
                    
                                    </ul>
                                </div>
                                <div className="search_icon">
                                    <ul>
                                        <li><Link to="#" data-toggle="modal" data-target="#search_bar"><i className="fa fa-search" aria-hidden="true"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* menu end*/}
                        </div>
                    </div>
                </div>
            </div>
            </header>
  </div>
}

export default Menu;