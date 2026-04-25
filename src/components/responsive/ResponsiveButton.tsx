"use client";

import type React from "react";
import { Button, IconButton, Row } from "@once-ui-system/core";
import { hideOnMobile, showOnMobileOnly } from "@/hooks/useResponsive";

interface ResponsiveButtonProps {
  href?: string;
  icon: string;
  label?: string;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary";
  onClick?: () => void;
  selected?: boolean;
  prefixIcon?: string;
  suffixIcon?: string;
}

/**
 * ResponsiveButton Component
 *
 * Shows a Button with label on desktop and IconButton on mobile.
 * Automatically switches between full button and icon-only based on screen size.
 *
 * Usage:
 * <ResponsiveButton
 *   href="/about"
 *   icon="person"
 *   label="About"
 *   selected={isActive}
 * />
 */
export const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  href,
  icon,
  label,
  size = "m",
  variant = "secondary",
  onClick,
  selected,
  prefixIcon,
  suffixIcon,
}) => {
  const buttonProps = {
    href,
    size,
    variant,
    onClick,
    selected,
  };

  const iconButtonProps = {
    href,
    size,
    variant,
    onClick,
    selected,
  };

  return (
    <>
      {/* Desktop: Show Button with label */}
      <Row {...hideOnMobile}>
        <Button
          {...buttonProps}
          prefixIcon={prefixIcon || icon}
          label={label}
          suffixIcon={suffixIcon}
        />
      </Row>

      {/* Mobile: Show IconButton only */}
      <Row {...showOnMobileOnly}>
        <IconButton {...iconButtonProps} icon={icon} />
      </Row>
    </>
  );
};

export default ResponsiveButton;
