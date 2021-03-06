import React,{Component} from 'react'
import PropTypes from 'prop-types'

class ListItem extends Component{
   render(){
       let {title,abstract,date}=this.props.data
       return(
         <div><h3>{title}</h3><p>{abstract}</p><p><span>{date}</span></p></div>
       )
   }
}
ListItem.propTypes={
    data:PropTypes.object.isRequired
}
export default ListItem
