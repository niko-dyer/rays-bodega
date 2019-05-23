import React from 'react'
import { Container, Header, Menu, Divider, Card, Image, Grid, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/bodegalogo.png'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider';

class Shoes extends React.Component {
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
            <div style={{ backgroundImage: "linear-gradient(to bottom right, BurlyWood, LightCyan)"}}>
                <Menu fixed='top' pointing inverted>
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
                <Divider hidden />
                <Divider hidden />
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to='/'>
                            <Image circular size='medium' src={Logo} />
                        </Link>
                    </div>
                    <Header style={{ fontFamily: 'Cuprum', fontSize: '4em', letterSpacing: '0.2em' }} icon textAlign='center'>
                        Shoes
                        </Header>
                    {this.props.auth.authenticated === true ? 
                        <Link to='/shoes/new'>
                            <Button color='green' icon>
                                <Icon name='plus' />
                            </Button>
                        </Link> 
                    : null}
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

const ConnectedShoes = (props) => (
    <AuthConsumer>
        { auth =>
            <Shoes { ...props } auth={auth} />
        }
    </AuthConsumer>
)

export default ConnectedShoes