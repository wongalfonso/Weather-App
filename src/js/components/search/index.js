import { connect } from "react-redux";
import Search from "./search";

function mapStoreToProps(store) {
  return {
    searchHistory: store.form.data,
    throwErr: store.form.throwErr,
    cache: store.form.cache
  };
}

export default connect(mapStoreToProps)(Search);