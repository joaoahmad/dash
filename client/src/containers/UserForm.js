import React from 'react'
import { reduxForm } from 'redux-form'
import Panel, { Header, Body } from '../components/UXPanel'
import Form, { Input, Submit, Row } from '../components/UXForm'
export const fields = [ 'name', 'email', 'username', 'password', 'role' ]

class UserForm extends React.Component{

    render(){
        const {
            fields: { name, email, username, password, role },
            submitting,
            resetForm,
            handleSubmit
        } = this.props

        console.log('submitting',submitting);

        return (
            <Panel>
                <Header title="Usuário" />
                <Body>
                    <Form ref='form' onSubmit={handleSubmit}>
                        <Row>
                            <Input type="text" label="Nome" {...name} />
                        </Row>
                        <Row>
                            <Input type="text" label="Email" {...email} />
                        </Row>
                        <Row>
                            <Input type="text" label="Usuário" {...username} />
                        </Row>
                        <Row>
                            <Input type="text" label="Senha" {...password} />
                        </Row>
                        <Row>
                            <Input type="text" label="Role" {...role} />
                        </Row>
                        <Submit submitting={submitting}>Salvar Alterações</Submit>
                    </Form>
                </Body>
            </Panel>
        )
    }
}



export default reduxForm({
    form: 'simple',
    fields
})(UserForm)
