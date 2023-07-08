/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DomainCreateFormInputValues = {
    name?: string;
    owner?: string;
};
export declare type DomainCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DomainCreateFormOverridesProps = {
    DomainCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DomainCreateFormProps = React.PropsWithChildren<{
    overrides?: DomainCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DomainCreateFormInputValues) => DomainCreateFormInputValues;
    onSuccess?: (fields: DomainCreateFormInputValues) => void;
    onError?: (fields: DomainCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DomainCreateFormInputValues) => DomainCreateFormInputValues;
    onValidate?: DomainCreateFormValidationValues;
} & React.CSSProperties>;
export default function DomainCreateForm(props: DomainCreateFormProps): React.ReactElement;
