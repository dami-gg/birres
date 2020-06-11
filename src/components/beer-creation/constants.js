import { GET_ALL_BEER_ORIGINS, GET_ALL_BEER_TYPES } from "../../data/queries";

const INPUT_TYPE_TEXT = "text";
const INPUT_TYPE_DROPDOWN = "dropdown";
const INPUT_IMAGE_UPLOADER = "image_uploader";
const INPUT_TYPE_RATING = "rating";

const CREATION_STEPS = [
  {
    name: "name",
    title: "What's its name?",
    type: INPUT_TYPE_TEXT
  },
  {
    name: "type",
    title: "Which type is it?",
    type: INPUT_TYPE_DROPDOWN,
    query: GET_ALL_BEER_TYPES,
    property: "allBeerTypes"
  },
  {
    name: "origin",
    title: "Where is it from?",
    type: INPUT_TYPE_DROPDOWN,
    query: GET_ALL_BEER_ORIGINS,
    property: "allBeerOrigins"
  },
  {
    name: "image",
    title: "Do you have an image for it?",
    type: INPUT_IMAGE_UPLOADER,
    optional: true
  },
  {
    name: "rating",
    title: "How did you like it?",
    type: INPUT_TYPE_RATING
  }
];

const ERROR_MESSAGE_EMPTY_FIELD = "A value is required for this field";

export {
  CREATION_STEPS,
  ERROR_MESSAGE_EMPTY_FIELD,
  INPUT_TYPE_DROPDOWN,
  INPUT_IMAGE_UPLOADER,
  INPUT_TYPE_RATING,
  INPUT_TYPE_TEXT
};
