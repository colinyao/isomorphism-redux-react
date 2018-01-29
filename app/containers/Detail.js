import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Detail extends Component{
   constructor(){
       super()
       this.state={
           content:''
       }
   }
   static fetch (state, dispatch) {

   }
   render(){
     return(
        <div>
            <p>{this.state.content}</p>
        </div>
     )
   }
}
Detail.propTypes={
    content:PropTypes.string.isRequired
}
export default connect()(Detail)
