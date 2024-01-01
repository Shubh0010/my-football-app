import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

it('should render header component with logo', () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  const settings = screen.getByText('Settings');

  expect(settings).toBeInTheDocument();
})

it('should change the button to login to logout', () => {

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  )

  // const loginButton = screen.getByRole('button', {name: 'login'});

  // fireEvent.click(loginButton);

  // const logoutButton = screen.getByRole('button', {name: 'logout'});

  // expect(logoutButton).toBeInTheDocument();

  // we can use regex with getByText

  // const logo = screen.getByText("")
})