import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  fetchBuilderList,
  fetchPledgerAmountPaid,
  fetchPaymentDetailsById,
  addPaymentById,
} from "../../../redux/actions/kingdomBuilderAction";

import Modal from "../../../components/Modal";

import { Button, Input } from "../../../components";
import AmountCardSm from "../../../components/AmountCardSm";
import { PaymentModalContent, PMCCenter, PMCName, PMCData, PMCForm, PMCFormButton } from "./PaymentModal.styles";

const PaymentFormSchema = yup.object().shape({
  amount: yup.string().required("Valid amount/number is required."),
});

const PaymentModal = ({ closeModal }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pledgers = useSelector((state) => state.kingdomBuilders.pledgers);
  const [selectedPledger, updateSelectedPledger] = useState("");
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(PaymentFormSchema) });

  const handleDataFetch = () => {
    updateSelectedPledger(pledgers.find((item) => item.id.toString() === id.toString()));

    if (selectedPledger && selectedPledger.email.length > 0) {
      dispatch(fetchPledgerAmountPaid(selectedPledger.email));
      dispatch(fetchPaymentDetailsById(selectedPledger.id));
    }
  };

  useEffect(() => {
    if (pledgers.length < 1) {
      dispatch(fetchBuilderList());
      handleDataFetch();
    } else {
      updateSelectedPledger(pledgers.find((item) => item.id.toString() === id.toString()));
    }
  }, [pledgers]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    handleDataFetch();
  }, [selectedPledger]); // eslint-disable-line react-hooks/exhaustive-deps

  const onSubmitHandler = async (data) => {
    const { amount } = data;

    if (amount.length < 0) return;
    setIsPaymentLoading(true);

    try {
      await dispatch(addPaymentById({ amount_paid: amount, id: selectedPledger.id, entered_by: "admin" }));
      dispatch(fetchBuilderList());
      setIsPaymentLoading(false);
    } catch (e) {
      console.error("Failed to login: ", e);
      setIsPaymentLoading(false);
    }

    reset();
  };

  return (
    <Modal title="Payment Record Update" icon="papermoney" onClose={closeModal}>
      <PaymentModalContent>
        <>
          <PMCCenter>{selectedPledger.parishes_id}</PMCCenter>
          <PMCName>{selectedPledger.name}</PMCName>
        </>
        <PMCData>
          <AmountCardSm title="Amount Pledge" amount={selectedPledger.amount_pledge} />
          <AmountCardSm title="Amount Paid" amount={selectedPledger.total_amount_paid} />
          <AmountCardSm
            title={selectedPledger.amount_pledge < selectedPledger.total_amount_paid ? "Excess" : "Pending"}
            amount={
              selectedPledger.amount_pledge < selectedPledger.total_amount_paid
                ? (selectedPledger.amount_pledge - selectedPledger.total_amount_paid) * -1
                : selectedPledger.amount_pledge - selectedPledger.total_amount_paid
            }
          />
        </PMCData>
        <PMCForm id="loginForm" onSubmit={handleSubmit(onSubmitHandler)}>
          <Input
            placeholder="Enter the amount"
            label="Amount"
            name="amount"
            id="amount"
            autoFocus
            disabled={false}
            classes={`border-bottom`}
            errorMessage={""}
            error={errors}
            type="number"
            {...register("amount")}
          />

          <PMCFormButton>
            <Button id="loginFormBtn" button_text="Submit" type="submit" inProgress={isPaymentLoading} />
          </PMCFormButton>
        </PMCForm>
      </PaymentModalContent>
    </Modal>
  );
};

export default PaymentModal;
