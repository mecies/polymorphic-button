// Strip from https://github.com/ohansemmanuel/polymorphic-react-component

import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  PropsWithChildren,
} from "react";

declare global {
  type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"];

  interface AsProp<C extends ElementType> {
    as?: C;
  }

  type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P);

  type PolymorphicComponentProp<
    C extends ElementType,
    Props = {}
  > = PropsWithChildren<Props & AsProp<C>> &
    Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

  type PolymorphicComponentPropWithRef<
    C extends ElementType,
    Props = {}
  > = PolymorphicComponentProp<C, Props> & {
    ref?: PolymorphicRef<C>;
  };
}
