import { ReactNode, forwardRef, ElementType } from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import {
  Wrapper,
  Variant,
  Size,
  VARIANT_TO_ICON_PROPS_MAP,
  ICON_SIZE,
  TextWrapper,
} from "./button.style";

type Props = {
  variant?: Variant;
  size?: Size;
  fillContainer?: boolean;
  icon?: LucideIcon;
  iconPosition?: "LEFT" | "RIGHT";
};

type ButtonProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  Props
>;

type ButtonComponent = <C extends ElementType = "button">(
  props: ButtonProps<C>
) => ReactNode;

const Button: ButtonComponent = forwardRef(
  <C extends ElementType = "button">(
    {
      size = "LARGE",
      variant = "PRIMARY",
      fillContainer = false,
      children,
      icon: Icon,
      iconPosition = "RIGHT",
      ...props
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>
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
