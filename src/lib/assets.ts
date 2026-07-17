const ASSET_URL = process.env.NEXT_PUBLIC_ASSET_URL ?? "";

export const asset = (path: string) => `${ASSET_URL}${path}`;
