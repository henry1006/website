/**
 * Responsive design patterns for Once UI components
 * Use these patterns to standardize responsive behavior across the app
 */

/**
 * Show element only on desktop, hide on mobile
 * Usage: <Component {...responsive.hideOnMobile} />
 */
export const hideOnMobile = {
  hide: false,
  s: { hide: true },
};

/**
 * Show element only on desktop, hide on mobile (inverse)
 * Usage: <Row s={{hide: true}} {...responsive.showOnDesktopOnly} />
 */
export const showOnDesktopOnly = {
  s: { hide: false },
};

/**
 * Show element only on mobile, hide on desktop
 * Usage: <Component hide {...responsive.showOnMobileOnly} />
 */
export const showOnMobileOnly = {
  hide: true,
  s: { hide: false },
};

/**
 * Change flex direction to column on mobile
 * Usage: <Row {...responsive.mobileColumn} />
 */
export const mobileColumn = {
  direction: "row" as const,
  s: { direction: "column" as const },
};

/**
 * Responsive grid columns - function to allow parameterization
 * Usage: <Grid {...responsive.responsiveGrid(3, 1)} />
 */
export const responsiveGrid = (desktopColumns: number, mobileColumns: number) => ({
  columns: desktopColumns,
  s: { columns: mobileColumns },
});

export const useResponsive = () => {
  return {
    hideOnMobile,
    showOnDesktopOnly,
    showOnMobileOnly,
    mobileColumn,
    responsiveGrid,
  };
};

export default useResponsive;
