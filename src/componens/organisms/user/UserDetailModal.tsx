import { memo, VFC } from "react";

import { Box, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack, Text } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="none" autoFocus={false}>
    <ModalOverlay />
    <ModalContent pb={6}>
      <ModalHeader>
        ユーザー詳細
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody mx={4}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>
              名前
            </FormLabel>
            <Input value="じゃけぇ" isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>
              フルネーム
            </FormLabel>
            <Input value="Takumi Okada" isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>
              MAIL
            </FormLabel>
            <Input value="12345@example.com" isReadOnly />
          </FormControl>
          <FormControl>
            <FormLabel>
              TEL
            </FormLabel>
            <Input value="080-1111-2222" isReadOnly />
          </FormControl>
        </Stack>
      </ModalBody>
    </ModalContent>
  </Modal>
  );
});