"use client";

import useRentModal from "@/app/hooks/useRentModal";
import Modal from "./Modal";

const RentModal  = () => {
    const rentModal = useRentModal()
  return (
    <Modal
    onSubmit={rentModal.onClose}
    onClose={rentModal.onClose}
    isOpen={rentModal.isOpen}
    actionLabel="Submit"
    title="Airbnb your home!"
    />
  );
};

export default RentModal ;