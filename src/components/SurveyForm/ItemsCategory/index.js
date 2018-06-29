import React from 'react';
import PropTypes from 'prop-types';
import QuestionField from './QuestionField';

function ItemsCategory({
  category,
  readonly,
}) {
  return (
    <div className="survey-form__category">
      <h3>
        {category.name}
      </h3>

      {category.questions.map((question) => (
        <QuestionField
          key={question.id}
          question={question}
          readonly={readonly}
        />
      ))}
    </div>
  );
}

ItemsCategory.propTypes = {
  category: PropTypes.object.isRequired,
  readonly: PropTypes.bool,
};

ItemsCategory.defaultProps = {
  readonly: false,
};

export default ItemsCategory;
