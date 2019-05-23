import React from 'react'
import axios from 'axios'
import { Form, Header } from 'semantic-ui-react'

export default class WorkForm extends React.Component {
    state = { ...this.defaultValues }
    defaultValues = { name: '', price: 0, description: '', wood_type: '', size: '' }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        if (id)
            axios.get(`/api/woodworks/${id}`)
            .then( res => {
                this.setState({ name: res.data.name, price: res.data.price, description: res.data.description, wood_type: res.data.wood_type, size: res.data.size })
            })
    }

    handleChange = (e) => {
        const { target: { name, value } } = e
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { match: { params: { id } } } = this.props
        const work = this.state
        if (id) 
            axios.put(`/api/woodworks/${id}`, work)
            .then( res => {
                this.props.history.push(`/works/${id}`)
            })
        else
            axios.post('/api/woodworks', work )
                .then( res => {
                    this.props.history.push('/works')
                })
        this.setState({ ...this.defaultValues })
    }

    render() {
        return (
            <div>
                {
                    this.props.id ?
                        <Header as='h1'>Edit Woodwork</Header>
                    :
                        <Header as='h1'>New Woodwork</Header>
                }
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        label='Name'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input
                        label='Price'
                        name='price'
                        placeholder='Price'
                        value={this.state.price}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input
                        label='Description'
                        name='description'
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input
                        label='Wood Type'
                        name='wood_type'
                        placeholder='Wood Type'
                        value={this.state.wood_type}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Input
                        label='Size'
                        name='size'
                        placeholder='Size'
                        value={this.state.size}
                        onChange={this.handleChange}
                        required
                    />
                    <Form.Button color='blue'>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}