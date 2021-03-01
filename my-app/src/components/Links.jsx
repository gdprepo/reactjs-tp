
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";

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
  const player = useSelector((state) => state.user.player);

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
                        <Item >{ !auth ? 
                          (<Link to="" className="nav-link">
                                S'identifier
                            </Link>) :
                            (<Link style={{ width: "160px" }} to="/profile" className="nav-link">
                                Mon profil
                                <img style={{ width:"30%", marginLeft: "20px", borderRadius: "100%" }} src={player.avatar} alt="User avatar" />

                            </Link>)
                        }

                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
}

export default Links