import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/'
import store from '../../store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './NavBar.js'

const mockAuthState = {
  authenticated: false,
  email: '',
  image: '',
  loginData: {},
  name: '',
  password: '',
  userType: 'user'
}

const mockUserState = {
  artistID: '',
  homeStyle: 'All',
  selectedArtist: {},
  userData: {}
}

let mockProps

describe('Test NavBar Component', () => {
  beforeAll(() => {
    mockProps = {
      authState: mockAuthState,
      userState: mockUserState
    }
  })

  const navBarWithProvider = (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar props={mockProps} />
      </BrowserRouter>
    </Provider>
  )

  it('should render a NavBar instance', () => {
    render(navBarWithProvider)
  })

  it('should render a NavBar instance and verify nav elements', () => {
    mockProps.authState.authenticated = true
    render(navBarWithProvider)
    expect(screen.getAllByText('PROFILE').length).toBe(2)
    expect(screen.getByText('SHOPS')).toBeTruthy()
    expect(screen.getByText('INKWELL')).toBeTruthy()
    expect(screen.getByText('LOG OUT')).toBeTruthy()
  })

  it('should render a NavBar instance and verify profile elements styles', () => {
    mockProps.authState.userType = 'artist'
    render(navBarWithProvider)
  })

  it('should render a NavBar instance and test logout element', () => {
    render(navBarWithProvider)
    fireEvent.click(screen.getByText('LOG OUT'))
  })
})
