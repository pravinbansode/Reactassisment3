import React, {Component} from "react";
import "./Form.css";
import Feedback from "./Feedback";

export class Form extends Component {


   constructor(props){
       super(props)
       this.state = {
        clicked:false,
        name:'',
        dept:'',
        rating:'',
        count:1,
        array:[]
        };
   }


    onInputChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    toggleFormClick = () => {
        this.setState({clicked:!this.state.clicked})
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log("data")
        let temp_obj = {
            name:this.state.name,
            dept:this.state.dept,
            rating:this.state.rating,
            count:this.state.count
        };

        this.state.array.push(temp_obj);

        this.setState({
            clicked:true,
            name:"",
            dept:"",
            rating:"",
            count:this.state.count +1
        }); 
    } 
    

    render(){
        return(
            <div id="box1">
                {!this.state.clicked ? 
                <div>
                    
                    <form>
                        <label >Name :</label>
                        <input className="box" type="text" id="name" value={this.state.value} name="name" onChange={this.onInputChange}/>
                         <br/><br/>

                        <label >Email :</label>
                        <input className="box" type="Email" id="name" value={this.state.value} name="name" onChange={this.onInputChange}/>
                          <br/><br/>
                        <label >Department :</label>
                        <input className="box" type="text" name="dept" value={this.state.value} id="dept" onChange={this.onInputChange}/>
                        <br/><br/>
                        <label >Rating :</label>
                        <input className="box" type="number" id="rate" value={this.state.value} name="rating" onChange={this.onInputChange}/>
                        <br/>
                        <button className="button" type="submit" onClick={this.onFormSubmit.bind(this)}>Submit</button>
                    </form>
                </div> : 
                    <Feedback data={this.state.array} toggleFunc={this.toggleFormClick} />
                    }
            </div>
        )
    }
}
