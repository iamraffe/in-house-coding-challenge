import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as builderActions from '../actions/builderActions'
import BuilderControls from './builder/BuilderControls'
import BuilderCanvas from './builder/BuilderCanvas'

const data = [
  {
    "date": "2011-08-23T22:00:00.000Z",
    "value": 148,
    "id": null
  },
  {
    "date": "2012-08-23T22:00:00.000Z",
    "value": 90,
    "id": null
  },
  {
    "date": "2013-08-23T22:00:00.000Z",
    "value": 118,
    "id": null
  },
  {
    "date": "2014-08-23T22:00:00.000Z",
    "value": 82,
    "id": null
  },
  {
    "date": "2015-08-23T22:00:00.000Z",
    "value": 92,
    "id": null
  }
]

class Builder extends React.Component{
  constructor(props, context){
    super(props, context)
    console.log("Hey!")
  }

  addItem = (itemType) => {
    // addItem Logic
    // this.props.actions.addTextItem()
  }

  render(){
    return (
      <div className="row">
        <div className="col-xs-12">
          <header className="row">
            <BuilderControls addItem={this.addItem} />
          </header>
          <section className="row drop-zone">
            <BuilderCanvas />
          </section>
        </div>
      </div>
    )
  }
}

Builder.propTypes = {}

export default Builder