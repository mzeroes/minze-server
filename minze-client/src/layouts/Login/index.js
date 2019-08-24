import React from 'react'
import { Layout } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import styles from './style.module.scss'

@withRouter
class LoginLayout extends React.PureComponent {
  state = {
    backgroundNumber: 1,
    backgroundEnabled: false,
  }

  changeBackground = () => {
    const { backgroundNumber } = this.state
    this.setState({
      backgroundEnabled: true,
      backgroundNumber: backgroundNumber === 5 ? 1 : backgroundNumber + 1,
    })
  }

  toggleBackground = () => {
    const { backgroundEnabled } = this.state
    this.setState({
      backgroundEnabled: !backgroundEnabled,
    })
  }

  render() {
    const { children } = this.props
    const { backgroundNumber, backgroundEnabled } = this.state

    return (
      <Layout>
        <Layout.Content>
          <div
            className={`${styles.layout} ${styles.light}`}
            style={{
              backgroundImage: `url('/resources/images/header.svg')`,
              backgroundSize: 'cover'
            }}
          >
            <div className={styles.header}>
              <div className={styles.logo}>
                <Link to="/">
                  {!backgroundEnabled && <img src="/resources/images/logo-inverse.png" alt="Minze Admin" />}
                  {backgroundEnabled && (
                    <img src="/resources/images/logo-inverse.png" alt="Minze Admin" />
                  )}
                </Link>
              </div>
              {/* <div className={styles.controls}>
                <div className="d-inline-block mr-3">
                  <Button type="default" onClick={this.changeBackground}>
                    Change Background
                  </Button>
                </div>
                <div className="d-inline-block">
                  <Button type="default" onClick={this.toggleBackground}>
                    Toggle Background
                  </Button>
                </div>
              </div> */}
              {/* <nav className={styles.navigation}>
                <ul className={styles.navigationItems}>
                  <li>
                    <a href="javascript: void(0);">&larr; Back</a>
                  </li>
                  <li>
                    <a className={styles.navigationActive} href="javascript: void(0);">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="javascript: void(0);">About</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);">Support</a>
                  </li>
                </ul>
              </nav> */}
            </div>
            <div className={styles.content}>{children}</div>
            {/*
            <div className={`${styles.footer} text-center`}>
              <ul className="list-unstyled list-inline mb-3">
                <li className="list-inline-item">
                  <a href="javascript: void(0);">Terms of Use</a>
                </li>
                <li className="active list-inline-item">
                  <a href="javascript: void(0);">Compliance</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);">Confidential Information</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);">Support</a>
                </li>
                <li className="list-inline-item">
                  <a href="javascript: void(0);">Contacts</a>
                </li>
              </ul>
            </div> */}
          </div>
        </Layout.Content>
      </Layout>
    )
  }
}

export default LoginLayout
