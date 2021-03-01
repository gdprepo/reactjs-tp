
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {disconnectUser} from '../User/userEffects'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
    id: "navbarSupportedContent"
})``

const List = styled.div.attrs({
    className: 'navbar-nav me-auto',
})``

const Item = styled.div.attrs({
    className: 'nav-item',
})``

// FIXME This doesn't work, as usual
const Button = styled.div.attrs({
  className: 'navbar-toggler',
  type:"button",
  'data-bs-toggle':"collapse",
  'data-bs-target': "#navbarSupportedContent",
  'aria-controls': "navbarSupportedContent",
  'aria-expanded': "false",
  'aria-label': "Toggle navigation"
})``

const Links = ({auth}) => {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Blind test
                </Link>
                <Button>
                  <span className="navbar-toggler-icon"></span>
                </Button>
                <Collapse>
                    <List>
                        <Item>{ !auth ? 
                          (<Link to="/auth" className="nav-link">
                                Sign in
                            </Link>) :
                            (<Link to="/profile" className="nav-link">
                                Mon profil
                            </Link>)
                        }
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
}

export default Links