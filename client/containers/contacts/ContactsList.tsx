import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/client/components/ui/accordion';
import { Button } from '@/client/components/ui/button';
import { useTranslations } from 'next-intl';
import { MdEmail, MdOutlineMap, MdPhone, MdWeb } from 'react-icons/md';

export default function ContactsList() {
  const t = useTranslations('contacts.list');

  const data = [
    {
      id: 'item-1',
      trigger: t('firstContact.trigger'),
      phone: '+48 608 072 786',
      email: 'GoldenLuna@wp.pl',
      customField: t('firstContact.customField'),
      customDataKey: 'https://maps.app.goo.gl/Fr8FTownycwkHqcR6',
      customDataValue: t('firstContact.customDataValue'),
      langPreference: t('firstContact.langPreference'),
    },
    {
      id: 'item-2',
      trigger: t('secondContact.trigger'),
      phone: '+34 659 901 386',
      email: 'Info@avsinmo.com',
      customField: t('secondContact.customField'),
      customDataKey: 'https://www.avsinmo.com/',
      customDataValue: 'Avsinmo.com',
      langPreference: t('secondContact.langPreference'),
    },
  ];

  return (
    <section className="mx-auto mb-8 max-w-screen-xl px-2 2xl:max-w-screen-2xl">
      <Accordion type="single" collapsible>
        {data.map(
          ({
            id,
            trigger,
            phone,
            email,
            customField,
            customDataValue,
            customDataKey,
            langPreference,
          }) => (
            <AccordionItem key={id} value={id}>
              <AccordionTrigger>{trigger}</AccordionTrigger>
              <AccordionContent>
                <div className="mb-2 text-center text-muted-foreground lg:text-left">
                  <ul className="flex flex-col items-center justify-center space-y-6 p-3 sm:flex-row sm:space-x-8 sm:space-y-0">
                    <li className="flex w-44 space-x-2 sm:flex-1">
                      <div className="rounded-xl bg-muted p-4">
                        <MdPhone className="size-6 text-secondary-foreground" />
                      </div>

                      <div className="border-border">
                        <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                          {t('phone')}:
                        </h3>
                        <a
                          className="text-primary-600 dark:text-primary-300 text-left text-xs md:text-sm"
                          href={`tel:${phone}`}
                        >
                          <Button variant="link" size={null}>
                            {phone}
                          </Button>
                        </a>
                      </div>
                    </li>

                    <li className="flex w-44 space-x-2 sm:flex-1">
                      <div className="rounded-xl bg-muted p-4">
                        <MdEmail className="size-6 text-secondary-foreground" />
                      </div>
                      <div className="border-border">
                        <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                          {t('email')}:
                        </h3>
                        <a
                          className="text-left text-xs text-primary md:text-sm"
                          href={`mailto:${email}`}
                        >
                          <Button variant="link" size={null}>
                            {email}
                          </Button>
                        </a>
                      </div>
                    </li>

                    <li className="flex w-44 space-x-2 sm:flex-1">
                      <div className="rounded-xl bg-muted p-4">
                        {customField === t('firstContact.customField') ? (
                          <MdOutlineMap className="size-6 text-secondary-foreground" />
                        ) : (
                          <MdWeb className="size-6 text-secondary-foreground" />
                        )}
                      </div>

                      <div className="border-border">
                        <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                          {customField}:
                        </h3>
                        <a
                          target="_blank"
                          className="text-left text-xs text-primary md:text-sm"
                          href={customDataKey}
                        >
                          <Button variant="link" size={null}>
                            {customDataValue}
                          </Button>
                        </a>
                      </div>
                    </li>
                  </ul>

                  <p className="mb-2 mt-4 text-center text-xs text-muted-foreground sm:text-sm">
                    <strong>{langPreference}</strong>
                  </p>
                </div>

                <p className="text-center text-xs text-muted-foreground sm:text-sm">
                  <strong>
                    <span className="text-red-800 dark:text-red-300">
                      {t('important.firstPart')}
                    </span>{' '}
                    {t('important.secondPart')}
                  </strong>
                </p>
              </AccordionContent>
            </AccordionItem>
          ),
        )}
      </Accordion>
    </section>
  );
}
