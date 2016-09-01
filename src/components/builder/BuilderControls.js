import React from 'react'

class BuilderControls extends React.Component{
  constructor(props, context){
    super(props, context)
    this.addItem = props.addItem
  }

  render(){
    return (
      <div className="">
        <button onClick={() => this.addItem('text')}>Add Text Item</button>
      </div>
    )
  }
}

export default BuilderControls