import { connect } from "react-redux";
import CityInfo from "./cityInfo";

function mapStoreToProps(store) {
  return {
    loading: store.form.loading,
    data: store.form.data,
    input: store.form.input,
    time: store.form.time,
    date: store.form.date,
    success: store.form.success,
    throwErr: store.form.throwErr
  }
}

export default connect(mapStoreToProps)(CityInfo);