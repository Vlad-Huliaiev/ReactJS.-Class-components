import React, {Component} from "react";
import "./contacts.css";
import Contact from "./contact.js";

const contactsMock = [{
        firstName: "Барней",
        lastName: "Стинсовський",
        phone: "+380956319521",
        gender: "male",
        id: 1
    }, {
        firstName: "Робін",
        lastName: "Щербатська",
        phone: "+380931460123",
        gender: "female",
        id: 2
    }, {
        firstName: "Анонімний",
        lastName: "Анонімус",
        phone: "+380666666666",
        id: 3
    }, {
        firstName: "Лілія",
        lastName: "Олдровна",
        phone: "+380504691254",
        gender: "female",
        id: 4
    }, {
        firstName: "Маршен",
        lastName: "Еріксонян",
        phone: "+380739432123",
        gender: "male",
        id: 5
    }, {
        firstName: "Теодор",
        lastName: "Мотсбес",
        phone: "+380956319521",
        gender: "male",
        id: 6
    }];

    export default class Contacts extends Component{
        state = {
            contacts: [...contactsMock],
            search: ''
        }

        updateSearch = (event) => {
            this.setState({search: event.target.value});
        }

        render(){
            const filteredContacts = this.state.contacts.filter(
                (user) => {
                    return (
                        user.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                        user.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
                        user.phone.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
                    )
//                    let a = user.firstName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//                    let b = user.lastName.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//                    return a + b;
                }
            );
            return(
                <div className="contacts-wrapper">
                <p>
                    <input value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                </p>
                {filteredContacts.map((contact) => {
                    return(
                        <Contact firstName={contact.firstName} lastName={contact.lastName} phone={contact.phone} gender={contact.gender}/>
                    )
                })}
                </div>
            )
        }
    }



