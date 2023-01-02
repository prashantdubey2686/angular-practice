export class TokenModel {
  access_token: string | undefined;
  expires_in: number | undefined;
  refresh_token: string | undefined;
  scope: string | undefined;
  token_type: string | undefined;
}
