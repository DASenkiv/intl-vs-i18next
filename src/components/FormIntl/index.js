import React, { useState } from "react";
import { IntlProvider, useIntl, FormattedMessage, FormattedPlural } from "react-intl";
import en from "./locales/en";
import ru from "./locales/ru";
import { languages } from '../../utils';

const locales = { en, ru };

const FormI18nWithoutProvider = props => {
    const intl = useIntl();

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const date = intl.formatDate(Date.now(), {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    console.log('mess', intl.messages)


    return (
        <div>
            <div>
                <FormattedMessage
                    id="TodayKey"
                    values={{
                        date
                    }} />
            </div>
            <input
                value={identifier}
                placeholder={intl.formatMessage({ id: "LoginPlaceholder" })}
                onChange={event => {
                    setIdentifier(event.target.value);
                }}
            />
            <br />
            <input
                type="password"
                value={password}
                placeholder={intl.formatMessage({
                    id: "Password",
                    defaultMessage: "Password word default"
                })}
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
                <FormattedMessage id="Login" />
            </button>
            {isLoading &&
                <div><FormattedMessage id="LoadingMessage" /></div>}
        </div>
    );
};

const FormI18n = (props) => {

    const [language, setLanguage] = useState(languages.en);

    return (
        <IntlProvider
            locale={language}
            messages={locales[language]}
            key={language}
            defaultLocale="en"
        >
            <div>
                <div>
                    <FormattedMessage id="CurrentLocale" />: <FormattedMessage id={language} /> </div>
                <button onClick={() => setLanguage(languages.ru)}><FormattedMessage id={languages.ru} /></button>
                <button onClick={() => setLanguage(languages.en)}><FormattedMessage id={languages.en} /></button>
                <FormI18nWithoutProvider {...props} />
            </div>
        </IntlProvider>
    )
}



export default FormI18n;