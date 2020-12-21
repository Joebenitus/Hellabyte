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

  componentDidMount() {
    
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

  handleUpgradingBytesPerSecond = () => {
    const { dispatch, bytesPerSecond } = this.props;
    const action = a.upgradeBytesPerSecond(bytesPerSecond);
    dispatch(action);
  }

  render() {
    let currentlyVisibleState = 
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 align-center h-70'>
          <div className='card'>
            <BytesPanel bytes={this.props.byteCountFormatted} bytesPerClick={this.props.bytesPerClickFormatted}/>
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
          <button onClick = {this.handleUpgradingBytesPerSecond}>Byte Counter</button>
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