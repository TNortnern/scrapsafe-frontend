import { Provider } from "react-redux";
import store from "../store";

export default (
  (ctx) => {
   
  },
  {
    render: ({ Page, props }) => {
      return (
        <Provider store={store}>
          <Page {...props} />
        </Provider>
      );
    },
  }
);
