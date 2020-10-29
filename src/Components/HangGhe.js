import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { datGheAction } from '../redux/actions/BookingTicketAction';

class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let styleGheDuocChon = '';
            let disable = false;
            if (ghe.daDat) {
                styleGheDuocChon = 'gheDuocChon';
                disable = true;
            }
            let indexGheDangChon = this.props.danhSachGheDangDat.findIndex(gheDangChon => gheDangChon.soGhe === ghe.soGhe);
            let styleGheDangChon = '';
            if (indexGheDangChon !== -1) {
                styleGheDangChon = 'gheDangChon';
            }

            return (
                <button onClick={() => {
                    this.props.datGhe(ghe)
                }} disabled={disable} className={`ghe ${styleGheDuocChon} ${styleGheDangChon}`} key={index}>
                    {index + 1}
                </button>
            );
        })
    }
    renderSoHangGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((hangGhe, index) => {
            return (
                <button className="rowNumber">{hangGhe.soGhe}</button>
            );
        })
    }
    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return (
                <Fragment>
                    {this.props.hangGhe.hang} {this.renderSoHangGhe()}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    { this.props.hangGhe.hang} { this.renderGhe()}
                </Fragment>
            );
        }
    }
    render() {
        return (
            <div className="text-white ml-3">
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BookingTicketReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)
