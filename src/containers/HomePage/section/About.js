import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl'; // chuyen doi ngon ngu duoc cau hinh trong folder src/translations


class About extends Component {

    render() {

        return (
            <div className="section section-about">
                <div className="section-about-header">
                    Truyền thông nói về My Website
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                        <iframe width="100%" height="370px"
                            src="https://www.youtube.com/embed/FyDQljKtWnI"
                            title="CÀ PHÊ KHỞI NGHIỆP VTV1 - BOOKINGCARE - HỆ THỐNG ĐẶT LỊCH KHÁM TRỰC TUYẾN"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <div className="content-right">
                        <p>"Bạn có thể dễ dàng đặt lịch khám bệnh trực tuyến để tiết kiệm thời gian và nỗ lực. Chỉ cần truy cập trang web hoặc ứng dụng của bệnh viện hoặc phòng khám yêu thích của bạn, sau đó chọn bác sĩ hoặc chuyên khoa mà bạn cần khám. Bạn sẽ thấy danh sách các lịch trống và có thể chọn thời gian phù hợp với bạn. Sau khi xác nhận, bạn sẽ nhận được xác nhận qua email hoặc tin nhắn văn bản, và không cần phải đợi hàng giờ tại phòng đợi. Điều này giúp bạn quản lý sức khỏe cá nhân một cách tiện lợi và hiệu quả hơn."</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
