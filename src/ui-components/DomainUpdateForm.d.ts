/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Domain } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DomainUpdateFormInputValues = {
    name?: string;
    owner?: string;
};
export declare type DomainUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DomainUpdateFormOverridesProps = {
    DomainUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DomainUpdateFormProps = React.PropsWithChildren<{
    overrides?: DomainUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    domain?: Domain;
    onSubmit?: (fields: DomainUpdateFormInputValues) => DomainUpdateFormInputValues;
    onSuccess?: (fields: DomainUpdateFormInputValues) => void;
    onError?: (fields: DomainUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DomainUpdateFormInputValues) => DomainUpdateFormInputValues;
    onValidate?: DomainUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DomainUpdateForm(props: DomainUpdateFormProps): React.ReactElement;
