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
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "@/types/polymorphic";

type Props = {
  /**
   *  Controls the button's appearance.
   */
  variant?: Variant;
  /**
   *  Controls the button's size.
   */
  size?: Size;
  /**
   * Controls whether the button should fill its container.
   * */
  fillContainer?: boolean;
  /**
   * Controls the button's icon.
   * */
  icon?: LucideIcon;
  /**
   * Controls the button's icon position.
   * */
  iconPosition?: "LEFT" | "RIGHT";
};

type ButtonProps<C extends ElementType> = PolymorphicComponentPropWithRef<
  C,
  Props
>;

type ButtonComponent = <C extends ElementType = "button">(
  props: ButtonProps<C>
) => ReactNode;

export const Button: ButtonComponent = forwardRef(
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
      role: "graphics-symbol",
      "aria-label": "decorative icon",
    };

    const buttonProps =
      props.as === "button" ? { type: "button" as const } : {};

    const hasIcon = !!Icon;

    return (
      <Wrapper
        ref={ref}
        $size={size}
        $variant={variant}
        $fillContainer={fillContainer}
        {...buttonProps}
        {...props}
      >
        {iconPosition === "LEFT" && hasIcon && <Icon {...iconProps} />}
        <TextWrapper $hasIcon={hasIcon}>{children}</TextWrapper>
        {iconPosition === "RIGHT" && hasIcon && <Icon {...iconProps} />}
      </Wrapper>
    );
  }
);
