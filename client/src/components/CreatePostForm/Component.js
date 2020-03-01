import React from 'react';
import { Field } from 'redux-form';
import categories from '../../categories';
import Form from '../shared/form/Form';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';

const postTypes = [
  {
    label: 'Problem specifications, click to add details box.',
    value: 'text'
  }
];

class CreatePostForm extends React.Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    const { token, post, history } = this.props;
    if (!token) history.push('/');
    if (post) history.push(`/a/${post.category}/${post.id}`);
  }

  onSubmit = post => this.props.attemptCreatePost(post);

  mapCategories = () =>
    categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ));

  render() {
    return (
      <Form
        loading={this.props.isFetching}
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        wide
      >
        <Field
          name='type'
          label='type'
          type='radiogroup'
          component={renderField}
          options={postTypes}
        />
        <Field
          name='category'
          label='category'
          type='select'
          component={renderField}
        >
          {this.mapCategories()}
        </Field>
        <Field name='title' label='Math problem' type='text' component={renderField} />
        {this.props.form.values.type === 'link' && (
          <Field name='url' label='url for useful materials, if none: put in https://www.google.com' type='url' component={renderField} />
        )}
        {this.props.form.values.type === 'text' && (
          <Field
            name='text'
            label='Description'
            type='textarea'
            component={renderField}
          />
        )}
        <SubmitButton type='submit'>create post</SubmitButton>
      </Form>
    );
  }
}

export default CreatePostForm;
