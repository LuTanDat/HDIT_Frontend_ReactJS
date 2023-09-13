import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl'; // chuyen doi ngon ngu duoc cau hinh trong folder src/translations

import Slider from "react-slick";

class OutstandingDoctor extends Component {

    render() {

        return (
            <div className="section section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Bác sĩ nổi bật tuần qua</span>
                        <button className="btn-section">Xem Thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ ABC</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ ABC</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ ABC</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ ABC</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ ABC</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                            <div className="section-customize">
                                <div className="customize-border">
                                    <div className="outer-bg">
                                        <div className="bg-image section-outstanding-doctor"></div>
                                    </div>
                                    <div className="position text-center">
                                        <div>Giáo sư, Tiến sĩ ABC</div>
                                        <div>Cơ xương khớp</div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}

// get state redux trong props
const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
    };
};

// redirect actions redux trong props
const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
