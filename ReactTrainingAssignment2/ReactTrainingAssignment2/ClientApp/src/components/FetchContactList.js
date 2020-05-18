import React, { Component } from 'react';

export class FetchContactList extends Component {
    static displayName = FetchContactList.name;

    constructor(props) {
        super(props);
        this.state = { contacts: []}; 
    }

    componentDidMount() {
        this.populateContactData();
    }

    static renderContactListTable(contacts) {
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
            : FetchContactList.renderContactListTable(this.state.contacts);

        return (
            <div>
                <h1 id="tabelLabel" >Contact List</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
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
