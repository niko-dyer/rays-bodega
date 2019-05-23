import React from 'react'
import axios from 'axios'
import { Form, Header } from 'semantic-ui-react'

export default class ShoeForm extends React.Component {
    state = { ...this.defaultValues }
    defaultValues = { name: '', price: 0, description: '', material: '', size: '' }

    componentDidMount() {
        const { match: { params: { id } } } = this.props
        if (id)
            axios.get(`/api/shoes/${id}`)
            .then( res => {
                this.setState({ name: res.data.name, price: res.data.price, description: res.data.description, material: res.data.material, size: res.data.size })
            })
    }

    handleChange = (e) => {
        const { target: { name, value } } = e
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { id } = this.props.match.params
        const shoe = this.state
        if (id) 
            axios.put(`/api/shoes/${id}`, shoe)
            .then( res => {
                this.props.history.push('/shoes')
            })
        else
            axios.post('/api/shoes', shoe )
                .then( res => {
                    this.props.history.push('/shoes')
                })
        this.setState({ ...this.defaultValues })
    }

    render() {
        return (
            <div>
                {
                    this.props.id ?
                        <Header as='h1'>Edit Shoe</Header>
                    :
                        <Header as='h1'>New Shoe</Header>
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
                        label='Material'
                        name='material'
                        placeholder='Material'
                        value={this.state.material}
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