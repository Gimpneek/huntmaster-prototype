import React from "react"
import Main from "../components/containers/Main"
import UserStore from "../stores/UserStore"
import Form from "../components/form/Form"
import TextInput from "../components/form/TextInput"
import TextArea from "../components/form/TextArea"
import Select from "../components/form/Select"

export default class UserProfilePage extends React.Component{
    constructor(){
        super();
        this.state = {
            user: UserStore.getUser()
        }
    }
    render(){
        const { user } = this.state;
        const titles = [
            {text: 'Mr.', value: 'mr'},
            {text: 'Mrs.', value: 'mrs'},
            {text: 'Miss', value: 'miss'},
            {text: 'Ms', value: 'ms'}
        ]
        return(
            <Main>
                <Form title="Edit Profile">
                    <Select field="title" label="Title" placeholder="How do people refer to you?" value={user.title} options={titles}/>
                    <TextInput field="firstName" label="First Name" placeholder="What do people call you?" value={user.firstName}/>
                    <TextInput field="lastName" label="Last Name" placeholder="What's your last name?" value={user.lastName}/>
                    <TextInput field="email" label="Email Address" placeholder="What's your email address?" value={user.email}/>
                    <TextInput field="phone" label="Phone number" placeholder="What number can people call you on?" value={user.phone}/>
                    <TextArea field="introduction" label="Introduction" value={user.introduction}/>
                </Form>
            </Main>
        )
    }
}