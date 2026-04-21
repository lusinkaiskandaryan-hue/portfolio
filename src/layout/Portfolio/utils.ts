export const getSelectedMenuKey = (pathname: string, hash: string): string => {
  if (pathname === '/home' && hash) {
    return `/home${hash}`;
  }

  return pathname;
};

export const getFooterText = (year: number, text: string): string => `${year} ${text}`;
