import React from 'react'
import axios from 'axios'
import { Image, Segment, Container, Header, Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pulse from '../assets/animations/Animations'

export default class WorkShow extends React.Component {
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