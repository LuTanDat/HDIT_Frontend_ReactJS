import React, { Component } from "react";
import { connect } from "react-redux";
import './HomeHeader.scss';
// import logo from '../../assets/logo.svg'; <img src={logo} />
import { FormattedMessage } from 'react-intl'; // chuyen doi ngon ngu duoc cau hinh trong folder src/translations

class HomeHeader extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo"></div>

                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.specialty" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.search-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.health-facility" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-room" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.doctor" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-doctor" /></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.fee" /></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.check-health" /></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support"><i className="fas fa-question-circle"></i><FormattedMessage id="home-header.support" /></div>
                            <div className="language-vi">VN</div>
                            <div className="language-en">EN</div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="content-up">
                        <div className="title1"><FormattedMessage id="banner.title1" /></div>
                        <div className="title2"><FormattedMessage id="banner.title2" /></div>
                        <div className="search">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa khám bệnh" />
                        </div>
                    </div>
                    <div className="content-down">
                        <div className="options">
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-hospital-alt"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child1" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i class="fas fa-mobile-alt"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child2" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i class="far fa-clipboard"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child3" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-flask"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child4" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-user-md"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child5" /></div>
                            </div>
                            <div className="option-child">
                                <div className="icon-child"><i className="fas fa-briefcase-medical"></i></div>
                                <div className="text-child"><FormattedMessage id="banner.child6" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>


        )
    }
}

// ham se tra ve gia tri trong props
const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
