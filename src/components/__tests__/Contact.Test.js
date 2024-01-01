import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom';
import { describe } from "node:test";

// grouping test cases using describe

describe('Contact Us page test cases', () => {

  // `it` is just alias for `test`
  it('Should load contact us component', () => {

    render(<Contact />)

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
  });

  it('Should load button inside my contact component', () => {

    render(<Contact />)

    const button = screen.getByRole('button');

    // const button = screen.getByRole('button', {name: 'Submit'});

    expect(button).toBeInTheDocument();
  });

  test('Should load input name inside my contact component', () => {

    render(<Contact />)

    const inputName = screen.getByPlaceholderText('name');

    expect(inputName).toBeInTheDocument();
  });

  test('Should load all input boxes inside my contact component', () => {

    render(<Contact />)

    // Querying
    const inputBoxes = screen.getAllByRole('textbox');

    //Assertion
    expect(inputBoxes?.length).toBe(2);
  });
});