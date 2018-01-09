import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../components/ListItem'
class Home extends Component{
   constructor{

   }
   handleItemClick(){
      console.log(this)
   }
   render(){
     return(
        <div>
            ListItem.map((data,index)=><ListItem data={data} key={index} onClick={this.handleItemClick.bind(this)}></ListItem>)
        </div>
     )
   }
}
Home.propTypes={
    ListItem:PropTypes.array.isRequired
}
export default connect()(Home)