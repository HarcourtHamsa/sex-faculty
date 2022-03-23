import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Loader from "./components/Loader";

const Landing = lazy(() => import("./pages/Landing"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Product = lazy(() => import("./pages/Product"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
