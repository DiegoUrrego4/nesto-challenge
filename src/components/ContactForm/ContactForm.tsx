import { useState, useEffect } from 'react';
import type { Application, Applicant } from '../../types';
import { updateApplication } from '../../services/api';
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
  const [formData, setFormData] = useState<Omit<Applicant, 'id'>>(initialFormData);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (application.applicants && application.applicants[0]) {
      setFormData(application.applicants[0]);
    }
  }, [application]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      await updateApplication(application.id, { applicants: [formData] });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to update application', error);
      alert('Error saving data. Please try again.');
    } finally {
      setIsSaving(false);
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
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
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