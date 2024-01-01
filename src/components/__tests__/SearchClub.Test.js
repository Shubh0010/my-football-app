import { fireEvent, render, screen } from "@testing-library/react"
import Body from '../Body';
import CLUBS_MOCK_DATA from '../mocks/allClubData.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(CLUBS_MOCK_DATA);
    }
  })
});

it('should search club list for United input', async () => {

  // we get the fetch error, coz we are not simulating in Browser, and fetch comes from browser

  // if we have fetch function or state variables, we need to use `act`

  await act(async () => render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  ));

  const clubsBeforeSearch = screen.getAllByTestId('club-card');

  expect(clubsBeforeSearch.length).toBe(20);

  const searchButton = screen.getByRole('button', { name: 'Search' });

  const searchInput = screen.getByTestId('club-search-input');

  fireEvent.change(searchInput, { target: { value: 'United' } });

  fireEvent.click(searchButton);

  const clubs = screen.getAllByTestId('club-card');

  expect(clubs.length).toBe(4);
})

it('should filter top 10 clubs', async () => {

  await act(async () => render(
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  ));

  const clubsBeforeFilter = screen.getAllByTestId('club-card');

  expect(clubsBeforeFilter.length).toBe(20);

  const filterButton = screen.getByRole('button', { name: 'Top 10 Premier League Clubs' });

  fireEvent.click(filterButton);

  const clubs = screen.getAllByTestId('club-card');

  expect(clubs.length).toBe(10);
})