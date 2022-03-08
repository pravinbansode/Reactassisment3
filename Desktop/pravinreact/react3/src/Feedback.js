import React,{Component} from "react";

 class Feedback extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return (<>
            <h1>Employee Feedback </h1>
            <div id="data">
                {this.props.data.map( (ele) => {
                    console.log(ele);
                    return (
                        <div id="combinedata">
                            <h3>{ele.count} : {ele.name} || {ele.dept} || {ele.rating} </h3>
                        </div>
                    );
                    })
                }
            </div>
            <button className="button" onClick={this.props.toggleFunc}>Go back</button>
        </>
    )
    }
}

export default Feedback;