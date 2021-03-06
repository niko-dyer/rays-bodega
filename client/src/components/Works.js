import React from 'react'
import { Container, Header, Menu, Divider, Card, Image, Grid, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/bodegalogo.png'
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'

class Works extends React.Component {
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
            <div style={{ backgroundImage: "linear-gradient(to bottom right, WhiteSmoke, BurlyWood)" }}>
                <Menu fixed='top' pointing inverted>
                    <Link to='/'>
                        <Menu.Item>Home</Menu.Item>
                    </Link>
                    <Link to='/works'>
                        <Menu.Item active>Works</Menu.Item>
                    </Link>
                    <Link to='/shoes'>
                        <Menu.Item>Shoes</Menu.Item>
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
                        Works
                        </Header>
                {this.props.auth.authenticated === true ? 
                    <Link to='/works/new'>
                        <Button color='green' icon>
                            <Icon name='plus' />
                        </Button>
                    </Link> 
                    : null}
                    <Divider />
                    <Grid doubling stackable>
                        <Grid.Row stretched columns={3} mobile={1}>
                            {woodworks.map(woodwork => (
                                <Grid.Column key={woodwork.id} style={{ paddingTop: '1.5em' }}>
                                    <Card raised>
                                        <Image src={`https://robohash.org/${word}?set=set2`} />
                                        <Card.Content>
                                            <Link to={`/works/${woodwork.id}`}>
                                                <Card.Header>
                                                    {woodwork.name}
                                                </Card.Header>
                                            </Link>
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

const ConnectedWorks = (props) => (
    <AuthConsumer>
        { auth => 
            <Works { ...props } auth={auth} />
        }
    </AuthConsumer>
)

export default ConnectedWorks