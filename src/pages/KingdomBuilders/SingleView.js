import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  fetchBuilderList,
  fetchPledgerAmountPaid,
  fetchPaymentDetailsById,
} from "../../redux/actions/kingdomBuilderAction";

import { Button, PaymentProgression } from "../../components";
import { CheckHexIcon, SadIcon } from "../../components/icons";
import TableRows from "../../components/TableRows";
import InfoCard from "./InfoCard";
import Modal from "../../components/Modal";
import AmountCardSm from "../../components/AmountCardSm";

import { SmEmpty } from "../../components/TableRows/EmptyHeaders";

import {
  MainContainer,
  PaymentTable,
  DetailsCard,
  ViewContent,
  PageTitle,
  StyledProfileName,
  StyledText,
  Title,
  StyledButton,
  StyledHexIcon,
  EmptyContent,
  EmptyContentText,
  PaymentModalContent,
  PMCCenter,
  PMCName,
  PMCData,
} from "./styles";

const Index = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pledgers = useSelector((state) => state.kingdomBuilders.pledgers);
  const paymentDetails = useSelector((state) => state.kingdomBuilders.paymentDetails);
  const pledgerAmountPaid = useSelector((state) => state.kingdomBuilders.pledgerTotalAmountPaid);
  const [selectedPledger, updateSelectedPledger] = useState("");
  const [isOpenPaymentModal, setIsOpenPaymentModal] = useState(false);

  const handleDataFetch = () => {
    updateSelectedPledger(pledgers.find((item) => item.id.toString() === id.toString()));

    if (selectedPledger && selectedPledger.email.length > 0) {
      dispatch(fetchPledgerAmountPaid(selectedPledger.email));
      dispatch(fetchPaymentDetailsById(selectedPledger.id));
    }
  };

  const handleMakePayment = () => {
    setIsOpenPaymentModal(true);
  };

  const closeModal = () => {
    setIsOpenPaymentModal(false);
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

  return (
    <>
      {isOpenPaymentModal ? (
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
                title="Pending"
                amount={selectedPledger.amount_pledge - selectedPledger.total_amount_paid}
              />
            </PMCData>
            <div>form</div>
          </PaymentModalContent>
        </Modal>
      ) : null}
      <MainContainer>
        <PageTitle>
          <StyledProfileName>
            <StyledHexIcon>
              <CheckHexIcon />
            </StyledHexIcon>
            <StyledText>
              {selectedPledger && selectedPledger.name} <span>Portfolio</span>
            </StyledText>
          </StyledProfileName>
          <StyledButton>
            <Button button_text="+ Make Payment" id="makePaymentBtn" onClick={handleMakePayment} />
          </StyledButton>
        </PageTitle>
        <ViewContent>
          <DetailsCard>
            <PaymentProgression
              amount_pledge={selectedPledger ? selectedPledger.amount_pledge : 0}
              amount_paid={pledgerAmountPaid ? pledgerAmountPaid.total : 0}
              onClick={handleMakePayment}
            />
            <PaymentTable>
              <Fragment>
                <Title>Payment Record</Title>
                {paymentDetails && paymentDetails.length > 0 ? (
                  paymentDetails.map((item, id) => <TableRows key={id} data={item} id={id} type="sm" />)
                ) : (
                  <EmptyContent>
                    <SmEmpty />
                    <SadIcon />
                    <EmptyContentText>No payment record yet!</EmptyContentText>
                  </EmptyContent>
                )}
              </Fragment>
            </PaymentTable>
          </DetailsCard>
          <InfoCard profile={selectedPledger} paymentDetails={paymentDetails} onClick={handleMakePayment} />
        </ViewContent>
      </MainContainer>
    </>
  );
};

export default React.memo(Index);
