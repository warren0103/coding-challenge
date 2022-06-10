import '../styles/globals.css'
import Layout from '../components/layout';
import Provider from '../context/provider';


const App = ({Component, pageProps})=> {
    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
export default App;
