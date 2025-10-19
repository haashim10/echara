/// <reference types="react" />
import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
  type ButtonHTMLAttributes,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  asChild?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded-[var(--radius-sm)]";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-brand-primary)] text-white hover:bg-[color-mix(in srgb,var(--color-brand-primary) 88%,white)] focus-visible:outline-[var(--color-brand-primary)] shadow-sm hover:shadow-md",
  secondary:
    "bg-[var(--color-brand-surface)] text-[var(--color-brand-secondary)] border border-[var(--color-border)] hover:border-[var(--color-brand-secondary)] focus-visible:outline-[var(--color-brand-secondary)]",
  ghost:
    "bg-transparent text-[var(--color-brand-primary)] hover:bg-[var(--color-accent-soft)] focus-visible:outline-[var(--color-brand-primary)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm gap-2",
  md: "h-11 px-4 text-base gap-2.5",
  lg: "h-12 px-6 text-lg gap-3",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  asChild = false,
  className,
  children,
  disabled,
  type,
  ...rest
}: ButtonProps) {
  const Component = asChild ? ("span" as const) : ("button" as const);

  const resolvedClassName = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    (loading || disabled) && "opacity-70 cursor-not-allowed",
    className,
  );

  const commonProps = {
    className: resolvedClassName,
    "aria-busy": loading || undefined,
  };

  if (asChild) {
    const elements = Children.toArray(children).filter(isValidElement) as ReactElement[];
    const only = elements[0] as ReactElement<{ className?: string }>;
    if (!only) return null;
    const passthrough = rest as Record<string, unknown>;
    return cloneElement(only, {
      ...passthrough,
      className: clsx(only.props.className, resolvedClassName),
    });
  }

  return (
    <Component
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      {...commonProps}
      disabled={disabled || loading}
      type={type ?? "button"}
    >
      {loading && (
        <span className="mr-2 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {children}
    </Component>
  );
}
