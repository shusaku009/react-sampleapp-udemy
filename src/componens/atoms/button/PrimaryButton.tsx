import { memo, ReactNode, VFC } from "react"

import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
}

export const PramaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button backgroundColor="teal.400" color="white" _hover={{ opacity: 0.8 }}>
      {children}
    </Button>
  )
});