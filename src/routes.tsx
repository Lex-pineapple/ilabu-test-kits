import { createBrowserRouter } from "react-router-dom";

import { AuthGuard } from "#/layouts/auth-guard";
import { Layout } from "#/layouts/layout";
import {
  appProductsLoader,
  HydrateFallback,
  productKitLoader,
  selectedKitLoader,
} from "#/loaders";
import { ActivateQR } from "#/views/activate-qr";
import { AllProducts } from "#/views/all-products";
import { CheckoutForm } from "#/views/checkout-form";
import { FAQ } from "#/views/faq";
import { Instruction } from "#/views/instruction";
import { NotFound } from "#/views/not-found";
import { ProductView } from "#/views/product-view";
import { SelectedKit } from "#/views/selected-kit";
import { SuccessfulScreen } from "#/views/successful-screen";
import { PATHS } from "#constants/paths";

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <NotFound />,
        path: "*",
      },
      {
        element: <FAQ />,
        path: PATHS.faq,
      },

      {
        element: <AllProducts />,
        loader: appProductsLoader,
        path: PATHS.availableKit,
      },
      {
        element: <ActivateQR />,
        index: true,
      },
      {
        element: <ProductView />,
        loader: productKitLoader,
        path: PATHS.product,
      },
      {
        children: [
          {
            element: <SelectedKit />,
            loader: selectedKitLoader,
            path: PATHS.selectedKit,
          },
          {
            element: <Instruction />,
            path: PATHS.instruction,
          },
          {
            element: <SuccessfulScreen />,
            path: PATHS.ordered,
          },

          {
            element: <CheckoutForm />,
            path: PATHS.checkout,
          },
        ],
        element: <AuthGuard />,
      },
    ],
    element: <Layout />,
    HydrateFallback,
    path: PATHS.root,
  },
]);
