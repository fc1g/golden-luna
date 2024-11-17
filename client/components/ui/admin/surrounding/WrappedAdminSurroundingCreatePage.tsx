'use client';

import { useToast } from '@/client/hooks/use-toast';
import { FORM_TOAST_DURATION } from '@/client/utils';
import { createPlace } from '@/server/actions/surrounding/createPlace';
import { useRouter } from '@/server/libs/i18n/routing';
import { useActionState, useEffect } from 'react';
import { Button } from '../../button';
import { Input } from '../../input';
import { Label } from '../../label';
import { Textarea } from '../../textarea';
import { ToastAction } from '../../toast';

type WrappedAdminSurroundingCreatePageProps = {
  translations: {
    title: string;
    subtitle: string;
    description: string;
    imageAltText: string;
    image: string;
    routeLink: string;
    distance: string;
    coords: {
      lat: string;
      lng: string;
    };
    submitting: string;
    submit: string;
  };
};

export default function WrappedAdminSurroundingCreatePage({
  translations: {
    submit,
    submitting,
    title,
    subtitle,
    description,
    image,
    routeLink,
    distance,
    imageAltText,
    coords: { lat, lng },
  },
}: WrappedAdminSurroundingCreatePageProps) {
  const [error, formAction, isPending] = useActionState(createPlace, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!error.details || !error.message) return;

    toast({
      title: error.message,
      description: error.details,
      variant: error.message === 'Success' ? 'default' : 'destructive',
      duration: FORM_TOAST_DURATION,
      action:
        error.message === 'Success' ? (
          <ToastAction
            onClick={() => router.back()}
            altText="Return to contacts page"
          >
            Return
          </ToastAction>
        ) : undefined,
    });
  }, [toast, error, router]);

  return (
    <form
      action={formAction}
      className="mx-auto my-12 grid max-w-screen-xl items-end gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 lg:px-6"
    >
      <fieldset>
        <Label htmlFor="titleEn">{title}En</Label>
        <Input
          id="titleEn"
          name="titleEn"
          type="text"
          minLength={5}
          maxLength={30}
          placeholder={title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titlePl">{title}Pl</Label>
        <Input
          id="titlePl"
          name="titlePl"
          type="text"
          minLength={5}
          maxLength={30}
          placeholder={title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titleEs">{title}Es</Label>
        <Input
          id="titleEs"
          name="titleEs"
          type="text"
          minLength={5}
          maxLength={30}
          placeholder={title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEn">{subtitle}En</Label>
        <Textarea
          id="subtitleEn"
          name="subtitleEn"
          minLength={20}
          maxLength={80}
          placeholder={subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitlePl">{subtitle}Pl</Label>
        <Textarea
          id="subtitlePl"
          name="subtitlePl"
          minLength={20}
          maxLength={80}
          placeholder={subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEs">{subtitle}Es</Label>
        <Textarea
          id="subtitleEs"
          name="subtitleEs"
          minLength={20}
          maxLength={80}
          placeholder={subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEn">{description}En</Label>
        <Textarea
          id="descriptionEn"
          name="descriptionEn"
          placeholder={description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionPl">{description}Pl</Label>
        <Textarea
          id="descriptionPl"
          name="descriptionPl"
          placeholder={description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEs">{description}Es</Label>
        <Textarea
          id="descriptionEs"
          name="descriptionEs"
          placeholder={description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEn">{imageAltText}En</Label>
        <Textarea
          id="imageAltTextEn"
          name="imageAltTextEn"
          minLength={20}
          maxLength={100}
          placeholder={imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextPl">{imageAltText}Pl</Label>
        <Textarea
          id="imageAltTextPl"
          name="imageAltTextPl"
          minLength={20}
          maxLength={100}
          placeholder={imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEs">{imageAltText}Es</Label>
        <Textarea
          id="imageAltTextEs"
          name="imageAltTextEs"
          minLength={20}
          maxLength={100}
          placeholder={imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="image">{image}</Label>
        <Input
          id="image"
          name="image"
          type="file"
          accept=".webp"
          placeholder={image}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="distance">{distance}</Label>
        <Input
          id="distance"
          name="distance"
          type="text"
          placeholder={distance}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="routeLink">{routeLink}</Label>
        <Input
          id="routeLink"
          name="routeLink"
          type="url"
          placeholder={routeLink}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="lat">{lat}</Label>
        <Input id="lat" name="lat" type="text" placeholder={lat} required />
      </fieldset>

      <fieldset>
        <Label htmlFor="lng">{lng}</Label>
        <Input id="lng" name="lng" type="text" placeholder={lng} required />
      </fieldset>

      <Button variant="default" size="lg" disabled={isPending}>
        {isPending ? submitting : submit}
      </Button>
    </form>
  );
}
