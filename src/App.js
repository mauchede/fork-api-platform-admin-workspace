import React, {Component} from 'react';
import {HydraAdmin, ListGuesser, ResourceGuesser} from '@api-platform/admin';
import {TextField} from 'react-admin';

const BookListGuesser = props => {
    return (
        <ListGuesser {...props}>
            <TextField source={'description'} label={'description'} />
        </ListGuesser>
    );
};

const BookResourceGuesser = props => (
    <ResourceGuesser list={BookListGuesser} {...props} />
);

class App extends Component {
    render() {
        return (
            <HydraAdmin entrypoint="https://demo.api-platform.com">
                <BookResourceGuesser name={'books'} />
            </HydraAdmin>
        );
    }
}

export default App;
