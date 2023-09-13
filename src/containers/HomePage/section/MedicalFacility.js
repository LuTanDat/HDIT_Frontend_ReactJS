import React, { Component } from "react";
import { connect } from "react-redux";
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl'; // chuyen doi ngon ngu duoc cau hinh trong folder src/translations

import Slider from "react-slick";

class MedicalFacility extends Component {

    render() {

        return (
            <div className="section section-medical-facility">
                <div className="section-container">
                    <div className="section-header">
                        <span className="title-section">Cơ sở y tế nổi bật</span>
                        <button className="btn-section">Xem Thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...this.props.settings}>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <div>Bệnh viện Trung ương Quân đội 108 1</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <div>Bệnh viện Trung ương Quân đội 108 2</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <div>Bệnh viện Trung ương Quân đội 108 3</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <div>Bệnh viện Trung ương Quân đội 108 4</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <div>Bệnh viện Trung ương Quân đội 108 5</div>
                            </div>
                            <div className="section-customize">
                                <div className="bg-image section-medical-facility"></div>
                                <div>Bệnh viện Trung ương Quân đội 108 6</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
