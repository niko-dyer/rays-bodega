import React from 'react'
import { Container, Header, Icon, Divider, Card, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Works extends React.Component {
    state = {
        woodworks: []
    }

    componentDidMount() {
        axios
            .get('/api/woodworks')
            .then(res => {
                this.setState({ woodworks: res.data })
            })

    }

    render() {
        const { woodworks } = this.state
        const word = 'hello'
        return (
            <div style={{ backgroundImage: 'url(http://baiseautun.com/wp-content/uploads/2018/10/wood-floor-pattern-simple-home-designs-luxurious-and-stone-patterns-for-nclex-800x425.jpg)', backgroundSize: 'cover' }}>
                <Container>
                    <Header style={{color: 'white'}} size='huge' icon textAlign='center'>
                        <Icon circular size='huge' name='sitemap' />
                        Works
                </Header>
                    <Link to='/'>Home</Link>
                    <Divider />
                    <Grid doubling stackable>
                        <Grid.Row stretched columns={3} mobile={1}>
                            {woodworks.map(woodwork => (
                                <Grid.Column style={{ paddingTop: '1.5em' }}>
                                    <Card raised>
                                        <Image src={`https://robohash.org/${word}?set=set2`} />
                                        <Card.Content>
                                            <Card.Header>
                                                {woodwork.name}
                                            </Card.Header>
                                            <Card.Meta>
                                                ${woodwork.price}
                                            </Card.Meta>
                                            <Card.Description>
                                                {woodwork.description}
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            {woodwork.wood_type}
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            ))}
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}