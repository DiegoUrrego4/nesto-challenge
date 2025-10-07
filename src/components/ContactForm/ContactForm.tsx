import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Application } from '../../types';
import { updateApplication } from '../../services/api';
import styles from './ContactForm.module.scss';

const applicantSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
});

type ApplicantFormData = z.infer<typeof applicantSchema>;

interface ContactFormProps {
  application: Application;
}

export const ContactForm = ({ application }: ContactFormProps) => {
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
      <h2>Main applicant information</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First name</label>
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
          <label htmlFor="lastName">Last name</label>
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
          <label htmlFor="email">Email</label>
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
          <label htmlFor="phone">Phone</label>
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
            {isSubmitting ? 'Saving...' : 'Save applicant info'}
          </button>
          {saveSuccess && <span className={styles.saveSuccess}>✓ Saved!</span>}
        </div>
      </form>
    </div>
  );
};
