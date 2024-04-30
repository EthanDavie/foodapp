/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type IngredientsCreateFormInputValues = {
    food_name?: string;
};
export declare type IngredientsCreateFormValidationValues = {
    food_name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type IngredientsCreateFormOverridesProps = {
    IngredientsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    food_name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type IngredientsCreateFormProps = React.PropsWithChildren<{
    overrides?: IngredientsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: IngredientsCreateFormInputValues) => IngredientsCreateFormInputValues;
    onSuccess?: (fields: IngredientsCreateFormInputValues) => void;
    onError?: (fields: IngredientsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: IngredientsCreateFormInputValues) => IngredientsCreateFormInputValues;
    onValidate?: IngredientsCreateFormValidationValues;
} & React.CSSProperties>;
export default function IngredientsCreateForm(props: IngredientsCreateFormProps): React.ReactElement;
