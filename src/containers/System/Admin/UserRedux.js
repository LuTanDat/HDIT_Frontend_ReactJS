import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService'
import { LANGUAGES } from '../../../utils'
import * as actions from '../../../store/actions'

class UserRedux extends Component {

    constructor(props) {
        super(props);

        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
        }
    }

    async componentDidMount() {

        await this.props.getGenderStart();

        // await this.getAllCodeGenderService();
        // await this.getAllCodePositionService();
        // await this.getAllCodeRoleService();
    }

    // getAllCodeGenderService = async () => {
    //     try {
    //         let res = await getAllCodeService('gender');
    //         if (res && res.errCode === 0) {
    //             this.setState({
    //                 genderArr: res.data,
    //             })
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // getAllCodePositionService = async () => {
    //     try {
    //         let res = await getAllCodeService('position');
    //         if (res && res.errCode === 0) {
    //             this.setState({
    //                 positionArr: res.data,
    //             })
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // getAllCodeRoleService = async () => {
    //     try {
    //         let res = await getAllCodeService('role');
    //         if (res && res.errCode === 0) {
    //             this.setState({
    //                 roleArr: res.data,
    //             })
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // so sanh gia tri cua qua khu (prevProps) va hien tai(this)
        // render() chay => componentDidUpdate() chay

        // life cycle 1: [] vs [3]
        // life cycle 2:[3] vs [3]
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux,
            })
        }
    }

    render() {
        console.log('check gender redux: ', this.props.genderRedux);

        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;

        let language = this.props.language;

        return (
            <div className='user-redux-container'>
                <div className='title'>
                    User Redux with lu tan dat
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 my-3'><FormattedMessage id="manage-user.add" /></div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.email" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.password" /></label>
                                <input className='form-control' type='password' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.first-name" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.last-name" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.phone-number" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-9'>
                                <label><FormattedMessage id="manage-user.address" /></label>
                                <input className='form-control' type='text' />
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.gender" /></label>
                                <select className="form-select">
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.position" /></label>
                                <select className="form-select">
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.role" /></label>
                                <select className="form-select">
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3'>
                                <label><FormattedMessage id="manage-user.image" /></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-12 mt-3'>
                                <button type="submit" className="btn btn-primary"><FormattedMessage id="manage-user.save" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),

        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
