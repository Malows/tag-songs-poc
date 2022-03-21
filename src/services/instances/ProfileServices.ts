import Service from "../Service";
import { LOGIN_URL, USER_URL } from "../api";
import HttpResponse, { handle } from "../Response";

class ProfileService extends Service {
    /**
     * Perform a login request.
     *
     * @returns {Promise<HttpResponse<unknown>>}
     */
    login(): Promise<HttpResponse<unknown>> {
        return handle<unknown>(
            fetch(LOGIN_URL, {
                method: "POST",
                headers: this.commonHeader(),
            })
        );
    }

    /**
   * Fetch the user's profile.
   *
   * @returns {Promise<HttpResponse<unknown>>}
   */
    get(): Promise<HttpResponse<unknown>> {
        return handle<unknown>(
            fetch(USER_URL, {
                headers: this.authHeader(),
            })
        );
    }

    /**
     * Update the user's profile.
     *
     * @returns {Promise<HttpResponse<unknown>>}
     */
    update(): Promise<HttpResponse<unknown>> {
        return handle<unknown>(
            fetch(USER_URL, {
                method: "PUT",
                headers: this.authHeader(),
            })
        );
    }
}

const profileService = new ProfileService();

export default profileService;
