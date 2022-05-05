import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss'

const Navigation = () => {
    return (
        // helpful for outer parent
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container'to='/' >
                <CrwnLogo className='logo' />
            </Link>
          <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>
                  SHOP
              </Link>
              <Link className='nav-link' to='/auth'>
                  SIGN-IN
              </Link>
          </div>
        </div>
        {/* Outlet allows the elements of page to change for certain routes */}
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation