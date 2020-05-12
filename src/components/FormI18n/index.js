import React, { useState } from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import { languages } from '../../utils';

const FormI18n = props => {
    const { t, i18n } = useTranslation();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const date = new Intl.DateTimeFormat(i18n.language, {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(new Date());

    return (
        <div>
            <div>{t('CurrentLocale', { locale: i18n.language })}</div>
            <button
                onClick={() => i18n.changeLanguage(languages.ru)}>
                {t(languages.ru)}
            </button>
            <button
                onClick={() => i18n.changeLanguage(languages.en)}
            >
                {t(languages.en)}
            </button>
            <div>
                {t("TodayKey")} {date}
            </div>
            <input
                value={identifier}
                placeholder={t("Login:LoginPlaceholder")}
                onChange={event => {
                    setIdentifier(event.target.value);
                }}
            />
            <br />
            <input
                type="password"
                value={password}
                placeholder={t("Login:Password", "Password word default")}
                onChange={event => {
                    setPassword(event.target.value);
                }}
            />
            <br />
            <button
                onClick={() => {
                    setIsLoading(true);
                    setTimeout(() => setIsLoading(false), 2000)
                }}>
                {t("Login:Login")}
            </button>
            {isLoading &&
                <div>{t('LoadingMessage')}</div>}

        </div>
    );
};


export default FormI18n;