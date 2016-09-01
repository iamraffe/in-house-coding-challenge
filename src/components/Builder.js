import React from 'react';

import LineChart from './charts/lineChart/LineChart'

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

  render(){
    return (<LineChart
              data={data}
              width={575}
              height={550}
              margin={{top: 100, right: 35, bottom: 100, left: 35}}
            />
    )
  }
}

export default Builder;