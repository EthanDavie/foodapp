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
import { getRecipe } from "../graphql/queries";
import { updateRecipe } from "../graphql/mutations";
const client = generateClient();
export default function RecipeUpdateForm(props) {
  const {
    id: idProp,
    recipe: recipeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    recipeName: "",
  };
  const [recipeName, setRecipeName] = React.useState(initialValues.recipeName);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = recipeRecord
      ? { ...initialValues, ...recipeRecord }
      : initialValues;
    setRecipeName(cleanValues.recipeName);
    setErrors({});
  };
  const [recipeRecord, setRecipeRecord] = React.useState(recipeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getRecipe.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getRecipe
        : recipeModelProp;
      setRecipeRecord(record);
    };
    queryData();
  }, [idProp, recipeModelProp]);
  React.useEffect(resetStateValues, [recipeRecord]);
  const validations = {
    recipeName: [],
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
          recipeName: recipeName ?? null,
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
            query: updateRecipe.replaceAll("__typename", ""),
            variables: {
              input: {
                id: recipeRecord.id,
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
      {...getOverrideProps(overrides, "RecipeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Recipe name"
        isRequired={false}
        isReadOnly={false}
        value={recipeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeName: value,
            };
            const result = onChange(modelFields);
            value = result?.recipeName ?? value;
          }
          if (errors.recipeName?.hasError) {
            runValidationTasks("recipeName", value);
          }
          setRecipeName(value);
        }}
        onBlur={() => runValidationTasks("recipeName", recipeName)}
        errorMessage={errors.recipeName?.errorMessage}
        hasError={errors.recipeName?.hasError}
        {...getOverrideProps(overrides, "recipeName")}
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
          isDisabled={!(idProp || recipeModelProp)}
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
              !(idProp || recipeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
