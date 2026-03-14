'use client';

import Footer from '@/components/shared/Footer';
import RegisterNavbar from '@/components/register/RegisterNavbar';
import { FormEvent, useMemo, useState } from 'react';

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  year: string;
  participationType: string;
  teamName: string;
  experience: string;
  expectations: string;
  terms: boolean;
  tracks: string[];
};

type FormErrors = Partial<Record<keyof FormValues, string>> & {
  tracks?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s\-\+\(\)]{10,}$/;

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  college: '',
  year: '',
  participationType: '',
  teamName: '',
  experience: '',
  expectations: '',
  terms: false,
  tracks: []
};

export default function RegisterPage() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error' | ''; text: string }>({
    type: '',
    text: ''
  });

  const isTeam = values.participationType === 'team';

  const fieldClass = (name: keyof FormValues) => `form-input${errors[name] ? ' error' : ''}`;

  const validateField = (name: keyof FormValues, current: FormValues): string => {
    const value =
      name === 'terms'
        ? current.terms
          ? 'true'
          : ''
        : name === 'tracks'
          ? current.tracks.join(',')
          : (current[name] as string).trim();

    if (name === 'fullName' && value.length < 3) {
      return value.length === 0 ? 'This field is required' : 'Minimum 3 characters required';
    }

    if (name === 'email' && (!value || !EMAIL_REGEX.test(value))) {
      return value.length === 0 ? 'This field is required' : 'Please enter a valid email address';
    }

    if (name === 'phone' && (!value || !PHONE_REGEX.test(value))) {
      return value.length === 0 ? 'This field is required' : 'Please enter a valid phone number';
    }

    if (name === 'college' && !value) {
      return 'This field is required';
    }

    if (name === 'year' && !value) {
      return 'Please select an option';
    }

    if (name === 'participationType' && !value) {
      return 'Please select an option';
    }

    if (name === 'teamName' && isTeam && !value) {
      return 'This field is required';
    }

    if (name === 'tracks' && current.tracks.length === 0) {
      return 'Please select at least one track';
    }

    if (name === 'terms' && !current.terms) {
      return 'You must agree to the terms and conditions';
    }

    return '';
  };

  const validateAll = (current: FormValues) => {
    const nextErrors: FormErrors = {};
    const requiredFields: (keyof FormValues)[] = [
      'fullName',
      'email',
      'phone',
      'college',
      'year',
      'participationType',
      'tracks',
      'terms'
    ];

    if (isTeam) {
      requiredFields.push('teamName');
    }

    requiredFields.forEach((field) => {
      const error = validateField(field, current);
      if (error) {
        nextErrors[field] = error;
      }
    });

    return nextErrors;
  };

  const onBlur = (name: keyof FormValues) => {
    const error = validateField(name, values);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const onInputChange = (name: keyof FormValues, value: string | boolean) => {
    setValues((prev) => {
      const next = { ...prev, [name]: value } as FormValues;
      if (name === 'participationType' && value !== 'team') {
        next.teamName = '';
      }
      return next;
    });

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const onTrackChange = (track: string, checked: boolean) => {
    setValues((prev) => {
      const nextTracks = checked ? [...prev.tracks, track] : prev.tracks.filter((item) => item !== track);
      return { ...prev, tracks: nextTracks };
    });

    setErrors((prev) => ({ ...prev, tracks: '' }));
  };

  const firstErrorSelector = useMemo(
    () =>
      [
        'fullName',
        'email',
        'phone',
        'college',
        'year',
        'participationType',
        'teamName',
        'terms'
      ] as (keyof FormValues)[],
    []
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateAll(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstErrorField = firstErrorSelector.find((field) => nextErrors[field]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          (element as HTMLElement).focus();
        }
      }

      setFormMessage({ type: 'error', text: '⚠️ Please fix the errors above before submitting.' });
      window.setTimeout(() => {
        setFormMessage((prev) => (prev.type === 'error' ? { type: '', text: '' } : prev));
      }, 5000);
      return;
    }

    setSubmitting(true);

    try {
      console.log('Form Data:');
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'tracks') {
          console.log('  Tracks:', (value as string[]).join(', '));
        } else {
          console.log(`  ${key}:`, value);
        }
      });

      await new Promise<void>((resolve, reject) => {
        window.setTimeout(() => {
          if (Math.random() < 0.95) {
            resolve();
          } else {
            reject(new Error('Network error'));
          }
        }, 1500);
      });

      setFormMessage({
        type: 'success',
        text: '🎉 Registration successful! Check your email for confirmation.'
      });

      window.setTimeout(() => {
        setValues(INITIAL_VALUES);
        setErrors({});
        setFormMessage({ type: '', text: '' });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormMessage({ type: 'error', text: '❌ Registration failed. Please try again later.' });
    } finally {
      setSubmitting(false);
    }
  };

  const onReset = () => {
    setValues(INITIAL_VALUES);
    setErrors({});
    setFormMessage({ type: '', text: '' });
  };

  return (
    <>
      <RegisterNavbar />

      <section className="register-section">
        <div className="register-background">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
        </div>
        <div className="container">
          <div className="register-wrapper">
            <div className="register-info">
              <div className="info-badge">
                <span className="pulse-dot" />
                <span>Limited Slots Available</span>
              </div>
              <h1 className="register-title">
                Join <span className="gradient-text">PRAKALP 2026</span>
              </h1>
              <p className="register-description">
                Fill out the form to secure your spot at the most anticipated tech event of the year. Don't miss this
                opportunity to learn, compete, and win!
              </p>

              <div className="info-highlights">
                <div className="highlight-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 11L12 14L22 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h4>Instant Confirmation</h4>
                    <p>Get your registration confirmed via email immediately</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15C12 15 17 10.7426 17 8.5C17 6.01472 14.9853 4 12.5 4C11.1448 4 9.93208 4.60424 9.12461 5.54926C8.61864 6.13848 7.38136 6.13848 6.87539 5.54926C6.06792 4.60424 4.85523 4 3.5 4C1.01472 4 -1 6.01472 -1 8.5C-1 10.7426 4 15 4 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 20H4C2.89543 20 2 19.1046 2 18V9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V18C22 19.1046 21.1046 20 20 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path d="M12 7V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 13H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <h4>Exciting Rewards</h4>
                    <p>Compete for cash prizes and recognition</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div>
                    <h4>Team Participation</h4>
                    <p>Register as a team or individual participant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="register-form-container">
              <form className="register-form" id="registrationForm" noValidate onSubmit={onSubmit}>
                <h2 className="form-title">Registration Form</h2>

                <div className="form-section">
                  <h3 className="form-section-title">Personal Information</h3>

                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={fieldClass('fullName')}
                      placeholder="Enter your full name"
                      value={values.fullName}
                      onChange={(e) => onInputChange('fullName', e.target.value)}
                      onBlur={() => onBlur('fullName')}
                    />
                    <span className="form-error" id="fullNameError">
                      {errors.fullName ?? ''}
                    </span>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={fieldClass('email')}
                        placeholder="your.email@example.com"
                        value={values.email}
                        onChange={(e) => onInputChange('email', e.target.value)}
                        onBlur={() => onBlur('email')}
                      />
                      <span className="form-error" id="emailError">
                        {errors.email ?? ''}
                      </span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={fieldClass('phone')}
                        placeholder="+91 XXXXX XXXXX"
                        value={values.phone}
                        onChange={(e) => onInputChange('phone', e.target.value)}
                        onBlur={() => onBlur('phone')}
                      />
                      <span className="form-error" id="phoneError">
                        {errors.phone ?? ''}
                      </span>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="college" className="form-label">
                        College/Institution *
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        className={fieldClass('college')}
                        placeholder="Enter your college name"
                        value={values.college}
                        onChange={(e) => onInputChange('college', e.target.value)}
                        onBlur={() => onBlur('college')}
                      />
                      <span className="form-error" id="collegeError">
                        {errors.college ?? ''}
                      </span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="year" className="form-label">
                        Year of Study *
                      </label>
                      <select
                        id="year"
                        name="year"
                        className={fieldClass('year')}
                        value={values.year}
                        onChange={(e) => onInputChange('year', e.target.value)}
                        onBlur={() => onBlur('year')}
                      >
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                        <option value="other">Other</option>
                      </select>
                      <span className="form-error" id="yearError">
                        {errors.year ?? ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Track Selection</h3>

                  <div className="form-group">
                    <label className="form-label">Select Track *</label>
                    <div className="checkbox-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="tracks"
                          value="hardware"
                          className="form-checkbox"
                          checked={values.tracks.includes('hardware')}
                          onChange={(e) => onTrackChange('hardware', e.target.checked)}
                        />
                        <span className="checkbox-text">Hardware</span>
                      </label>
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="tracks"
                          value="software"
                          className="form-checkbox"
                          checked={values.tracks.includes('software')}
                          onChange={(e) => onTrackChange('software', e.target.checked)}
                        />
                        <span className="checkbox-text">Software</span>
                      </label>
                    </div>
                    <span className="form-error" id="tracksError">
                      {errors.tracks ?? ''}
                    </span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="participationType" className="form-label">
                      Participation Type *
                    </label>
                    <select
                      id="participationType"
                      name="participationType"
                      className={fieldClass('participationType')}
                      value={values.participationType}
                      onChange={(e) => onInputChange('participationType', e.target.value)}
                      onBlur={() => onBlur('participationType')}
                    >
                      <option value="">Select Type</option>
                      <option value="individual">Individual</option>
                      <option value="team">Team (2-4 members)</option>
                    </select>
                    <span className="form-error" id="participationTypeError">
                      {errors.participationType ?? ''}
                    </span>
                  </div>

                  <div className="form-group" id="teamNameGroup" style={{ display: isTeam ? 'block' : 'none' }}>
                    <label htmlFor="teamName" className="form-label">
                      Team Name
                    </label>
                    <input
                      type="text"
                      id="teamName"
                      name="teamName"
                      className={fieldClass('teamName')}
                      placeholder="Enter your team name"
                      value={values.teamName}
                      onChange={(e) => onInputChange('teamName', e.target.value)}
                      onBlur={() => onBlur('teamName')}
                    />
                    <span className="form-error" id="teamNameError">
                      {errors.teamName ?? ''}
                    </span>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Additional Information</h3>

                  <div className="form-group">
                    <label htmlFor="experience" className="form-label">
                      Technical Experience (Optional)
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      className={`form-input form-textarea${errors.experience ? ' error' : ''}`}
                      rows={4}
                      placeholder="Tell us about your technical skills, projects, or experience"
                      value={values.experience}
                      onChange={(e) => onInputChange('experience', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="expectations" className="form-label">
                      What do you hope to gain from PRAKALP? (Optional)
                    </label>
                    <textarea
                      id="expectations"
                      name="expectations"
                      className={`form-input form-textarea${errors.expectations ? ' error' : ''}`}
                      rows={3}
                      placeholder="Share your expectations"
                      value={values.expectations}
                      onChange={(e) => onInputChange('expectations', e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label checkbox-terms">
                      <input
                        type="checkbox"
                        name="terms"
                        id="terms"
                        className="form-checkbox"
                        checked={values.terms}
                        onChange={(e) => {
                          onInputChange('terms', e.target.checked);
                          onBlur('terms');
                        }}
                      />
                      <span className="checkbox-text">
                        I agree to the terms and conditions and give consent to share my information with event
                        organizers *
                      </span>
                    </label>
                    <span className="form-error" id="termsError">
                      {errors.terms ?? ''}
                    </span>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn-primary btn-large" id="submitBtn" disabled={submitting}>
                    <span>{submitting ? 'Submitting...' : 'Submit Registration'}</span>
                    {!submitting && (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M7.5 15L12.5 10L7.5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                  <button type="button" className="btn-secondary btn-large" id="resetBtn" onClick={onReset}>
                    Reset Form
                  </button>
                </div>

                <div className={`form-message ${formMessage.type}`} id="formMessage">
                  {formMessage.text}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
