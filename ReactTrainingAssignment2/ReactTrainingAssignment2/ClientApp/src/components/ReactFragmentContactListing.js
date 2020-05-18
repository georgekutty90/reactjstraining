import React, { Component } from 'react';

export class ReactFragmentContactListing extends Component {
    static displayName = "React Fragments Example";

    constructor(props) {
        super(props);
        this.state = { contacts: []}; 
    }

    componentDidMount() {
        this.populateContactData();
    }

    static renderContactListTableFragment(contacts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contacts =>
                        <tr key={contacts.id}>
                            <td>{contacts.id}</td>
                            <td>{contacts.fullname}</td>
                            <td>{contacts.phone}</td>
                            <td>{contacts.email}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : ReactFragmentContactListing.renderContactListTableFragment(this.state.contacts);

        return (
            <React.Fragment>  
                <h1 id="tabelLabel" >Fragment Example</h1>
                <p>Fragments let you group a list of children without adding extra nodes to the DOM</p>
                {contents}
            </React.Fragment> 
        );
    }

    async populateContactData() {
        await fetch('api/ContactData/contacts')
            .then(response => response.json())
            .then(data => {
                this.setState({ contacts: data });
            });
    }
}
