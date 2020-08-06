import { Provider } from 'react-redux'
import "../styles/index.css";


import store from '../store'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
