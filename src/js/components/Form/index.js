import { connect } from "react-redux";
import Form from "./form";

function mapStoreToProps(store) {
  return {
    loading: store.form.loading,
    loaded: store.form.loaded,
    date: store.form.date,
    time: store.form.time,
    input: store.form.input,
    data: store.form.data,
    citySearch: store.form.citySearch,
    errors: store.form.errors, 
    success: store.form.success,
    cache: store.form.cache,
    throwErr: store.form.throwErr
  };
}

export default connect(mapStoreToProps)(Form);