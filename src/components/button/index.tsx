import { ComponentPropsWithRef, forwardRef } from "react";

type Variant = "PRIMARY" | "SECONDARY";

type Props = ComponentPropsWithRef<"button"> & {
  variant?: Variant;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

export default Button;
