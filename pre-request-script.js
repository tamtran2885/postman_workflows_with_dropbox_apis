/**
 * Pre-request script runs before every API request.
 *
 * Check if access token has expired, and create new token
 *
 */

class Request {
  constructor(param) {
    this.param = param;
  }
}

class TokenRequest extends Request {
  constructor(param) {
    super(param);
  }

  get tokenDate() {
    let tokenDate = new Date(2022, 9, 13);
    const tokenTimestamp = pm.environment.get("Token_Timestamp"); // the issued date of token
    if (tokenTimestamp) {
      tokenDate = Date.parse(tokenTimestamp);
    }
    pm.environment.set("Token_Timestamp", tokenDate);
    return tokenDate;
  }

  get expiresInTime() {
    let expiresInTime = pm.environment.get("ExpiresInTime");
    if (!expiresInTime) {
      expiresInTime = 1800000; // Set default expiration time to 30 minutes
    }
    pm.environment.set("ExpiresInTime", expiresInTime);
    return expiresInTime;
  }

  getAccessToken() {
    const tokenDate = this.tokenDate;
    const expiresInTime = this.expiresInTime;

    if (new Date() - tokenDate > expiresInTime) {
      pm.sendRequest(
        {
          url: pm.environment.get("Access_token_url"),
          method: "POST",
          header: {
            "Content-Type": "Content-Type: application/x-www-form-urlencoded",
          },
          body: {
            mode: "urlencoded",
            urlencoded: [
              {
                key: "client_id",
                value: pm.environment.get("App_key"),
                disabled: false,
              },
              {
                key: "client_secret",
                value: pm.environment.get("App_secret"),
                disabled: false,
              },
              {
                key: "refresh_token",
                value: pm.environment.get("refreshToken"),
                disabled: false,
              },
              { key: "grant_type", value: "refresh_token", disabled: false },
            ],
          },
        },
        function (err, res) {
          pm.environment.set("access_token", res.json().access_token);
          pm.environment.set("Token_Timestamp", new Date());

          // If expired time exists, set value to ExpiresInTime variable
          if (res.json().expires_in) {
            expiresInTime = res.json().expires_in * 1000;
          }
          pm.environment.set("ExpiresInTime", expiresInTime);
        }
      );
    }
  }
}

const newRequest = new TokenRequest();
newRequest.getAccessToken();
