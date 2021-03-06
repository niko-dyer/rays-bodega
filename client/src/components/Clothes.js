import React from 'react'
import { Container, Header, Menu, Divider, Card, Image, Grid, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/bodegalogo.png'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'

class Clothes extends React.Component {
    state = {
        clothes: []
    }

    componentDidMount() {
        axios
            .get('/api/clothings')
            .then(res => {
                this.setState({ clothes: res.data })
            })

    }

    render() {
        const { clothes } = this.state
        const word = 'hello'
        return (
            <div style={{ backgroundImage: 'linear-gradient(to bottom right, LightCyan, Maroon)' }}>
                <Menu fixed='top' pointing inverted>
                    <Link to='/'>
                        <Menu.Item>Home</Menu.Item>
                    </Link>
                    <Link to='/works'>
                        <Menu.Item>Works</Menu.Item>
                    </Link>
                    <Link to='/shoes'>
                        <Menu.Item>Shoes</Menu.Item>
                    </Link>
                    <Link to='/clothes'>
                        <Menu.Item active>Clothes</Menu.Item>
                    </Link>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon name='cart' />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Divider hidden />
                <Divider hidden />
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to='/'>
                            <Image circular size='medium' src={Logo} />
                        </Link>
                    </div>
                    <Header style={{ fontFamily: 'Cuprum', fontSize: '4em', letterSpacing: '0.2em' }} icon textAlign='center'>
                        Clothes
                        </Header>
                    {this.props.auth.authenticated === true ?
                        <Link to='/clothes/new'>
                            <Button color='green' icon>
                                <Icon name='plus' />
                            </Button>
                        </Link>
                        : null}
                    <Divider />
                    <Grid doubling stackable>
                        <Grid.Row stretched columns={3} mobile={1}>
                            {clothes.map(cloth => (
                                <Grid.Column key={cloth.id} style={{ paddingTop: '1.5em' }}>
                                    <Card raised>
                                        <Image src={`https://robohash.org/${word}?set=set2`} />
                                        <Card.Content>
                                            <Link to={`/clothes/${cloth.id}`}>
                                                <Card.Header>
                                                    {cloth.name}
                                                </Card.Header>
                                            </Link>
                                            <Card.Meta>
                                                ${cloth.price}
                                            </Card.Meta>
                                            <Card.Description>
                                                {cloth.description}
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

const ConnectedClothes = (props) => (
    <AuthConsumer>
        { auth => 
            <Clothes { ...props } auth={auth} />
        }
    </AuthConsumer>
)

export default ConnectedClothes