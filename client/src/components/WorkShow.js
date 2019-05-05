import React from 'react'
import axios from 'axios'
import { Image, Segment, Container, Header } from 'semantic-ui-react'
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
            <Container>
                <Segment>
                    <Segment as={Seg} circular inverted style={square}>
                        <Header as='h2' inverted>
                            Buy Now
                    <Header.Subheader>${work.price}</Header.Subheader>
                        </Header>
                    </Segment>
                    <Image centered src='https://robohash.org/word?set=set2' />
                    <Header textAlign='center'>{work.name}</Header>
                </Segment>
            </Container>
        )
    }
}

const Seg = styled(Segment)`
    animation: ${Pulse} linear 2s infinite
`