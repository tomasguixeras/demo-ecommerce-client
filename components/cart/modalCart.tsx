import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

interface ModalCartProps {
  isOpen: boolean;
  onClose: () => void;
  handleLeaveProduct: () => void;
}

export function ModalCart({
  isOpen,
  onClose,
  handleLeaveProduct,
}: ModalCartProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Are you sure to delete the product?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => handleLeaveProduct()}
          >
            Yes
          </Button>
          <Button variant="ghost" onClick={() => onClose()}>
            No
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
