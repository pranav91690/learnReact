import React, {Component} from 'react';
import { Header, Button } from 'semantic-ui-react';
import ButtonExampleButton from  './ButtonExampleButton';

export class HelloWorld extends Component {
    render(){
        return (
            <div className="hello-world">
                <h1>Hello Insta</h1>
                <h2>Hello Pranav Achanta</h2>
                <Header as='h5'>Heading 5</Header>
                <div>
                    <Button>Click Me</Button>
                </div> 
            </div>
        );
    }
}

export default HelloWorld;