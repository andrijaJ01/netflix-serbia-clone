// EmailForm.stories.js

import React from 'react';
import { Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import EmailForm from '../Components/HeroSection/EmailForm';

export default {
  title: 'EmailForm',
  component: EmailForm,
  argTypes: {
    buttonTextVariant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      },
    },
  },
};

const Template = ({ buttonText, buttonTextVariant, placeholder }) => (
  <Col md={{ span: 6, offset: 3 }} className='my-3 '>
    <InputGroup className="mb-3 p-3">
      <FormControl className='p-2' type="email" placeholder={placeholder} />
      <Button variant={buttonTextVariant}>{buttonText} {'>'}</Button>
    </InputGroup>
  </Col>
);

export const Default = Template.bind({});
Default.args = {
  buttonText: "Get started",
  buttonTextVariant: "danger", // Default variant for the button
  placeholder: "Email",
};
