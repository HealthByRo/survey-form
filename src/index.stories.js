import React from 'react';
import * as axios from 'axios';
import { storiesOf } from '@kadira/storybook';

import 'antd/lib/table/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/date-picker/style/css';

import SurveyForm from './';

storiesOf('TableContainer', module)
  .add('without users', () => (
    <SurveyForm />
  ));
