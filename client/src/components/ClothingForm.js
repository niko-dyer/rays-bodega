import React from 'react'
import axios from 'axios'
import { Form, Header } from 'semantic-ui-react'

export default class ClothingForm extends React.Component {
    state = { ...this.defaultValues }
    defaultValues = { name: '', price: 0, description: '', material: '', size: '' }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id)
            axios.get(`/api/clothings/${id}`)
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
        const clothing = this.state
        if (id) 
            axios.put(`/api/clothings/${id}`, clothing)
            .then( res => {
                this.props.history.push(`/clothes/${id}`)
            })
        else
            axios.post('/api/clothings', clothing )
                .then( res => {
                    this.props.history.push('/clothes')
                })
        this.setState({ ...this.defaultValues })
    }

    render() {
        return (
            <div>
                {
                    this.props.match.params.id ?
                        <Header as='h1'>Edit Clothing</Header>
                    :
                        <Header as='h1'>New Clothing</Header>
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

