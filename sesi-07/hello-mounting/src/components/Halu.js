import React from "react";

class Halu extends React.Component {
  constructor(props) {
    this.state = {
      count: 0,
      user: [],
      isLoading: true,
    };
  }
  shouldComponentUpdate(nextProps, nexState) {
    if (this.state.users.length != nexState.users.length) {
      return true;
    }
    return false;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.selectedState !== this.props.selectedState) {
      fetch("https://pathToapi.com")
        .then((resp) => resp.json())
        .then((respJson) => {
          // do what ever you swant with your 'response;
          this.setState({
            isLoading: false,
            data: respJson,
          });
          .catch(err=>{
            console.log(err)
          })
        });
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response)=> response.json())
        .then((data)=> this.setState({todos: data.slice(0,20)}))

    }
  }
  render(){
    return(
        <div>
            <table className="table">
                <tbody>
                    {
                        this.state.todos.map((todo, index)=>{
                            <tr key={index}>
                                <td>{todo.id}</td>
                                <td>{todo.title</td>
                                <td>{todo.completed ? "v" : "x"}</td>

                            </tr>
                        }
                    }
                </tbody>

            </table>
        </div>
    )
  }
}

export default Halu;
