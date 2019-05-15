import React from 'react'
import axios from 'axios'
import { Image, Segment, Container, Header, Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Pulse from '../assets/animations/Animations'

export default class WorkShow extends React.Component {
    state = {
        work: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params
        axios
            .get(`/api/woodworks/${id}`)
            .then(res => {
                this.setState({ work: res.data })
            })
    }

    render() {
        const { work } = this.state
        const square = { width: 175, height: 175 }
        return (
            <div style={{ backgroundImage: 'linear-gradient(to bottom right, WhiteSmoke, BurlyWood)' }}>
                <Container>
                    <Segment>
                        <Link to='/works'>
                            <Button compact attached='left' icon>
                                <Icon name='arrow left' />
                            </Button>
                        </Link>
                        <Header style={{ letterSpacing: '.2em' }} textAlign='center'>{work.name}</Header>
                        <Card style={{ float: 'right' }} raised>
                            <Card.Content>
                                <Card.Description>
                                    {work.description}
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Card.Meta>{work.size}</Card.Meta>
                            </Card.Content>
                        </Card>
                        <Segment as={Seg} circular inverted style={square}>
                            <Header as='h2' inverted>
                                Add To Cart
                            <Header.Subheader>${work.price}</Header.Subheader>
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