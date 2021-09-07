/**
 * @jest-environment jsdom
 */

// import { render, screen, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
    beforeEach(() => {
        render(<App />);
    })

    test("like button says like intitially", () => {
        const LikeButton = screen.getByRole('Like');
        expect(LikeButton.textContent).toEqual("Like");
      });
})
