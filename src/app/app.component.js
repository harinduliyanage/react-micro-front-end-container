
import KassandraApp from "./modules/kassandra/kassandra.component";
import ErrorBoundary from "./modules/util/ErrorBoundary";

const AppComponent = () => {

    return <>
        <h1> Hello Container </h1>
        <ErrorBoundary>
            <KassandraApp/>
        </ErrorBoundary>
    </>
}
export default AppComponent;
