import React from "react";
import { Button, Modal, ScrollView } from "native-base";
import CustomText from "../core/CustomText";

const WarnPopup = ({ open, setOpen, header, content }) => {
  return (
    <Modal isOpen={open} onClose={setOpen} size="md">
      <Modal.Content maxH="212">
        <Modal.CloseButton />
        <Modal.Header>{header}</Modal.Header>
        <Modal.Body>
          <ScrollView>
            <CustomText title={content} h6 />
          </ScrollView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              onPress={() => {
                setOpen(false);
              }}
            >
              OKAY
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default WarnPopup;
