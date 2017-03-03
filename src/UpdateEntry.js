import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import './UpdateEntry.css';
import Index6 from './Index6.js';
import Index7 from './Index7.js';
import Index5 from './Index5.js';

class UpdateEntry extends Component {

  constructor(props) {
                        super(props);
                  this.state = {surveys:[],};

                  this.handleUpdate=this.handleUpdate.bind(this);
                  // this.updatename=this.updatename.bind(this);
                  //   this.updatedescription=this.updatedescription.bind(this);
                  //     this.updatedate=this.updatedate.bind(this);

     }






     handleUpdate(id){
        console.log(id);

                               fetch('http://localhost:9000/Surveys/'+ id, {
                                 method: 'PUT',
                                 headers: {
                                    "Content-Type": "application/json",
                                    "Accept":"application/json"
                                 },
                                 body: JSON.stringify({
                                   sname:sname.value,
                                   sdescription:sdescription.value,
                                   date:date.value
                                 })
                               })
                               alert("survey updated!!!!");

                     }

                    //  updatename(e){
                    //   this.setState({sname:e.target.value});
                    //  }
                    //  updatedescription(e){
                    //   this.setState({sdescription:e.target.value});
                    //  }
                    //  updatedate(e){
                    //   this.setState({date:e.target.value});
                    //  }
                     handleBack()
                     {
                        var c=document.getElementById("content");
                        ReactDOM.render(<Index5/>,c);

                     }

     componentWillMount(){

        fetch(`http://localhost:9000/Surveys`)
        .then(response => response.json())
        .then(json=>this.setState({surveys:json}))

     }


  render() {
      var id=this.props.sid;

      return (


            <div className="UpdateEntry w3-container">

                <h2><b>Update Survey</b></h2><br/><br/>
                  {this.props.uid}
                    <input type="text" id="sname" defaultValue={this.props.sname}  className="w3-input" ref="name" placeholder="surveyname"/><br/><br/>
                    <input type="text" id="sdescription" defaultValue ={this.props.sdesc}  mode="multiline" ref="description" className="w3-input" placeholder="description"/><br/><br/>
                    <input type="text" id="date" defaultValue={this.props.date}  className="w3-input" ref="date" placeholder="final date"/><br/><br/>
                    <button  className="w3-btn w3-round-large w3-large" onClick={()=>this.handleUpdate(id)}>Update</button>&nbsp;&nbsp;&nbsp;
                    <button className="w3-btn w3-round-large w3-large" onClick={()=>this.handleBack()}>Back</button>

                    <br/>

             </div>



           );
}
}


export default UpdateEntry;
