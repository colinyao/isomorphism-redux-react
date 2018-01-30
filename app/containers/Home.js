import React,{Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import ListItem from '../components/ListItem'
import {queryList} from '../actions'
class Home extends Component{
   constructor(){
      super()
   }
   static fetch(state,dispatch){
       const prefetchTasks=[];
       prefetchTasks.push(queryList(state,dispatch))
       return prefetchTasks
   }
   componentDidMount(){
      if(!this.props.load){
         this.constructor.fetch(this.props,this.props.dispatch)
      }
   }
   handleItemClick(){

   }
   render(){

     return(
        <div>
            <p>这是首页s</p>
            <img src="../../static/bigimage00.jpg" alt=""/>
            {this.props.list.map((data,index)=><ListItem data={data} key={index} onClick={this.handleItemClick.bind(this)}></ListItem>)}
        </div>
     )
   }
}
Home.propTypes={
   list:PropTypes.array.isRequired
}
const mapPropToState=(state)=>{
  return{
      list:state.home.list,
      load:state.home.load
  }
}
export default connect(mapPropToState)(Home)
