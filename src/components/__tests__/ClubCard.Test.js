import { render, screen } from "@testing-library/react";
import ClubCard from '../ClubCard';
import CLUB_MOCK_DATA from '../mocks/clubCardMock.json';
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render ClubCard component with props data", () => {

  render(
    <Provider store={appStore}>
      <ClubCard club={CLUB_MOCK_DATA}/>
    </Provider>
  );

  const clubName = screen.getByText('Manchester United');

  expect(clubName).toBeInTheDocument();
})
