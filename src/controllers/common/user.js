export default class UserCommon {
    static DEFAULT_USER_AFTER_LOGIN_URL = "/dashboard";
    static DEFAULT_USER_AFTER_LOGIN_FAILED_URL = "/";
    static DEFAULT_REDIRECT_TIMEOUT = 2000;

    static CLASS_OK = "is-success";
    static CLASS_ERR = "is-danger";

    static getUserAfterLoginRedirectURL(app) {
        return app.getOptions(
            "modules.user.afterLoginURL",
            this.DEFAULT_USER_AFTER_LOGIN_URL
        );
    }
    static getRedirectTimeout(app) {
        return app.getOptions(
            "modules.user.redirectTimout",
            this.DEFAULT_REDIRECT_TIMEOUT
        );
    }
    static goDashboard() {
        document.location.assign("/dashboard");
    }
    static goLogin(app) {
        document.location.assign("/login");
    }
    static goRegister() {
        document.location.assign("/register");
    }
    static goRestore() {
        document.location.assign("/restore");
    }
    static goLogout() {
        document.location.assign("/logout");
    }
    static isError(e) {
        return e instanceof Error;
    }
    static ROLES = [
        {
            id: 1,
            title: "root",
            type: "danger",
        },
        {
            id: 2,
            title: "admin",
            type: "warning",
        },
        {
            id: 3,
            title: "client",
            type: "success",
        },
        {
            id: 4,
            title: "user",
            type: "info",
        },
        {
            id: 5,
            title: "manager",
            type: "primary",
        },
        {
            id: 6,
            title: "logist",
            type: "primary",
        },
        {
            id: 7,
            title: "hr",
            type: "primary",
        },
    ];
    static FIELDS = {
        username: {
            label: "Логин",
            placeholder: "Имя пользователя",
        },
        password: {
            label: "Пароль",
            placeholder: "Введите пароль",
            minLength: 8,
        },
        password2: {
            label: "Повторите пароль",
            placeholder: "Введите пароль еще раз",
            minLength: 8,
        },
        email: {
            label: "Email",
            placeholder: "Ваш email адрес",
        },
        tel: {
            label: "Ваш номер телефона",
            placeholder: "",
        },
        active: {
            label: "Активна",
            placeholder: "",
        },
        role: {
            label: "Роли в системе",
            placeholder: "",
        },
        country: {
            label: "Основной язык",
            placeholder: "",
        },
        code: {
            label: "Код подтверждения",
            placeholder: "Введите полученный код.",
        },
    };
    static fieldInit(type, mutation = {}) {
        let field = {
            label: "",
            placeholder: "",
            enabled: true,
            value: "",
            required: true,
            validated: false,
            valid: false,
        };
        if (Object.prototype.hasOwnProperty.call(this.FIELDS, type)) {
            Object.assign(field, this.FIELDS[type]);
        }
        if (mutation) {
            Object.assign(field, mutation);
        }
        return field;
    }
    static COUNTRIES = [
        {
            id: "ru",
            title: "Россия",
        },
    ];

    static formatPhone(val) {
        //starting from 11 digits in phone number
        const slots = [1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5];
        let digits = val.replace(/\D/g, "");
        //if there are more, move them to country code slot
        if (digits.length > 11) {
            let d = digits.length - 11;
            while (d > 0) {
                d--;
                slots.unshift(1);
            }
        }
        let stack = ["", "", "", "", ""];
        Array.from(digits).forEach((digit, index) => {
            let slot = slots[index];
            stack[slot - 1] = stack[slot - 1] + digit;
        });
        return `+${stack[0]} (${stack[1]}) ${stack[2]}-${stack[3]}-${stack[4]}`;
    }
}
