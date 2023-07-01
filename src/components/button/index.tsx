import { ComponentPropsWithRef, forwardRef } from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import {
  Wrapper,
  Variant,
  Size,
  VARIANT_TO_ICON_PROPS_MAP,
  ICON_SIZE,
  TextWrapper,
} from "./style";

type Props = ComponentPropsWithRef<"button"> & {
  variant?: Variant;
  size?: Size;
  fillContainer?: boolean;
  icon?: LucideIcon;
  iconPosition?: "LEFT" | "RIGHT";
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      size = "LARGE",
      variant = "PRIMARY",
      fillContainer = false,
      children,
      icon: Icon,
      iconPosition = "RIGHT",
      ...props
    },
    ref
  ) => {
    const iconProps: LucideProps = {
      size: ICON_SIZE,
      ...VARIANT_TO_ICON_PROPS_MAP[variant],
      role: "img",
    };

    const hasIcon = !!Icon;

    return (
      <Wrapper
        ref={ref}
        $size={size}
        $variant={variant}
        $fillContainer={fillContainer}
        {...props}
      >
        {iconPosition === "LEFT" && hasIcon && <Icon {...iconProps} />}
        <TextWrapper $hasIcon={hasIcon}>{children}</TextWrapper>
        {iconPosition === "RIGHT" && hasIcon && <Icon {...iconProps} />}
      </Wrapper>
    );
  }
);

export default Button;
