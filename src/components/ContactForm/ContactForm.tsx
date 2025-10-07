import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import type { TFunction } from 'i18next';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import type { Application } from '../../types';
import { updateApplication } from '../../services/api';
import styles from './ContactForm.module.scss';

const createApplicantSchema = (t: TFunction) => z.object({
  firstName: z.string().min(1, t('form.validation.required', { field: t('form.firstName') })),
  lastName: z.string().min(1, t('form.validation.required', { field: t('form.lastName') })),
  email: z.string()
    .min(1, t('form.validation.required', { field: t('form.email') }))
    .email(t('form.validation.email')),
  phone: z.string()
    .min(1, t('form.validation.required', { field: t('form.phone') }))
    .refine((phone) => phone.replace(/\D/g, '').length >= 10, t('form.validation.phone')),
});


type ApplicantFormData = z.infer<ReturnType<typeof createApplicantSchema>>;

interface ContactFormProps {
  application: Application;
}

export const ContactForm = ({ application }: ContactFormProps) => {
  const { t } = useTranslation();
  const applicantSchema = useMemo(() => createApplicantSchema(t), [t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<ApplicantFormData>({
    resolver: zodResolver(applicantSchema),
    mode: 'all',
    defaultValues: application.applicants?.[0] || {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
  });

  const [saveSuccess, setSaveSuccess] = useState(false);

  const onSubmit = async (data: ApplicantFormData) => {
    setSaveSuccess(false);
    try {
      await updateApplication(application.id, { applicants: [data] });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to update application', error);
      alert('Error saving data. Please try again.');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>{t('form.title')}</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">{t('form.firstName')}</label>
          <input
            id="firstName"
            type="text"
            {...register('firstName')}
            className={errors.firstName ? styles.inputError : ''}
          />
          {errors.firstName && (
            <span className={styles.errorText}>{errors.firstName.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">{t('form.lastName')}</label>
          <input
            id="lastName"
            type="text"
            {...register('lastName')}
            className={errors.lastName ? styles.inputError : ''}
          />
          {errors.lastName && (
            <span className={styles.errorText}>{errors.lastName.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">{t('form.email')}</label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && (
            <span className={styles.errorText}>{errors.email.message}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">{t('form.phone')}</label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className={errors.phone ? styles.inputError : ''}
          />
          {errors.phone && (
            <span className={styles.errorText}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit" disabled={!isDirty || !isValid || isSubmitting}>
            {isSubmitting ? t('form.savingButton') : t('form.saveButton')}
          </button>
          {saveSuccess && <span className={styles.saveSuccess}>{t('form.saveSuccess')}</span>}
        </div>
      </form>
    </div>
  );
};
