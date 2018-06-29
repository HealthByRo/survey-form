import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'antd/lib/checkbox';

export default function WrappedCheckbox(props) {
  const {
    value,
    children,
    ...restProps
  } = props;

  return (
    <Checkbox {...restProps} defaultChecked={value}>
      {children}
    </Checkbox>
  );
}

WrappedCheckbox.propTypes = {
  value: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

WrappedCheckbox.defaultProps = {
  value: false,
};
