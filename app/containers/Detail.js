import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Detail extends Component{
   constructor{

   }
   static fetch (state, dispatch) {

   }

   render(){
     return(
        <div>
            <p>{content}</p>
        </div>
     )
   }
}
Detail.propTypes={
    content:PropTypes.string.isRequired
}
export default connect()(Detail)
