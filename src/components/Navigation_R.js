import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { NavigationWrapper } from "./styles/Navigation_RStyles"

const Navigation = ({ menu }) => (
  <NavigationWrapper>
    <ul>
      {menu.items.map((item, i) => (
        <li key={i}>
          <Link to={item.object_slug} activeClassName="nav-active">
            {item.title}
          </Link>
          {item.wordpress_children ? (
            <>
              <span>&#8964;</span>
              <ul>
                {item.wordpress_children.map((child, iChild) => (
                  <li key={iChild}>
                    <Link to={child.object_slug} activeClassName="nav-active">
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  </NavigationWrapper>
)

Navigation.propTypes = {
  menu: PropTypes.object,
}

export default Navigation
