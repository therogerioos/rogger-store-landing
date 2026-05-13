export const FB_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
  }
}

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const event = (name: string, options = {}) => {
  window.fbq("track", name, options);
};