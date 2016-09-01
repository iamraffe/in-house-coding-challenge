import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import d3 from 'd3'
import AxisLeft from './axis/AxisLeft'
import AxisBottom from './axis/AxisBottom'

class LineChart extends React.Component{
  constructor(props, context){
    super(props, context)
    console.log("DATA => ", props.data)
    // debugger;
    this.state = {
      height: props.height,
      margin: props.margin,
      width: props.width - props.margin.top - props.margin.bottom,
      xScale: d3.time.scale(),
      yScale: d3.scale.linear()
    }
  }

  componentDidMount(){

  }

  componentWillUnmount(){

  }

  handleResize = () => {
    // Complete for responsive
  }

  drawPath = (data, xScale, yScale) => {
    // Complete function
    return d3.svg.line()
  }

  render(){
    const { width, margin, height, yScale, xScale } = this.state

    return(
      <div className={`svg-linechart-wrapper col-xs-12`}>
        <svg
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
          style={{backgroundColor: '#fff'}}
        >
          <g>
            <AxisLeft yScale={yScale} width={width}/>
            <AxisBottom xScale={xScale} height={height}/>
          </g>
        </svg>
      </div>
    )
  }
}

export default LineChart