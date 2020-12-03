import React from 'react';
import AutoUpgradesPanel from './AutoUpgradesPanel';
import BytesPanel from './BytesPanel';
import OtherInfoPanel from './OtherInfoPanel';
import TypeUpgradesPanel from './TypeUpgradesPanel';

class MainController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      byteCount: 0,
      bytesPerClick: 1
    }
  }

  handleMiningBytes = () => {
    this.setState({
      byteCount: this.state.byteCount + this.state.bytesPerClick
    })
  }

  handleUpgradingBytesPerClick = () => {
    this.setState({
      bytesPerClick: this.state.bytesPerClick * 2
    })
  }

  getByteMetric = () => {
    const map = {
      'Bytes': this.state.byteCount,
      'Kilobytes': (this.state.byteCount/10**3).toFixed(2),
      'Megabytes': (this.state.byteCount/10**6).toFixed(2),
      'Gigabytes': (this.state.byteCount/10**9).toFixed(2),
      'Tarabytes': (this.state.byteCount/10**12).toFixed(2),
      'Petabytes': (this.state.byteCount/10**15).toFixed(2),
      'Exabytes': (this.state.byteCount/10**18).toFixed(2),
      'Zettabytes': (this.state.byteCount/10**21).toFixed(2),
      'Yottabytes': (this.state.byteCount/10**24).toFixed(2),
      'Ronnabytes': (this.state.byteCount/10**27).toFixed(2),
      'Queccabytes': (this.state.byteCount/10**30).toFixed(2),
      'Brontobytes': (this.state.byteCount/10**33).toFixed(2),
      'Geobytes': (this.state.byteCount/10**36).toFixed(2),
      'Xonabytes': (this.state.byteCount/10**39).toFixed(2),
      'Wekabytes': (this.state.byteCount/10**42).toFixed(2),
      'Aurabytes': (this.state.byteCount/10**45).toFixed(2),
      'Coperbytes': (this.state.byteCount/10**48).toFixed(2),
      'Lizzabytes': (this.state.byteCount/10**51).toFixed(2),
      'Dexabytes': (this.state.byteCount/10**54).toFixed(2),
      'Fentabytes': (this.state.byteCount/10**57).toFixed(2),
      'Jobibytes': (this.state.byteCount/10**60).toFixed(2),
      'Paulabytes': (this.state.byteCount/10**63).toFixed(2),
      'Sentabytes': (this.state.byteCount/10**66).toFixed(2),
      'Antibytes': (this.state.byteCount/10**69).toFixed(2),
      'Hellabytes': (this.state.byteCount/10**72).toFixed(2)
    }
    const largestFactor = Object.keys(map).find(key => map[key] < 1000)
    const value = map[largestFactor]
    return `${value} ${largestFactor}`
  }

  render() {
    const byteMetric = this.getByteMetric()
    let currentlyVisibleState = 
    <div className='container'>
      <div className='row'>
        <BytesPanel bytes={byteMetric}/>
        <TypeUpgradesPanel/>
      </div>
      <div className='row'>
        <OtherInfoPanel/>
        <AutoUpgradesPanel/>
      </div>
    </div>

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleMiningBytes}>Mine Bytes</button>
        <button onClick = {this.handleUpgradingBytesPerClick}>Upgrade</button>
      </React.Fragment>
    )
  }
}

export default MainController;