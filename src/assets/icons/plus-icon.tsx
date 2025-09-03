import { createIcon } from "@chakra-ui/react";

export const PlusIcon = createIcon({
  displayName: "PlusIcon",
  path: (
    <>
      <circle
        cx="12.5"
        cy="12.5"
        fill="white"
        r="11.5"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M19.7617 11.5596V14.1084H5.14258V11.5596H19.7617ZM13.8145 5.33398V20.8613H11.1045V5.33398H13.8145Z"
        fill="#FF2121"
      />
    </>
  ),
  viewBox: "0 0 25 25",
});
