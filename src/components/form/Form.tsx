/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { yupResolver } from '@hookform/resolvers/yup';
import React, {
  HTMLInputTypeAttribute,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import * as yup from 'yup';
import {
  FieldValues,
  Path,
  SubmitHandler,
  UseFormReturn,
  useForm,
} from 'react-hook-form';
import Input from './elements/Input';
import Select, { Option } from './elements/Select';
import Button from 'components/Button';
import LoadingButton from '@mui/lab/LoadingButton';

type FormElementProps<TFormValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema: yup.Schema<TFormValues>;
};
const FormElement = <
  TFormValues extends Record<string, any> = Record<string, any>,
>({
  onSubmit,
  children,
  schema,
}: FormElementProps<TFormValues>): ReactElement => {
  const resolver = yupResolver(schema);
  const methods = useForm<TFormValues>({
    resolver,
  });
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
  );
};

type Properties = {
  [key: string]: {
    type?: HTMLInputTypeAttribute | undefined;
    title: string;
    placeholder?: string;
    options?: Option[];
  };
};

type FormProps<T> = {
  formValues: T;
  onSubmit: (data: T) => void;
  schema: yup.Schema<T>;
  properties: Properties;
  onChange?: (data: T) => void;
  loading: boolean;
  apiResponse?: string;
  submitText?: string;
  rows?: number;
  cols?: number;
};

const DEFAULT_COLS = 2;
const Form = <T extends Record<string, any>>({
  formValues,
  onSubmit,
  schema,
  properties,
  onChange,
  apiResponse,
  submitText,
  loading,
  cols: defaultCols,
  rows: defaultRows,
}: FormProps<T>): ReactElement => {
  const [formData, setFormData] = useState<T>(formValues);
  const [rows, setRows] = useState(defaultRows);
  useEffect(() => {
    if (formData === formValues) return;
    if (onChange) onChange(formData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    if (!defaultRows) {
      const propertiesLength = Object.keys(properties).length;
      setRows(propertiesLength / DEFAULT_COLS);
    }
  }, [defaultRows, properties]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    key: string,
  ): void => setFormData({ ...formData, [key]: e.target.value });

  const [isLoading, setLoading] = React.useState(loading);
  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return (
    <FormElement<T> onSubmit={onSubmit} schema={schema}>
      {({ register, formState }): ReactElement => (
        <>
          <div
            className={`grid grid-cols-${
              defaultCols ?? DEFAULT_COLS
            } grid-rows-${rows} gap-4`}
          >
            {Object.keys(properties).map((key) =>
              properties[key].options ? (
                <div key={key} className="flex flex-col gap-1">
                  <Select
                    {...register(key as Path<T>)}
                    defaultValue={formData[key]}
                    onChange={(e): void => handleChange(e, key)}
                    title={properties[key].title}
                    placeholder={properties[key].placeholder}
                    options={properties[key].options ?? []}
                  />
                  {formState.errors[key] && (
                    <p className="text-red text-sm error flex justify-start">
                      {formState.errors[key]?.message as string}
                    </p>
                  )}
                </div>
              ) : (
                <div key={key} className="flex flex-col gap-1">
                  <Input
                    {...register(key as Path<T>)}
                    defaultValue={formData[key]}
                    onChange={(e): void => handleChange(e, key)}
                    placeholder={properties[key].placeholder}
                    title={properties[key].title}
                    type={properties[key].type}
                  />
                  {formState.errors[key] && (
                    <p className="text-red text-sm error flex justify-start">
                      {formState.errors[key]?.message as string}
                    </p>
                  )}
                </div>
              ),
            )}
          </div>
          {apiResponse && (
            <p className="text-red text-sm error flex justify-center mt-2">
              {apiResponse as string}
            </p>
          )}
          <Button className="submit mt-4 h-9 w-full" type={'login'}>
            <LoadingButton
              className="w-full"
              variant="text"
              size="small"
              loading={isLoading}
              loadingPosition="center"
            >
              <span>{submitText ?? 'ورود'}</span>
            </LoadingButton>
          </Button>
        </>
      )}
    </FormElement>
  );
};
export default Form;
