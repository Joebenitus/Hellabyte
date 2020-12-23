import React from 'react';
import AutoUpgradesPanel from './AutoUpgradesPanel';
import BytesPanel from './BytesPanel';
import OtherInfoPanel from './OtherInfoPanel';
import TypeUpgradesPanel from './TypeUpgradesPanel';
import * as a from './../actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getByteMetric } from './GetByteMetric';
import './../App.scss'

class MainController extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setInterval(() => {
      const { dispatch, byteCount, bytesPerSecond } = this.props;
      dispatch(a.incrementBytesByBPS(byteCount, bytesPerSecond))
    }, 1000)
  }

  handleMiningBytes = () => {
    const { dispatch, byteCount, bytesPerClick } = this.props;
    const action = a.mineBytes(byteCount, bytesPerClick);
    dispatch(action);
  }

  handleUpgradingBytesPerClick = () => {
    const { dispatch, byteCount, bytesPerClick, bytesPerClickUpgradeCost } = this.props;
    const action = a.upgradeBytesPerClick(byteCount, bytesPerClick, bytesPerClickUpgradeCost);
    if (byteCount >= bytesPerClickUpgradeCost) {
      dispatch(action);
    } else {
      console.log('Not Enough Bytes!')
    }
  }

  handleUpgradingBytesPerSecond = () => {
    const { dispatch, bytesPerSecond } = this.props;
    const action = a.upgradeBytesPerSecond(bytesPerSecond);
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = 
    <>
      <div className='row'>
        <div className='col-md-6 align-center h-70'>
          <BytesPanel bytes={this.props.byteCountFormatted} bytesPerClick={this.props.bytesPerClickFormatted}/>
          <button onClick = {this.handleMiningBytes}>Mine Bytes</button>
        </div>
        <div className='col-md-6 align-center h-70'>
          <TypeUpgradesPanel onClickHandler={this.handleUpgradingBytesPerClick} cost={getByteMetric(this.props.bytesPerClickUpgradeCost)}/>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6 align-center'>
          <OtherInfoPanel/>
        </div>
        <div className='col-md-6 align-center'>
          <AutoUpgradesPanel onClickHandler={this.handleUpgradingBytesPerSecond}/>
        </div>
      </div>
    </>
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
  bytesPerSecondFormatted: PropTypes.string,
  bytesPerClickUpgradeCost: PropTypes.number
}

const mapStateToProps = state => {
  return {
    byteCount: state.byteCount,
    byteCountFormatted: state.byteCountFormatted,
    bytesPerClick: state.bytesPerClick,
    bytesPerClickFormatted: state.bytesPerClickFormatted,
    bytesPerSecond: state.bytesPerSecond,
    bytesPerSecondFormatted: state.bytesPerSecondFormatted,
    bytesPerClickUpgradeCost: state.bytesPerClickUpgradeCost
  }
}

MainController = connect(mapStateToProps)(MainController)

export default MainController;