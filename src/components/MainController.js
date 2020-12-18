import React from 'react';
import AutoUpgradesPanel from './AutoUpgradesPanel';
import BytesPanel from './BytesPanel';
import OtherInfoPanel from './OtherInfoPanel';
import TypeUpgradesPanel from './TypeUpgradesPanel';
import '../App.css'
import * as a from './../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class MainController extends React.Component {

  constructor(props) {
    super(props);
    console.log(props)
  }

  handleMiningBytes = () => {
    const { dispatch, byteCount, bytesPerClick } = this.props;
    const action = a.mineBytes(byteCount, bytesPerClick);
    dispatch(action);
  }

  handleUpgradingBytesPerClick = () => {
    const { dispatch, bytesPerClick } = this.props;
    const action = a.upgradeBytesPerClick(bytesPerClick);
    dispatch(action);
  }

  getByteMetric = (count) => {
    const map = {
      'Bytes': count,
      'Kilobytes': (count/1024).toFixed(2),
      'Megabytes': (count/1024**2).toFixed(2),
      'Gigabytes': (count/1024**3).toFixed(2),
      'Tarabytes': (count/1024**4).toFixed(2),
      'Petabytes': (count/1024**5).toFixed(2),
      'Exabytes': (count/1024**6).toFixed(2),
      'Zettabytes': (count/1024**7).toFixed(2),
      'Yottabytes': (count/1024**8).toFixed(2),
      'Ronnabytes': (count/1024**9).toFixed(2),
      'Queccabytes': (count/1024**10).toFixed(2),
      'Brontobytes': (count/1024**11).toFixed(2),
      'Geobytes': (count/1024**12).toFixed(2),
      'Xonabytes': (count/1024**13).toFixed(2),
      'Wekabytes': (count/1024**14).toFixed(2),
      'Aurabytes': (count/1024**15).toFixed(2),
      'Coperbytes': (count/1024**16).toFixed(2),
      'Lizzabytes': (count/1024**17).toFixed(2),
      'Dexabytes': (count/1024**18).toFixed(2),
      'Fentabytes': (count/1024**19).toFixed(2),
      'Jobibytes': (count/1024**20).toFixed(2),
      'Paulabytes': (count/1024**21).toFixed(2),
      'Sentabytes': (count/1024**22).toFixed(2),
      'Antibytes': (count/1024**23).toFixed(2),
      'Hellabytes': (count/1024**24).toFixed(2)
    }
    const largestFactor = Object.keys(map).find(key => map[key] < 1024)
    const value = map[largestFactor]
    return `${value} ${largestFactor}`
  }

  render() {
    console.log(this.props)
    const byteCountFormatted = this.getByteMetric(this.props.byteCount)
    const bytesPerClickFormatted = this.getByteMetric(this.props.bytesPerClick)
    let currentlyVisibleState = 
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 align-center h-70'>
          <div className='card'>
            <BytesPanel bytes={byteCountFormatted} bytesPerClick={bytesPerClickFormatted}/>
            <button onClick = {this.handleMiningBytes}>Mine Bytes</button>
            <button onClick = {this.handleUpgradingBytesPerClick}>Upgrade</button>
          </div>
          
        </div>
        <div className='col-md-4 align-center'>
          <TypeUpgradesPanel/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 align-center'>
          <OtherInfoPanel/>
        </div>
        <div className='col-md-4 align-center'>
          <AutoUpgradesPanel/>
        </div>
      </div>
    </div>

    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    )
  }
}

MainController.propTypes = {
  byteCount: PropTypes.number,
  byteCountFormatted: PropTypes.string,
  bytesPerClick: PropTypes.number,
  bytesPerClickFormatted: PropTypes.string,
  bytesPerSecond: PropTypes.number,
  bytesPerSecondFormatted: PropTypes.string
}

const mapStateToProps = state => {
  return {
    byteCount: state.byteCount,
    byteCountFormatted: state.byteCountFormatted,
    bytesPerClick: state.bytesPerClick,
    bytesPerClickFormatted: state.bytesPerClickFormatted,
    bytesPerSecond: state.bytesPerSecond,
    bytesPerSecondFormatted: state.bytesPerSecondFormatted

  }
}

MainController = connect(mapStateToProps)(MainController)

export default MainController;