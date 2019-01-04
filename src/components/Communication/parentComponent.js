import React from 'react';
import ChildComonent from './childComponent';
import PropTypes from 'prop-types';
console.log(process.env);

class ParentComponent extends React.Component {
    constructor() {
        console.log('6 ParentCompo - in constructor')
        super();
        this.handleData = this.handleData.bind(this);
        this.state = {
            fromChild: '',
            color: "blue",
            childData: [],
            hasError: false,
            persons: []
        };

        this.jsonToPass = {
            msg: 'hello child component, message from parent component!!',
            color: 'red'
        }
        // this.onChangeTextColor = this.onChangeTextColor.bind(this);
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
        // Display fallback UI
        this.setState({ hasError: true });
    }

    componentWillMount() {
        console.log('7 ParentCompo - component will mount')
    }

    componentDidMount() {
        // BaseComponnet.handleError();
        console.log('9 ParentCompo - component did mount');
        try {
            fetch('https://jsonplaceholder.typicode.com/posts/1/comments',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                .then((response) => response.json())
                .then((findresponse) => {
                    console.log(findresponse)
                })

            //using axios
            // axios.get('sample.json')
            //     .then(res => {
            //         console.log(res)
            // const persons = res.data;
            // this.setState({ persons });
            // })

        } catch (error) {
            console.log(error)
        }

    }


    onChangeTextColor(e) {
        var newColor = e.target.value;
        this.setState({ color: newColor });
    }

    handleData(data) {
        this.setState({
            fromChild: data
        });

    }
    passToChild(response) {
        console.log(response)
        this.setState({ childData: response })
    }


    render() {
        console.log('8 ParentCompo - in render')
        return (
            <div>
                {/* parent to child communication */}

                {/* <container-wrapper>
                    <ChildComponent inputVal={this.state.color} />
                    Enter your color name <input type="text" value={this.state.color} onChange={(e) => this.onChangeTextColor(e)} />
                    <h5>We have set input value is {this.state.color} inside Parent Component</h5>
                </container-wrapper> */}

                <h4>Parent To Child Communication Example</h4>
                <button onClick={() => { this.passToChild(this.jsonToPass) }}>Pass data to child</button>

                {/* child to parent communication */}

                <ChildComonent handlerFromParant={this.handleData} childData={this.state.childData} />
                <h3>Received by parent:<br />{this.state.fromChild}</h3>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('10 ParentCompo - component will unmount')
    }
}

ParentComponent.propTypes = {
    name: PropTypes.string,
    body: PropTypes.number,
    email: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    postId: PropTypes.number
};

export default ParentComponent;