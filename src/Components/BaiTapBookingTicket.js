import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import data from '../data/danhSachGhe.json'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {
    renderHangGhe = () => {
        return data.map((hangGhe, index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </div>
            );
        })
    }
    render() {
        return (
            <div className="bookingMovie">
                <div className="overlay">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-8 position-relative">
                                <div className="text-center">
                                    <h1 className="display-4 text-warning">Đặt vé xem phim</h1>
                                    <h3 className="text-white">Màn hình</h3>
                                </div>
                                <div className="position-absolute" style={{ left: '50%', transform: 'translateX(-50%)', width: '80%' }}>
                                    <div className="screen"></div>
                                    {this.renderHangGhe()}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <h3 style={{ fontSize: 35 }} className="text-white mt-3">Danh sách ghế bạn chọn</h3>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
