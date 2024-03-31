// Button.stories.js

import React from 'react';
import { Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/button.scss"


export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      },
    },
  },
};

const Template = ({ buttonText, variant }) => (
  <Col md={{ span: 6, offset: 3 }} className='my-3'>
    <Button variant={variant}>{buttonText}</Button>
  </Col>
);

export const Default = Template.bind({});
Default.args = {
  buttonText: "Click me",
  variant: "primary", // Default variant for the button
};
export const DangerBtn = Template.bind({});
DangerBtn.args = {
  buttonText: "alert",
  variant: "danger", // Default variant for the button
};