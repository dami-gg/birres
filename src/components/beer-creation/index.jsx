import React, { useState } from "react";
import router from "next/router";
import { useMutation } from "@apollo/react-hooks";

import { makeStyles } from "@material-ui/core/styles";

import CreationCard from "./CreationCard";

import { CREATION_STEPS } from "./constants";
import { CREATE_BEER_IN_COLLECTION } from "../../data/mutations";

const FIRST_STEP_NUMBER = 0;

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: "5%"
  }
});

const BeerCreation = () => {
  const classes = useStyles();

  const [step, setStep] = useState(FIRST_STEP_NUMBER);
  const [beerFields, setBeerFields] = useState({});

  const [
    createBeerInCollection,
    { error: createBeerError, loading: createBeerLoading, data: createBeerData }
  ] = useMutation(CREATE_BEER_IN_COLLECTION);

  if (createBeerError) {
    // TODO Redirect to error page
  }

  if (createBeerLoading) {
    // TODO Show spinner taking full page space
  }

  if (createBeerData) {
    const { id } = createBeerData.createBeerInCollection;

    // Redirect to the just created beer page
    router.push(`/beers/${id}`);
  }

  const isFirstStep = step === FIRST_STEP_NUMBER;
  const isLastStep = step === CREATION_STEPS.length - 1;

  const onNextStep = (name, value = "") => {
    const updatedBeerFields = { ...beerFields, [name]: value };
    setBeerFields(updatedBeerFields);

    if (isLastStep) {
      createBeerInCollection({ variables: { beer: { ...updatedBeerFields } } });
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className={classes.root}>
      <CreationCard
        step={CREATION_STEPS[step]}
        onNext={onNextStep}
        isFirst={isFirstStep}
        isLast={isLastStep}
      />
    </div>
  );
};

export default BeerCreation;
