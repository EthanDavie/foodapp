/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getIngredients } from "../graphql/queries";
import { updateIngredients } from "../graphql/mutations";
const client = generateClient();
export default function IngredientsUpdateForm(props) {
  const {
    id: idProp,
    ingredients: ingredientsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    food_name: "",
  };
  const [food_name, setFood_name] = React.useState(initialValues.food_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ingredientsRecord
      ? { ...initialValues, ...ingredientsRecord }
      : initialValues;
    setFood_name(cleanValues.food_name);
    setErrors({});
  };
  const [ingredientsRecord, setIngredientsRecord] =
    React.useState(ingredientsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getIngredients.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getIngredients
        : ingredientsModelProp;
      setIngredientsRecord(record);
    };
    queryData();
  }, [idProp, ingredientsModelProp]);
  React.useEffect(resetStateValues, [ingredientsRecord]);
  const validations = {
    food_name: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          food_name: food_name ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateIngredients.replaceAll("__typename", ""),
            variables: {
              input: {
                id: ingredientsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "IngredientsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Food name"
        isRequired={false}
        isReadOnly={false}
        value={food_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              food_name: value,
            };
            const result = onChange(modelFields);
            value = result?.food_name ?? value;
          }
          if (errors.food_name?.hasError) {
            runValidationTasks("food_name", value);
          }
          setFood_name(value);
        }}
        onBlur={() => runValidationTasks("food_name", food_name)}
        errorMessage={errors.food_name?.errorMessage}
        hasError={errors.food_name?.hasError}
        {...getOverrideProps(overrides, "food_name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ingredientsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ingredientsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
