import { createBrowserRouter } from "react-router-dom";

import { Layout } from "#/layouts/layout";
import {
  HydrateFallback,
  productKitLoader,
  selectedKitLoader,
} from "#/loaders";
import { ActivateQR } from "#/views/activate-qr";
import { AvailableKit } from "#/views/available-kit";
import { Instruction } from "#/views/instruction";
import { NotFound } from "#/views/not-found";
import { ProductView } from "#/views/product-view";
import { SelectedKit } from "#/views/selected-kit";
import { PATHS } from "#constants/paths";

export const router = createBrowserRouter([
  {
    children: [
      {
        element: <NotFound />,
        path: "*",
      },
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
        element: <AvailableKit />,
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
    ],
    element: <Layout />,
    HydrateFallback,
    path: PATHS.root,
  },
]);
