import React from 'react'
import axios from 'axios'
import { Image, Segment, Container, Header, Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pulse from '../assets/animations/Animations'

export default class WorkShow extends React.Component {
    state = {
        shoe: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios
            .get(`/api/shoes/${id}`)
            .then(res => {
                this.setState({ shoe: res.data })
            })
    }

    render() {
        const { shoe } = this.state
        const square = { width: 175, height: 175 }
        return (
            <div style={{ backgroundImage: 'url(http://baiseautun.com/wp-content/uploads/2018/10/wood-floor-pattern-simple-home-designs-luxurious-and-stone-patterns-for-nclex-800x425.jpg)', backgroundSize: 'cover' }}>
                <Container>
                    <Segment>
                        <Link to='/shoes'>
                            <Button compact attached='left' icon>
                                <Icon name='arrow left' />
                            </Button>
                        </Link>
                        <Header style={{ letterSpacing: '.2em' }} textAlign='center'>{shoe.name}</Header>
                        <Card style={{ float: 'right' }} raised>
                            <Card.Content>
                                <Card.Description>
                                    {shoe.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Card.Meta>{shoe.size}</Card.Meta>
                            </Card.Content>
                        </Card>
                        <Segment as={Seg} circular inverted style={square}>
                            <Header as='h2' inverted>
                                Add To Cart
                            <Header.Subheader>${shoe.price}</Header.Subheader>
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