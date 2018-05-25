import React, {Component} from 'react';
import { Header, Button } from 'semantic-ui-react';
export class HelloWorld extends Component {
    render(){
        return (
            <div className="hello-world">
                <h1>Hello Instagram</h1>
                <h2>Hello Pranav</h2>
                <Header as='h5'>Heading 5</Header>  
            </div>
        );
    }
}

export default HelloWorld;