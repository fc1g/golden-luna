'use client';

import { useToast } from '@/client/hooks/use-toast';
import { SurroundingPlace } from '@/client/types/SurroundingPlace';
import { FORM_TOAST_DURATION } from '@/client/utils';
import { updatePlace } from '@/server/actions/surrounding/updatePlace';
import { useRouter } from '@/server/libs/i18n/routing';
import { useActionState, useEffect, useState } from 'react';
import { ZodError } from 'zod';
import { Button } from '../../button';
import { Input } from '../../input';
import { Label } from '../../label';
import { Textarea } from '../../textarea';
import { ToastAction } from '../../toast';

type WrappedAdminSurroundingUpdatePageProps = {
  place: SurroundingPlace;
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

export default function WrappedAdminSurroundingUpdatePage({
  place,
  translations,
}: WrappedAdminSurroundingUpdatePageProps) {
  const updateBookedDate = async (
    _: {
      message: string;
      details: string;
    },
    formData: FormData,
  ) => {
    const id = place.id;

    try {
      await updatePlace(id, formData);

      return {
        message: 'Success',
        details: 'Successfully updated surroundingPlace',
      };
    } catch (err) {
      if (err instanceof ZodError) {
        console.error('Validation failed:', err);
        return {
          message: 'Validation failed',
          details: err.errors.map(e => e.message).join(', '),
        };
      }

      console.error('An error occurred while updating surroundingPlace:', err);
      return {
        message: 'Failed',
        details: 'Failed to update surroundingPlace',
      };
    }
  };

  const [error, formAction, isPending] = useActionState(updateBookedDate, {
    message: '',
    details: '',
  });
  const { toast } = useToast();
  const router = useRouter();

  const [titleEn, setTitleEn] = useState(place.title.en);
  const [titlePl, setTitlePl] = useState(place.title.pl);
  const [titleEs, setTitleEs] = useState(place.title.es);

  const [subtitleEn, setSubtitleEn] = useState(place.subtitle.en);
  const [subtitlePl, setSubtitlePl] = useState(place.subtitle.pl);
  const [subtitleEs, setSubtitleEs] = useState(place.subtitle.es);

  const [descriptionEn, setDescriptionEn] = useState(place.description.en);
  const [descriptionPl, setDescriptionPl] = useState(place.description.pl);
  const [descriptionEs, setDescriptionEs] = useState(place.description.es);

  const [imageAltTextEn, setImageAltTextEn] = useState(place.imageAltText.en);
  const [imageAltTextPl, setImageAltTextPl] = useState(place.imageAltText.pl);
  const [imageAltTextEs, setImageAltTextEs] = useState(place.imageAltText.es);

  const [distance, setDistance] = useState(place.distance);
  const [routeLink, setRouteLink] = useState(place.routeLink);
  const [lat, setLat] = useState(place.coords.lat);
  const [lng, setLng] = useState(place.coords.lng);

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
        <Label htmlFor="titleEn">{translations.title}En</Label>
        <Input
          id="titleEn"
          name="titleEn"
          type="text"
          value={titleEn}
          onChange={e => setTitleEn(e.target.value)}
          minLength={5}
          maxLength={30}
          placeholder={translations.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titlePl">{translations.title}Pl</Label>
        <Input
          id="titlePl"
          name="titlePl"
          type="text"
          value={titlePl}
          onChange={e => setTitlePl(e.target.value)}
          minLength={5}
          maxLength={30}
          placeholder={translations.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="titleEs">{translations.title}Es</Label>
        <Input
          id="titleEs"
          name="titleEs"
          type="text"
          value={titleEs}
          onChange={e => setTitleEs(e.target.value)}
          minLength={5}
          maxLength={30}
          placeholder={translations.title}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEn">{translations.subtitle}En</Label>
        <Textarea
          id="subtitleEn"
          name="subtitleEn"
          value={subtitleEn}
          onChange={e => setSubtitleEn(e.target.value)}
          minLength={20}
          maxLength={80}
          placeholder={translations.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitlePl">{translations.subtitle}Pl</Label>
        <Textarea
          id="subtitlePl"
          name="subtitlePl"
          minLength={20}
          maxLength={80}
          value={subtitlePl}
          onChange={e => setSubtitlePl(e.target.value)}
          placeholder={translations.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="subtitleEs">{translations.subtitle}Es</Label>
        <Textarea
          id="subtitleEs"
          name="subtitleEs"
          value={subtitleEs}
          onChange={e => setSubtitleEs(e.target.value)}
          minLength={20}
          maxLength={80}
          placeholder={translations.subtitle}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEn">{translations.description}En</Label>
        <Textarea
          id="descriptionEn"
          name="descriptionEn"
          value={descriptionEn}
          onChange={e => setDescriptionEn(e.target.value)}
          placeholder={translations.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionPl">{translations.description}Pl</Label>
        <Textarea
          id="descriptionPl"
          name="descriptionPl"
          value={descriptionPl}
          onChange={e => setDescriptionPl(e.target.value)}
          placeholder={translations.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="descriptionEs">{translations.description}Es</Label>
        <Textarea
          id="descriptionEs"
          name="descriptionEs"
          value={descriptionEs}
          onChange={e => setDescriptionEs(e.target.value)}
          placeholder={translations.description}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEn">{translations.imageAltText}En</Label>
        <Textarea
          id="imageAltTextEn"
          name="imageAltTextEn"
          minLength={20}
          maxLength={100}
          value={imageAltTextEn}
          onChange={e => setImageAltTextEn(e.target.value)}
          placeholder={translations.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextPl">{translations.imageAltText}Pl</Label>
        <Textarea
          id="imageAltTextPl"
          name="imageAltTextPl"
          minLength={20}
          maxLength={100}
          value={imageAltTextPl}
          onChange={e => setImageAltTextPl(e.target.value)}
          placeholder={translations.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="imageAltTextEs">{translations.imageAltText}Es</Label>
        <Textarea
          id="imageAltTextEs"
          name="imageAltTextEs"
          minLength={20}
          maxLength={100}
          value={imageAltTextEs}
          onChange={e => setImageAltTextEs(e.target.value)}
          placeholder={translations.imageAltText}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="image">{translations.image}</Label>
        <Input
          id="image"
          name="image"
          type="file"
          accept=".webp"
          placeholder={translations.image}
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="distance">{translations.distance}</Label>
        <Input
          id="distance"
          name="distance"
          type="text"
          value={`${distance}`}
          onChange={e => setDistance(+e.target.value)}
          placeholder={translations.distance}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="routeLink">{translations.routeLink}</Label>
        <Input
          id="routeLink"
          name="routeLink"
          type="url"
          value={routeLink}
          onChange={e => setRouteLink(e.target.value)}
          placeholder={translations.routeLink}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="lat">{translations.coords.lat}</Label>
        <Input
          id="lat"
          name="lat"
          type="text"
          value={`${lat}`}
          onChange={e => setLat(+e.target.value)}
          placeholder={translations.coords.lat}
          required
        />
      </fieldset>

      <fieldset>
        <Label htmlFor="lng">{translations.coords.lng}</Label>
        <Input
          id="lng"
          name="lng"
          type="text"
          value={`${lng}`}
          onChange={e => setLng(+e.target.value)}
          placeholder={translations.coords.lng}
          required
        />
      </fieldset>

      <Button variant="default" size="lg" disabled={isPending}>
        {isPending ? translations.submitting : translations.submit}
      </Button>
    </form>
  );
}
