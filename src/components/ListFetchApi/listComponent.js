import React from 'react';
import { Row, Col } from 'react-simple-flex-grid';
// import "../../node_modules/react-simple-flex-grid/lib/main.css";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, models: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                return response.json();
            })
            .then(json => {
                console.log(json)
                this.setState({
                    models: json,
                    isLoaded: true
                });
                console.log(this.setState)
            })
            .catch(err => console.log(err));
    }

    render() {
        const { isLoaded, models } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return <div>
            <Row gutter={20}>
                {models.map(model =>
                    <Col span={3} key={model.id} style={{ padding: '6px' }} >
                        <Card>
                            <CardContent>
                                {/* If function without parameter onClick={this.navigate} */}
                                <span onClick={() => this.navigate('testParam')}>{model.id}. {model.title}</span>
                            </CardContent>
                        </Card>
                    </Col>
                )}
            </Row>
        </div>;
    }

    navigate(param) {
        console.log(param, '  in navigate function')
        //to navigate 
        this.props.history.push('/Home')
    }
}

export default ListComponent;