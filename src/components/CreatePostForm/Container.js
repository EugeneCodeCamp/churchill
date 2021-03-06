import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import {
  titleValidator,
  textPostValidator,
  typeValidator
} from '../../util/validators';
import { attemptCreatePost } from '../../actions/posts';
import categories from '../../categories';
import withAuth from '../../util/withAuth';
import CreatePostForm from './Component';

const validate = fields => {
  const errors = {};
  const title = fields.title ? fields.title : '';
  const type = fields.type ? fields.type : '';
  const text = fields.text ? fields.text : '';

  errors.title = titleValidator(title);
  if (type === 'text') errors.text = textPostValidator(text);
  errors.type = typeValidator(type);

  return errors;
};

const mapStateToProps = state => ({
  isFetching: state.posts.isFetching,
  post: state.posts.newPost,
  form: state.form.createPost
});

const mapDispatchToProps = { attemptCreatePost };

const enhance = compose(
  reduxForm({
    form: 'createPost',
    initialValues: { category: categories[0], type: 'text' },
    validate
  }),
  withAuth,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const CreatePostFormContainer = enhance(CreatePostForm);

export default CreatePostFormContainer;
