import React from 'react'
import { Container, Header, Menu, Divider, Card, Image, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/bodegalogo.png'
import axios from 'axios'

export default class Works extends React.Component {
    state = {
        shoes: []
    }

    componentDidMount() {
        axios
            .get('/api/shoes')
            .then(res => {
                this.setState({ shoes: res.data })
            })

    }

    render() {
        const { shoes } = this.state
        const word = 'hello'
        return (
            <div style={{ backgroundImage: 'url(http://baiseautun.com/wp-content/uploads/2018/10/wood-floor-pattern-simple-home-designs-luxurious-and-stone-patterns-for-nclex-800x425.jpg)', backgroundSize: 'cover'}}>
                <Menu pointing inverted>
                    <Link to='/'>
                        <Menu.Item>Home</Menu.Item>
                    </Link>
                    <Link to='/works'>
                        <Menu.Item>Works</Menu.Item>
                    </Link>
                    <Link to='/shoes'>
                        <Menu.Item active>Shoes</Menu.Item>
                    </Link>
                    <Link to='/clothes'>
                        <Menu.Item>Clothes</Menu.Item>
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon name='cart' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to='/'>
                            <Image circular size='medium' src={Logo} />
                        </Link>
                    </div>
                    <Header style={{ fontFamily: 'Cuprum', fontSize: '4em', letterSpacing: '0.2em' }} icon textAlign='center'>
                        Shoes
                        </Header>
                    <Divider />
                    <Grid doubling stackable>
                        <Grid.Row stretched columns={3} mobile={1}>
                            {shoes.map(shoe => (
                                <Grid.Column key={shoe.id} style={{ paddingTop: '1.5em' }}>
                                    <Card raised>
                                        <Image src={`https://robohash.org/${word}?set=set2`} />
                                        <Card.Content>
                                            <Link to={`/shoes/${shoe.id}`}>
                                                <Card.Header>
                                                    {shoe.name}
                                                </Card.Header>
                                            </Link>
                                            <Card.Meta>
                                                ${shoe.price}
                                            </Card.Meta>
                                            <Card.Description>
                                                {shoe.description}
                                            </Card.Description>
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