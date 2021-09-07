import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

global.React = React;
global.render = render;
global.screen = screen;
global.userEvent = userEvent;
