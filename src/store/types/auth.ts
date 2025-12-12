export type AccessTokenType = {
  access_token: string;
};

export type AuthKitType = {
  kit_item_code: string;
};

export type AuthResponseType = {
  access_token: string;
  refresh_token: string;
};

export type RefreshTokenType = {
  refresh_token: string;
};

export type VerifyTokenType = {
  access_token: string;
  order_status: string;
};
