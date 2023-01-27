import React from 'react';

class Welcome extends React.Component {
   render() {
    return (
        <div>
            <ul>
                <li>Name: {this.props.name}</li>
                <li>Age: {this.props.age}</li>
                <li>ID: {this.props.id}</li>
            </ul>
        </div>
    );
   }
}

export default Welcome;