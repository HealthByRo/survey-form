import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Card from 'antd/lib/card';

import 'antd/lib/table/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/date-picker/style/css';

import SurveyForm from '.';

storiesOf('Survey Form', module)
  .add('example "Health Info" form', () => (
    <Card title="Survey Form">
      <SurveyForm memberId={5} />
    </Card>
  ));
