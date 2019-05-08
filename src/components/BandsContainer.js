import React, { Component } from 'react'
import BandInput from './BandInput';
import Band  from './Band'

import { connect } from 'react-redux'

class BandsContainer extends Component {
  // displayBands() {
  //   return this.props.bands.map(band => <Band delete={this.props.delete} key={band.id} band={band} />)}
  render() {
    const renderBands = () => this.props.bands.map(band => <Band key={band.id} delete={this.props.deleteBand} band={band} />)

    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  deleteBand: id => dispatch({ type: "DELETE_BAND", id })
})
