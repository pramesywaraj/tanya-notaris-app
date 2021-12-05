/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import usePost from "hooks/usePost";
import { useRouter } from "next/router";
import { useAuthContext } from "contexts/AuthContext";

import styles from "styles/login.module.css";

import { Button } from "components/Button";
import { TextInput } from "components/Input";

import { LOGGED_IN } from "constants/reduxConst";

const loginDefaultVal = {
    email: "",
    password: "",
};

const registerDefaultVal = {
    name: "",
    email: "",
    password: "",
};

export default function Login() {
    const { dispatch } = useAuthContext();
    const [isRegister, setIsRegister] = useState(false);
    const [isError, setIsError] = useState(false);
    const [formError, setFormErrorMessage] = useState({});
    const [loginPayload, setLoginPayload] = useState(loginDefaultVal);
    const [registerPayload, setRegisterPayload] = useState(registerDefaultVal);
    const [successMessage, setSuccessMessage] = useState("");

    const { data, errors, isRequesting, handlePost } = usePost();

    const router = useRouter();

    useEffect(() => {
        if (errors) setIsError(true);
    }, [errors]);

    useEffect(() => {
        if (successMessage) setIsError(false);
    }, [successMessage]);

    const handleChangeValue = (event) => {
        const { name, value } = event.target;

        event.preventDefault();

        checkRegex(name, value);

        if (isRegister) {
            setRegisterPayload({
                ...registerPayload,
                [name]: value,
            });

            return;
        }

        setLoginPayload({
            ...loginPayload,
            [name]: value,
        });
    };

    const checkRegex = (name, value) => {
        const tempErr = { ...formError };

        switch (name) {
            case "email": {
                const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

                if (!emailRegex.test(value)) tempErr[name] = "Email tidak sesuai dengan format.";
                if (emailRegex.test(value)) delete tempErr[name];

                break;
            }
            case "password": {
                if (value.length < 8) tempErr[name] = "Minimum 8 karakter.";
                if (value.length >= 8) delete tempErr[name];

                break;
            }
            case "name": {
                if (value.length < 2) tempErr[name] = "Minimum 2 karakter.";
                if (value.length >= 2) delete tempErr[name];

                break;
            }
            default:
                break;
        }

        setFormErrorMessage(tempErr);
    };

    // Login
    const handleSubmitLogin = (event) => {
        event.preventDefault();
        if (Object.entries(formError).length > 0) return false;

        handlePost("v1/auth/login", loginPayload, {}, async (data) => {
            setSuccessMessage("Anda berhasil login.");

            const { user, access_token, token_type } = data;

            await dispatch({
                type: LOGGED_IN,
                payload: {
                    userData: { ...user },
                    token: `${token_type} ${access_token}`,
                },
            });

            setTimeout(() => {
                router.push("/");
            }, 2000);
        });
    };

    // Register
    const handleSubmitRegister = (event) => {
        event.preventDefault();
        if (Object.entries(formError).length > 0) return false;

        handlePost("v1/auth/register", registerPayload, {}, () => {
            setSuccessMessage("Akun Anda telah berhasil terdaftar, silahkan masuk.");
            handleChangesScreen();
        });
    };

    const handleChangesScreen = () => {
        if (isRegister) setRegisterPayload(registerDefaultVal);
        if (!isRegister) setLoginPayload(loginDefaultVal);

        setIsRegister(!isRegister);
        setIsError(false);
        setFormErrorMessage({});
    };

    // Login
    const renderLogin = (
        <div className={styles["form-wrapper"]}>
            <h2>Sign In,</h2>
            {isError && errors && <p className={styles["error-text"]}>{errors}</p>}
            {successMessage && <p className={styles["success-text"]}>{successMessage}</p>}
            <form onSubmit={handleSubmitLogin} className="form-container">
                <TextInput
                    label="Email"
                    name="email"
                    placeholder="Masukkan email Anda"
                    type="email"
                    value={loginPayload.email}
                    onChange={handleChangeValue}
                    required
                    error={formError["email"]}
                />
                <TextInput
                    containerStyle={{ marginTop: 16 }}
                    label="Kata Sandi"
                    name="password"
                    placeholder="Masukkan kata sandi Anda"
                    type="password"
                    value={loginPayload.password}
                    onChange={handleChangeValue}
                    required
                    error={formError["password"]}
                />
                <Button
                    disabled={
                        Object.entries(formError).length > 0 ||
                        !loginPayload.email ||
                        !loginPayload.password
                    }
                    classNames="form-button"
                    styles={{ width: "100%", maxWidth: 445, marginTop: 32, borderRadius: 8 }}
                    type="submit"
                >
                    {isRequesting ? "Tunggu sebentar..." : "Masuk"}
                </Button>
            </form>
            <div className="login-notlogged-container">
                <p className="font-body">
                    Belum punya akun?{" "}
                    <button
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                        onClick={handleChangesScreen}
                        className="text-primary underline font-semibold"
                        onKeyPress={() => {}}
                    >
                        Daftar
                    </button>
                </p>
            </div>
        </div>
    );

    // Register
    const renderRegister = (
        <div className={styles["form-wrapper"]}>
            <h2>Sign Up,</h2>
            {isError && errors && <p className={styles["error-text"]}>{errors}</p>}
            {successMessage && <p className={styles["success-text"]}>{successMessage}</p>}
            <form onSubmit={handleSubmitRegister} className={styles["form-container"]}>
                <TextInput
                    label="Nama Lengkap"
                    name="name"
                    placeholder="Masukkan nama lengkap Anda"
                    type="text"
                    value={registerPayload.name}
                    onChange={handleChangeValue}
                    required
                    error={formError["name"]}
                />
                <TextInput
                    containerStyle={{ marginTop: 16 }}
                    label="Email"
                    name="email"
                    placeholder="Masukkan email Anda"
                    type="email"
                    value={registerPayload.email}
                    onChange={handleChangeValue}
                    required
                    error={formError["email"]}
                />
                <TextInput
                    containerStyle={{ marginTop: 16 }}
                    label="Kata Sandi"
                    name="password"
                    placeholder="Masukkan kata sandi Anda"
                    type="password"
                    value={registerPayload.password}
                    onChange={handleChangeValue}
                    required
                    error={formError["password"]}
                />
                <Button
                    disabled={
                        Object.entries(formError).length > 0 ||
                        !registerPayload.email ||
                        !registerPayload.password ||
                        !registerPayload.name
                    }
                    classNames="form-button"
                    styles={{ width: "100%", maxWidth: 445, marginTop: 32, borderRadius: 8 }}
                    type="submit"
                >
                    {isRequesting ? "Tunggu sebentar..." : "Daftar"}
                </Button>
            </form>
            <div className={styles["login-notlogged-container"]}>
                <p className="font-body">
                    Sudah punya akun?{" "}
                    <button
                        tabIndex={0}
                        style={{ cursor: "pointer" }}
                        onClick={handleChangesScreen}
                        className="text-primary underline font-semibold"
                        onKeyPress={() => {}}
                    >
                        Masuk
                    </button>
                </p>
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles["login-container"]}>
                {!isRegister && renderLogin}
                {isRegister && renderRegister}
            </div>
            <div className={styles["background-container"]}>
                <div className={styles["background-text-container"]}>
                    <p className="text-header2 text-white">Welcome to</p>
                    <div className="flex flex-row justify-center">
                        <h1 className="font-bold text-large text-purple mr-2">Tanya</h1>
                        <h1 className="font-bold text-large text-white">Notaris</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
