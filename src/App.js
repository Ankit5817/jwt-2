
import Component1 from './Fields/Component1';
import Component2 from './Fields/Component2';
import Component3 from './Fields/Component3';
import Component4 from './Fields/Component4';
import Component5 from './Fields/Component5';
import Component6 from './Fields/Component6';
import { ErrorBoundary } from 'react-error-boundary'

function App() {
  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-11 boder border dark rounded py-4">
          <h3 data-testid='heading' className="text-center">Checkout</h3>
          <h6 className="mt-5 ms-2">Shipping Address</h6>
          <form>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}>
              <Component1 />
              <Component2 />
              <Component3 />
              <Component4 />
              <Component5 />
              <Component6 />
            </ErrorBoundary>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
