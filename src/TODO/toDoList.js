import React,{Component} from'react';

class ToDoList extends Component{

  constructor(){
      super();
      this.state={
         userInput:"",
         items:[]
      }
  }
// declaration of user value

onChange(event){

   this.setState({
       userInput:event.target.value
   },()=>console.log(this.state.userInput))

}

//  add the item inside a list

 addTodo(event){
    event.preventDefault()
       this.setState({
     
         userInput:'',

        items:[...this.state.items,this.state.userInput]   
       },()=>console.log(this.state))
 }
// delete the item when you created

   deleteTodo(event){
       event.preventDefault();

      const array= this.state.items;
      const index = array.indexOf(event.target.value);
      array.splice(index, 1);
       this.setState({
           items:array
       })
      
    }

// ***her you have to map the item,write all the description you own

  renderTOdo(){
      return this.state.items.map((item)=>{
          return(
              <div className="list-group-item active"key= {item}>
                  {item}|<button onClick={this.deleteTodo.bind(this)}>*</button>
                  </div>
          ) 
        
      })
  }

    render(){
        return(
            <div>
                <h1 align="center">write your ToDoList her!!!!!!</h1>
                
                <from className="form-row align-items-center">

                     <input
                      value={this.state.userInput} 
                        type="text" 
                          placeholder="add items"
                          onChange={this.onChange.bind(this)}
                          className="form-control mb-2"
                          />
           
                    <button 
                     className="btn btn-primary"
                    onClick={this.addTodo.bind(this)} >submit</button>
                    
                </from>

                <div className="list-group">
                    
                    {this.renderTOdo()}
                </div>
                
                </div>
        )
    }
}

export default ToDoList;