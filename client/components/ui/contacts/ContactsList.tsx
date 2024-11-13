import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/client/components/ui/accordion';
import { Button } from '@/client/components/ui/button';
import { MdEmail, MdOutlineMap, MdPhone, MdWeb } from 'react-icons/md';

type ContactsListProps = {
  translations: {
    phoneText: string;
    emailText: string;
    importantFirstPart: string;
    importantSecondPart: string;
    mainContact: {
      trigger: string;
      customField: string;
      customDataValue: string;
      langPreference: string;
    };
    supportContact: {
      trigger: string;
      customField: string;
      langPreference: string;
    };
  };
};

export default function ContactsList({
  translations: {
    phoneText,
    emailText,
    importantFirstPart,
    importantSecondPart,
    mainContact,
    supportContact,
  },
}: ContactsListProps) {
  const data = [
    {
      id: 'item-1',
      trigger: mainContact.trigger,
      phone: '+48 608 072 786',
      email: 'GoldenLuna@wp.pl',
      customField: mainContact.customField,
      customDataKey: 'https://maps.app.goo.gl/Fr8FTownycwkHqcR6',
      customDataValue: mainContact.customDataValue,
      langPreference: mainContact.langPreference,
    },
    {
      id: 'item-2',
      trigger: supportContact.trigger,
      phone: '+34 659 901 386',
      email: 'Info@avsinmo.com',
      customField: supportContact.customField,
      customDataKey: 'https://www.avsinmo.com/',
      customDataValue: 'Avsinmo.com',
      langPreference: supportContact.langPreference,
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-2 ~/md:~mb-8/16 2xl:max-w-screen-2xl">
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
              <AccordionTrigger className="rounded px-2 focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                {trigger}
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-2 text-center text-muted-foreground lg:text-left">
                  <ul className="flex flex-col items-center justify-center space-y-6 p-3 sm:flex-row sm:space-x-8 sm:space-y-0">
                    <li className="flex w-44 space-x-2 sm:flex-1">
                      <div className="rounded-xl bg-muted p-4">
                        <MdPhone className="size-6 text-secondary-foreground" />
                      </div>

                      <div className="border-border">
                        <h3 className="text-left text-lg font-semibold text-secondary-foreground">
                          {phoneText}:
                        </h3>
                        <a
                          tabIndex={-1}
                          className="text-primary-600 dark:text-primary-300 text-left text-xs focus:outline-none md:text-sm"
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
                          {emailText}:
                        </h3>
                        <a
                          tabIndex={-1}
                          className="text-left text-xs text-primary focus:outline-none md:text-sm"
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
                        {customField === mainContact.customField ? (
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
                          tabIndex={-1}
                          target="_blank"
                          className="text-left text-xs text-primary focus:outline-none md:text-sm"
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
                      {importantFirstPart}
                    </span>{' '}
                    {importantSecondPart}
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
