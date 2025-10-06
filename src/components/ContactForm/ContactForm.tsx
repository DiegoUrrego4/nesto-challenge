import { useState, useEffect, type FormEvent } from 'react';
import type { Application } from '../../types';
import { updateApplication } from '../../services/api';
import { useForm } from '../../hooks';
import styles from './ContactForm.module.scss';

interface ContactFormProps {
  application: Application;
}

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export const ContactForm = ({ application }: ContactFormProps) => {
  const {
    formState,
    firstName,
    lastName,
    email,
    phone,
    onInputChange,
    setFormState,
  } = useForm(initialFormData);

  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (application?.applicants?.[0]) {
      const applicantData = application.applicants[0];
      setFormState({
        firstName: applicantData.firstName || '',
        lastName: applicantData.lastName || '',
        email: applicantData.email || '',
        phone: applicantData.phone || '',
      });
    }
  }, [application, setFormState]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await updateApplication(application.id, { applicants: [formState] });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to update application', error);
      alert('Error saving data. Please try again.');
    } finally {
      setIsSaving(false);
      // TODO: redirigir a home
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Main applicant information</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={onInputChange}
            required
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" disabled={isSaving}>
            {isSaving ? 'Saving...' : 'Save applicant info'}
          </button>
          {saveSuccess && <span className={styles.saveSuccess}>✓ Saved!</span>}
        </div>
      </form>
    </div>
  );
};
