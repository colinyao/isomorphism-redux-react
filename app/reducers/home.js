let initialData={}

export default (state=initialData,action)=>{
     switch(action.type){
         case 'SET_HOME_DATA':
            return {...state,...action.payload,load:true}
            break;
          default:
             return state;

     }
}
