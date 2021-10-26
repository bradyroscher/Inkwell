import React from 'react'
import { render } from '@testing-library/react'
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

const mockProps = {
  authState: mockAuthState,
  userState: mockUserState
}

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

describe('Test NavBar Component', () => {
  it('should render a NavBar instance ', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar props={mockProps} />
        </BrowserRouter>
      </Provider>
    )
  })
})
