import React, { Component } from 'react'
import { connect } from 'react-redux'
import { huyGheAction } from '../redux/actions/BookingTicketAction';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div>
                <div className="my-3">
                    <button className="gheDuocChon m-2"></button><span style={{ fontSize: 26 }} className="text-white">Ghế đã đặt</span><br />
                    <button className="gheDangChon m-2"></button><span style={{ fontSize: 26 }} className="text-white">Ghế đang đặt</span><br />
                    <button className="ghe ml-0 m-2"></button><span style={{ fontSize: 26 }} className="text-white">Ghế chưa đặt</span><br />
                </div>
                <div className="mt-2" style={{ overflow: 'auto', height: 480 }}>
                    <table className="table table-striped table-dark table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <td>Số ghế</td>
                                <td>Giá</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.danhSachGheDangDat.map((ghe, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{ghe.soGhe}</td>
                                        <td>{ghe.gia}</td>
                                        <td><button onClick={() => {
                                            this.props.huyGhe(ghe.soGhe);
                                        }} className="s-btn"><span style={{ fontSize: 18 }} className="text-danger">X<span className="text-white pl-3">Huỷ</span></span></button></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tfoot className="table-light text-dark">
                            <tr>
                                <td>Tổng tiền:</td>
                                <td colSpan="2">{this.props.danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.gia;
                                }, 0).toLocaleString() + " VNĐ"}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
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
        huyGhe: (soGhe) => {
            dispatch(huyGheAction(soGhe));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatGhe)
