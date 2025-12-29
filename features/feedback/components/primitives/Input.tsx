import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface BaseProps {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

type InputProps =
  | (BaseProps & { textarea?: false } & InputHTMLAttributes<HTMLInputElement>)
  | (BaseProps & {
      textarea: true;
    } & TextareaHTMLAttributes<HTMLTextAreaElement>);

export const Input = (props: InputProps) => {
  const { label, error, textarea, registration, ...rest } = props;

  const commonClassName = `px-3 py-2 border rounded-md outline-none transition-all 
    ${
      error
        ? "border-red-500 focus:ring-1 focus:ring-red-500"
        : "border-gray-300 focus:border-black"
    }`;

  return (
    <div className="flex flex-col gap-1.5 w-full text-left">
      <label className="text-sm font-semibold text-gray-700">{label}</label>

      {textarea ? (
        <textarea
          className={`${commonClassName} min-h-[100px]`}
          {...registration}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={commonClassName}
          {...registration}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}

      {error && (
        <span className="text-xs text-red-500 font-medium">{error}</span>
      )}
    </div>
  );
};
