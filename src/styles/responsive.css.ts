import { StyleRule } from "@vanilla-extract/css";

export const breakpoints = {
  mobile: 0,
  tablet: 640,
  desktop: 1024,
  wide: 1280,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export function responsiveStyle(
  styles: Partial<Record<Breakpoint, StyleRule>>
): StyleRule {
  const { mobile, tablet, desktop, wide } = styles;

  const mediaQueries: Record<string, StyleRule> = {};

  if (tablet) {
    mediaQueries[`screen and (min-width: ${breakpoints.tablet}px)`] = tablet;
  }

  if (desktop) {
    mediaQueries[`screen and (min-width: ${breakpoints.desktop}px)`] = desktop;
  }

  if (wide) {
    mediaQueries[`screen and (min-width: ${breakpoints.wide}px)`] = wide;
  }

  return {
    ...(mobile || {}),
    ...(Object.keys(mediaQueries).length > 0 && {
      "@media": mediaQueries,
    }),
  };
}

export function responsiveProperty<T extends string | number>(
  property: string,
  values: Partial<Record<Breakpoint, T>>
): StyleRule {
  const { mobile, tablet, desktop, wide } = values;

  const mediaQueries: Record<string, Record<string, T>> = {};

  if (tablet !== undefined) {
    mediaQueries[`screen and (min-width: ${breakpoints.tablet}px)`] = {
      [property]: tablet,
    };
  }

  if (desktop !== undefined) {
    mediaQueries[`screen and (min-width: ${breakpoints.desktop}px)`] = {
      [property]: desktop,
    };
  }

  if (wide !== undefined) {
    mediaQueries[`screen and (min-width: ${breakpoints.wide}px)`] = {
      [property]: wide,
    };
  }

  return {
    ...(mobile !== undefined && { [property]: mobile }),
    ...(Object.keys(mediaQueries).length > 0 && {
      "@media": mediaQueries,
    }),
  };
}

export const media = {
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
  wide: `screen and (min-width: ${breakpoints.wide}px)`,
} as const;
