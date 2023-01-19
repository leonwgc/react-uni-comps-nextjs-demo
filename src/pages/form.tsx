import React, { useEffect, useState } from 'react';
import {
  Input,
  InputNumber,
  Form,
  Button,
  useCountdown,
  i18n,
  initI18n,
  useTranslation,
} from 'react-uni-comps';
import * as langs from '../langs';

const defaultLang = 'zh';
const defaultNamespace = 'ns';

initI18n({
  defaultNS: defaultNamespace,
  fallbackLng: defaultLang,
});

i18n.addResources('zh', defaultNamespace, langs.zh);
i18n.addResources('en', defaultNamespace, langs.en);

export default function App() {
  const { countdown, isRunning, start, isReStarted } = useCountdown(60);
  const { t } = useTranslation(defaultNamespace);
  const [lang, setLang] = useState(defaultLang);

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Form toastError>
      <Form.Item
        name="phone"
        rules={[
          { required: true, message: t('inputTel') },
          {
            pattern: /^1\d{10}$/,
            message: t('inputTel'),
          },
        ]}
      >
        <InputNumber placeholder={t('inputTel')} clearable maxLength={11} />
      </Form.Item>

      <Form.Item name="code">
        <Input
          clearable
          placeholder={t('inputCode')}
          maxLength={6}
          suffix={
            <Button as="a" onClick={isRunning ? undefined : start}>
              {isRunning
                ? countdown + t('sec')
                : `${isReStarted ? t('retry') : t('verifycode')}`}
            </Button>
          }
        />
      </Form.Item>

      <Button
        type="primary"
        block
        wait
        style={{
          borderRadius: 20,
          height: 36,
          margin: '20px auto',
        }}
      >
        {t('app.account.login')}
      </Button>
    </Form>
  );
}
