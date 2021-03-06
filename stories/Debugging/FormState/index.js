import React from 'react';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Text, FormState } from '../../../src';

const FormStateExample = () => (
  <Form>
    <div>
      <label>
        First name:
        <Text field="name" />
      </label>
      <button type="submit">Submit</button>
      <FormState />
    </div>
  </Form>
);

export default withDocs(readme, FormStateExample);
