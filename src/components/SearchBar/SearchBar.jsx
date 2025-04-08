import { Field, Form, Formik } from 'formik';

const SearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    handleChangeQuery(values.query);
    options.resetForm();
  };
  return (
    <section>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name='query' />
          <button type='submit'>Search</button>
        </Form>
      </Formik>
    </section>
  );
};
export default SearchBar;
