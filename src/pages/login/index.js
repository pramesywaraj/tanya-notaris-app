/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import styles from "styles/login.module.css";

import { Button } from "components/Button";
import { TextInput } from "components/Input";

export default function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [loginPayload, setLoginPayload] = useState({
        email: "",
        password: "",
    });

    const [registerPayload, setRegisterPayload] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChangeValue = (event) => {
        const { name, value } = event.target;

        event.preventDefault();

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

    const handleSubmitLogin = (event) => {
        event.preventDefault();

        console.log("Check Login", event);
    };

    const handleSubmitRegister = (event) => {
        event.preventDefault();

        console.log("Check Register", event);
    };

    const handleChangesScreen = () => {
        setIsRegister(!isRegister);
    };

    const renderLogin = (
        <div className={styles["form-wrapper"]}>
            <h2>Sign In,</h2>
            <form onSubmit={handleSubmitLogin} className="form-container">
                <TextInput
                    label="Email"
                    name="email"
                    placeholder="Masukkan email Anda"
                    type="email"
                    value={loginPayload.email}
                    onChange={handleChangeValue}
                    required
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
                />
                <Button
                    styles={{ width: "100%", maxWidth: 445, marginTop: 32, borderRadius: 8 }}
                    type="submit"
                >
                    Masuk
                </Button>
            </form>
            <div className="login-notlogged-container">
                <p className="font-body">
                    Belum punya akun?{" "}
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={handleChangesScreen}
                        className="text-primary underline font-semibold"
                    >
                        Daftar
                    </a>
                </p>
            </div>
        </div>
    );

    const renderRegister = (
        <div className={styles["form-wrapper"]}>
            <h2>Sign Up,</h2>
            <form onSubmit={handleSubmitRegister} className={styles["form-container"]}>
                <TextInput
                    label="Nama Lengkap"
                    name="name"
                    placeholder="Masukkan nama lengkap Anda"
                    type="text"
                    value={registerPayload.name}
                    onChange={handleChangeValue}
                    required
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
                />
                <Button
                    styles={{ width: "100%", maxWidth: 445, marginTop: 32, borderRadius: 8 }}
                    type="submit"
                >
                    Daftar
                </Button>
            </form>
            <div className={styles["login-notlogged-container"]}>
                <p className="font-body">
                    Sudah punya akun?{" "}
                    <a
                        style={{ cursor: "pointer" }}
                        onClick={handleChangesScreen}
                        className="text-primary underline font-semibold"
                    >
                        Masuk
                    </a>
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
