import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
class App extends Component{
   constructor(){
      super()
   }
   handleItemClick(){

   }
   render(){
     return(
        <div>
           {this.props.children}
        </div>
     )
   }
}

export default connect()(App)
