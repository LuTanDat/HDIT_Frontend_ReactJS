import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl'; // chuyen doi ngon ngu duoc cau hinh trong folder src/translations


class HomeFooter extends Component {

    render() {

        return (
            <div className="home-footer">
                <p>&copy; 2023 Lư Tấn Đạt. More information, please visit my youtube channel.
                    <a target="_blank" href="https://www.youtube.com/watch?v=UctdkV0h0vo&ab_channel=CloudMood">&#9827; Click here &#9827;</a>
                </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
