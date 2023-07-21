import React, { Component } from 'react'
import './BaiTapBookingTicket.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
import { baiTapDatVeReducer } from '../../store/reducers/baiTapReducer'

export default class BaiTapBookingTicket extends Component {

  renderHangGhe = () => {
    return data.map((hangGhe, index) => {
      return <div key={index}>
        <HangGhe hangGhe={hangGhe} soHangGhe={index} danhSachGheDangDat={baiTapDatVeReducer.danhSachGheDangDat} />
      </div>
    })
  }

  render() {
    return (
      <div className='bookingMovie' style={{ position: 'fixed',width:"100%", height:"100%", backgroundImage: 'url("./img/bgmovie.jpg")', backgroundSize:"100%" }}>
        
        <div style={{ position: 'fixed', width: '100%', height:"100%", backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div style={{fontSize:35}} className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEAN.VN</div>
                <div className=' text-light' style={{ fontSize: '25px' }}>Màn hình</div>
                <div className='d-flex justify-content-center mt-1'>
                  <div className="screen">

                  </div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4">
                <div className="text-success text-left mt-1" style={{ fontSize: 30 }}>DANH SÁCH GHẾ BẠN CHỌN</div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
