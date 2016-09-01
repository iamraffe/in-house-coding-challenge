import React from 'react'

import LineChart from '../charts/lineChart/LineChart'

class BuilderCanvas extends React.Component{
  constructor(props, context){
    super(props, context)
  }

  render(){
    return (
      <div className="col-md-6 col-sm-8 col-md-offset-3 col-sm-offset-2 col-xs-12" style={{minHeight: 650, border: '1px solid black'}}>
        BuilderCanvas!
      </div>
    )
  }
}

export default BuilderCanvas