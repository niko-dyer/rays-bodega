import React from 'react'
import axios from 'axios'
import { Image, Segment, Container, Header, Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pulse from '../assets/animations/Animations'
import { AuthConsumer } from '../providers/AuthProvider'

class ClothingShow extends React.Component {
    state = {
        clothing: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios
            .get(`/api/clothings/${id}`)
            .then(res => {
                this.setState({ clothing: res.data })
            })
    }

    deleteClothing = (id) => {
        axios 
            .delete(`/api/clothings/${id}`)
            .then( res => {
                this.props.history.push('/clothes')
            })
    }

    render() {
        const { clothing } = this.state
        const square = { width: 175, height: 175 }
        return (
            <div style={{ backgroundImage: 'linear-gradient(to bottom right, LightCyan, Maroon)' }}>
                <Container>
                    <Segment>
                        <Link to='/clothes'>
                            <Button compact attached='left' icon>
                                <Icon name='arrow left' />
                            </Button>
                        </Link>
                        {  this.props.auth.authenticated === true ?
                            <Button.Group>
                                <Button onClick={() => this.deleteClothing(clothing.id)} icon color='red'>
                                    <Icon name='trash' />
                                </Button>
                                <Button.Or />
                                <Link to={`/clothes/${clothing.id}/edit`}>
                                    <Button icon color='blue'>
                                        <Icon name='pencil' />
                                    </Button>
                                </Link>
                            </Button.Group>
                            :
                                null
                        }
                        <Header style={{ letterSpacing: '.2em' }} textAlign='center'>{clothing.name}</Header>
                        <Card style={{ float: 'right' }} raised>
                            <Card.Content>
                                <Card.Description>
                                    {clothing.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Card.Meta>{clothing.size}</Card.Meta>
                            </Card.Content>
                        </Card>
                        <Segment as={Seg} circular inverted style={square}>
                            <Header as='h2' inverted>
                                Add To Cart
                            <Header.Subheader>${clothing.price}</Header.Subheader>
                            </Header>
                        </Segment>
                        <Image centered size='large' src='https://robohash.org/word?set=set2' />
                    </Segment>
                </Container>
            </div>
        )
    }
}

const Seg = styled(Segment)`
    animation: ${Pulse} linear 2s infinite
`

const ConnectedClothingShow = (props) => (
    <AuthConsumer>
        { auth => 
            <ClothingShow { ...props } auth={auth} />
        }
    </AuthConsumer>
)

export default ConnectedClothingShow