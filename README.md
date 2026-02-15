# Kermedix - Product Requirements Document

## Executive Summary

**Project Name**: Kermedix  
**Tagline**: "Health is a highlight, not a habit"  
**Version**: 1.0.0  
**Status**: In Development  

Kermedix is a comprehensive digital health record platform designed specifically for migrant workers in Kerala. It bridges the gap between migrant healthcare accessibility and quality medical services by providing a centralized health record system, appointment scheduling, and access to trusted hospitals and doctors across Kerala.

---

## Vision & Mission

### Vision
To create an equitable healthcare ecosystem where migrant workers have continuous access to their health records, seamless appointment booking, and quality medical services across Kerala.

### Mission
- Digitize and centralize health records for migrant workers
- Reduce barriers to healthcare accessibility for vulnerable populations
- Enable seamless communication between patients, doctors, and hospitals
- Provide data-driven insights to improve health outcomes
- Support insurance integration (ESIC, Ayushman Bharat)

---

## Problem Statement

Migrant workers in Kerala face multiple healthcare challenges:
1. **Fragmented Records**: Health records scattered across multiple hospitals and clinics
2. **Accessibility Issues**: Difficulty finding qualified doctors and hospitals during emergencies
3. **Insurance Uncertainty**: Unclear insurance eligibility and coverage details
4. **Language Barriers**: Limited access to healthcare information in preferred languages
5. **Data Loss**: No centralized storage of vaccination history and medical records
6. **Trust Deficit**: Difficulty verifying doctor credentials and hospital legitimacy

---

## Target Users

### Primary Users
1. **Migrant Workers (Patients)**
   - Age: 18-65
   - Education: Varied
   - Tech literacy: Beginner to Intermediate
   - Geography: All districts in Kerala

2. **Healthcare Providers (Doctors)**
   - Specialized and general practitioners
   - Telemedicine-capable practitioners
   - Willing to participate in digital health ecosystem

3. **Hospital Administrators**
   - Hospital representatives
   - Department heads
   - Medical coordinators

### Secondary Users
1. **System Administrators**
   - Platform admins
   - Data managers
   - Analytics specialists

2. **Government/NGO Representatives**
   - Health program coordinators
   - Insurance administrators

---

## Core Features

### 1. User Authentication & Registration
- **Email/Password Registration**: Secure signup for migrant workers
- **User Role Management**: 
  - Migrant Worker (Patient)
  - Doctor
  - Hospital Administrator
  - Platform Admin
- **Password Recovery**: Forgot password flow with email verification
- **Session Management**: Secure sessions with 7-day expiry
- **Passport.js Integration**: Local authentication strategy

### 2. Health Records Management
- **Digital Health Records**: Store comprehensive health data
  - Medical history
  - Current medications
  - Allergies and sensitivities
  - Vaccination records
  - Lab results
- **Health Record Upload**: Migrate existing records from physical/digital formats
- **Record Search & Retrieval**: Quick access to past medical data
- **Record Sharing**: Patients can share records with doctors
- **QR Code Generation**: Secure sharing via QR codes
- **PDF Export**: Download and print health records

### 3. Appointment Management
- **Hospital Search**: Find hospitals by district and specialization
- **Doctor Profiles**: View doctor credentials, specializations, and ratings
- **Real-time Availability**: Check doctor availability
- **Appointment Booking**: Schedule appointments with preferred doctors
- **Appointment Rescheduling**: Modify existing appointments
- **Appointment History**: Track past and upcoming appointments
- **Appointment Reminders**: Email/SMS notifications
- **Doctor Alerts**: Notify doctors of patient appointments

### 4. Insurance Management
- **Insurance Status Tracking**:
  - ESIC (Employees' State Insurance Corporation)
  - Ayushman Bharat
- **Insurance Details Storage**:
  - Card number
  - Validity dates
  - Enrollment status
- **Eligibility Verification**: Check coverage at hospitals
- **Insurance Filter**: Find hospitals accepting specific insurance

### 5. Hospital Management
- **Hospital Registry**: Database of registered hospitals in Kerala
- **Hospital Details**:
  - Name, address, contact information
  - Available specializations
  - Facilities and services
  - Insurance acceptance
  - Opening hours
- **Hospital Search & Filter**: By district, specialization, insurance
- **Hospital Ratings & Reviews**: User feedback system
- **Doctor Availability**: Real-time doctor schedules

### 6. Doctor Management
- **Doctor Profiles**:
  - Name, specialization, qualifications
  - Experience and credentials
  - Hospital affiliations
  - Availability schedule
- **Doctor Portfolio**: Showcase doctor expertise
- **Doctor Ratings**: Patient feedback and reviews
- **Telemedicine Support**: Online consultation capability
- **Doctor Search**: Filter by specialization, location, availability

### 7. Vaccination Management
- **Vaccination Records**: Track vaccination history
- **Vaccination Schedule**: Recommendations and reminders
- **Vaccination History**: Complete record of past vaccinations
- **Health Screening**: Integration with screening services

### 8. Telemedicine Services
- **Online Consultations**: Real-time video/audio visits
- **Prescription Management**: Digital prescriptions
- **Medical History Access**: Doctor can view patient records during consultation
- **Follow-up Appointments**: Seamless booking after consultation

### 9. Screening Services
- **Health Checkups**: Preventive health screening packages
- **Vital Signs Monitoring**: Track BP, weight, temperature
- **Risk Assessment**: Identify health risks
- **Personalized Recommendations**: Health improvement suggestions

### 10. Admin Dashboard
- **Analytics & Insights**:
  - User growth metrics
  - Appointment statistics
  - Doctor and hospital performance
  - Insurance data analytics
  - Healthcare outcome metrics
- **User Management**: View, edit, manage user accounts
- **Hospital Management**: Approve/manage hospital registrations
- **Doctor Management**: Verify and manage doctor profiles
- **Announcement Management**: Create and publish announcements
- **Report Generation**: Export data and analytics reports

### 11. Communication & Support
- **Chatbot**: AI-powered health queries assistance
- **Help Center**: FAQs and guidelines
- **Contact Form**: Direct support requests
- **Announcements**: Healthcare updates and news
- **News Ticker**: Real-time health news

### 12. Content Management
- **Guidelines**: Healthcare guidelines and best practices
- **Policies**: Privacy, terms of service, data policies
- **Resources**: Educational materials about health
- **downloadable Forms**: Medical forms, fitness certificates
- **Health Reports**: Downloadable health records
- **Certificates**: Digital health certificates

### 13. Localization
- **Multi-language Support**: Malayalam, English, and other regional languages
- **Language Switcher**: Easy language switching
- **Translated Content**: All UI elements in multiple languages

### 14. Responsive Design
- **Mobile-first Design**: Optimized for smartphones
- **Tablet Support**: Enhanced experience on tablets
- **Desktop Experience**: Full-featured desktop interface

---

## Technical Stack

### Frontend
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Component Library**: Shadcn UI + Radix UI
- **State Management**: React Context API, React Query (TanStack Query)
- **Form Handling**: React Hook Form
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Date Handling**: date-fns
- **QR Code**: qrcode library
- **Email Integration**: EmailJS
- **Internationalization**: i18n (custom implementation)
- **Animations**: Custom CSS animations and libraries
- **Code Quality**: ESLint

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 5.x
- **Database**: MongoDB 4.4+
- **ODM**: Mongoose 8.x
- **Authentication**: Passport.js with Local Strategy
- **Session Management**: express-session with MongoDB store
- **CORS**: Cross-origin resource sharing enabled
- **Environment Config**: dotenv
- **Email Services**: 
  - Nodemailer (for SMTP)
  - Resend API (for transactional emails)
  - EmailJS (error handling)
- **PDF Generation**: PDFKit, pdfjs
- **File Upload**: Multipart form handling
- **HTTP Status**: http-status library
- **Utilities**: method-override for RESTful operations

### Database Schema

#### User Collection
- Basic Info: name, email, age, gender, contact
- Address: current address with district, state, local address
- Insurance: ESIC and Ayushman Bharat details
- Role: migrant_worker, doctor, hospital, admin
- Profile: specialization (for doctors), hospital affiliation

#### Appointment Collection
- Patient & Doctor references
- Hospital and department
- Scheduled time and duration
- Status: pending, confirmed, completed, cancelled
- Medical notes and prescriptions
- Insurance information

#### Health Record Collection
- Patient reference
- Record type: medical history, vaccination, lab result
- Content: file storage or text data
- Metadata: date created, last modified
- Visibility: private, shared with specific doctors

#### Hospital Collection
- Name and location (district, local address)
- Contact information
- Available specializations
- Facilities and amenities
- Insurance acceptance (ESIC, Ayushman Bharat)
- Affiliated doctors

#### Doctor Collection
- Name, specialization, qualifications
- Hospital affiliations
- Availability schedule
- Contact and bio
- Ratings and reviews

#### Vaccination Collection
- Patient reference
- Vaccination type and date
- Next due date
- Doctor who administered
- Vaccination center

---

## User Journeys

### Journey 1: Migrant Worker Health Record Access
```
1. Worker registers on platform
2. Uploads existing health records (optional)
3. Views complete health history
4. Shares records with new doctor
5. Gets QR code for emergency access
```

### Journey 2: Appointment Booking
```
1. Worker searches hospitals by district
2. Filters by specialization and insurance
3. Views doctor profiles
4. Checks availability
5. Books appointment
6. Receives confirmation email
7. Attends appointment
8. Shares health records with doctor
9. Receives prescription
10. Books follow-up appointment
```

### Journey 3: Insurance Management
```
1. Worker enters insurance details during registration
2. System verifies eligibility
3. Worker searches hospitals accepting their insurance
4. At appointment, worker provides insurance card
5. Hospital verifies through platform
6. Records updated with insurance billing
```

### Journey 4: Doctor Portfolio Management
```
1. Doctor registers on platform
2. Creates professional portfolio
3. Lists specializations and hospitals
4. Receives appointment requests
5. Reviews patient health records
6. Conducts consultation
7. Provides prescription and follow-up plan
8. Views ratings and feedback
```

### Journey 5: Hospital Management
```
1. Hospital admin creates account
2. Registers doctors and departments
3. Updates availability schedules
4. Manages appointments
5. Reviews analytics and performance metrics
6. Generates reports for administrators
```

### Journey 6: Admin Analytics
```
1. Admin logs into dashboard
2. Views user growth metrics
3. Analyzes appointment patterns
4. Checks insurance coverage statistics
5. Identifies health trends
6. Generates monthly reports
7. Manages platform announcements
```

---

## Key Data Flows

### Health Record Access Flow
```
User Login → Dashboard → View Health Records → 
Trigger Sharing → Doctor Receives Link → 
Doctor Reviews Record → Updates/Comments
```

### Appointment Booking Flow
```
Search Hospital → Filter Options → View Doctors → 
Check Availability → Select Slot → Confirm Booking → 
Payment (if applicable) → Confirmation Email
```

### Insurance Verification Flow
```
User Updates Insurance → System Validates → 
Hospital Search Filters Updated → 
Appointment Booking → Insurance Auto-fill
```

---

## Non-Functional Requirements

### Performance
- **Page Load Time**: < 3 seconds on 4G
- **API Response Time**: < 500ms for standard queries
- **Database Queries**: Optimized with indexing
- **Concurrent Users**: Support 10,000+ simultaneous users

### Security
- **Data Encryption**: HTTPS/TLS for all transmissions
- **Password Security**: Bcrypt hashing, minimum length requirements
- **Session Security**: Secure cookies with HTTPOnly flag
- **CORS Policy**: Whitelist approved origins
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Prevention**: Parameterized queries via Mongoose
- **CSRF Protection**: Session-based token generation
- **Data Privacy**: GDPR-compliant data handling

### Scalability
- **Horizontal Scaling**: Stateless design for load balancing
- **Database**: MongoDB replication for redundancy
- **Caching**: Redis for session and query caching (future)
- **CDN**: Content delivery for static assets

### Reliability
- **Uptime Target**: 99.5%
- **Error Logging**: Comprehensive error tracking
- **Monitoring**: Real-time system health monitoring
- **Backup**: Daily automated backups

### Accessibility (WCAG 2.1 AA)
- **Keyboard Navigation**: All features accessible via keyboard
- **Screen Reader Support**: Semantic HTML and ARIA labels
- **Color Contrast**: Minimum 4.5:1 for text
- **Font Sizes**: Responsive and scalable

---

## API Endpoints Overview

### User Routes
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `POST /api/users/forgot-password` - Password reset
- `GET /api/users/search` - Search users

### Appointment Routes
- `GET /api/appointments/hospitals` - List hospitals
- `POST /api/appointments/book` - Book appointment
- `GET /api/appointments/my-appointments` - User's appointments
- `PUT /api/appointments/:id` - Reschedule appointment
- `DELETE /api/appointments/:id` - Cancel appointment
- `GET /api/appointments/:id/details` - Appointment details

### Health Record Routes
- `POST /api/health-records/upload` - Upload record
- `GET /api/health-records` - List records
- `GET /api/health-records/:id` - Record details
- `PUT /api/health-records/:id` - Update record
- `DELETE /api/health-records/:id` - Delete record
- `POST /api/health-records/:id/share` - Share record

### Hospital Routes
- `GET /api/hospitals` - List hospitals
- `GET /api/hospitals/:id` - Hospital details
- `GET /api/hospitals/:id/doctors` - Hospital doctors
- `POST /api/hospitals` - Create hospital (admin)
- `PUT /api/hospitals/:id` - Update hospital (admin)

### Doctor Routes
- `GET /api/doctors` - List doctors
- `GET /api/doctors/:id` - Doctor profile
- `POST /api/doctors` - Create doctor profile
- `PUT /api/doctors/:id` - Update doctor profile
- `GET /api/doctors/:id/availability` - Doctor availability

### Admin Routes
- `GET /api/admin/analytics` - Platform analytics
- `GET /api/admin/users` - Manage users
- `GET /api/admin/appointments` - Manage appointments
- `POST /api/admin/announcements` - Create announcements
- `GET /api/admin/reports` - Generate reports

### Doctor Alert Routes
- `POST /api/alerts/create` - Create alert
- `GET /api/alerts/:doctorId` - Get doctor alerts
- `PUT /api/alerts/:id` - Update alert
- `DELETE /api/alerts/:id` - Delete alert

---

## User Stories

### Story 1: Migrant Worker Registration
**As a** migrant worker  
**I want to** register on the platform with my email  
**So that** I can access my health records and book appointments

**Acceptance Criteria:**
- User can enter email, password, name, age, gender
- System validates input
- Confirmation email is sent
- User can login after registration

### Story 2: Hospital Search
**As a** migrant worker  
**I want to** search hospitals by district and specialization  
**So that** I can find appropriate healthcare services

**Acceptance Criteria:**
- Can filter by location (district)
- Can filter by medical specialization
- Can filter by insurance acceptance
- Results show hospital details and doctor availability
- Can sort by distance or ratings

### Story 3: Appointment Booking
**As a** migrant worker  
**I want to** book an appointment with a doctor  
**So that** I can schedule medical consultations

**Acceptance Criteria:**
- Can select doctor and preferred time
- System shows available slots only
- Can confirm booking with one click
- Receives confirmation email with details
- Can view appointment in calendar

### Story 4: Health Record Upload
**As a** migrant worker  
**I want to** upload my existing health records  
**So that** I have a centralized repository

**Acceptance Criteria:**
- Can upload PDF, image files
- Can select record type (vaccination, medical report, etc.)
- System validates file size and format
- Record is searchable and viewable
- Can assign visibility settings (private/shared)

### Story 5: Insurance Management
**As a** migrant worker  
**I want to** manage my insurance details  
**So that** hospitals can verify my coverage

**Acceptance Criteria:**
- Can add ESIC or Ayushman Bharat details
- System stores card number and validity
- Can view insurance status
- Hospitals can verify eligibility
- Can update when cards are renewed

### Story 6: Doctor Dashboard
**As a** doctor  
**I want to** view my appointments and patient records  
**So that** I can provide better care

**Acceptance Criteria:**
- Can see daily appointment schedule
- Can view patient health records
- Can mark appointments as completed
- Can add notes and prescriptions
- Can communicate with patients

### Story 7: Hospital Admin Analytics
**As a** hospital admin  
**I want to** view appointment statistics and metrics  
**So that** I can optimize operations

**Acceptance Criteria:**
- Can see appointment volume over time
- Can view doctor performance metrics
- Can analyze insurance acceptance patterns
- Can export reports
- Can view patient satisfaction ratings

### Story 8: Admin Platform Management
**As a** system admin  
**I want to** manage users, hospitals, and doctors  
**So that** I ensure platform quality

**Acceptance Criteria:**
- Can view all users and their details
- Can approve/reject hospital registrations
- Can verify doctor credentials
- Can manage announcements
- Can generate platform reports

---

## Success Metrics

### User Adoption
- **Target**: 50,000 migrant workers registered within 12 months
- **KPI**: Monthly active users (MAU) > 20,000
- **KPI**: 70% user retention after 3 months

### Engagement
- **Target**: Average 5+ appointments booked per user per year
- **KPI**: Health record upload rate > 60% of users
- **KPI**: Average session duration > 10 minutes

### Healthcare Impact
- **Target**: 90%+ patient satisfaction rating (4.5/5.0 stars)
- **Target**: 95% appointment completion rate
- **KPI**: Doctor response time < 2 hours
- **KPI**: Reduced patient search time from 30 days to < 1 day

### Insurance Integration
- **Target**: 80% of users with verified insurance
- **KPI**: Insurance eligibility checks < 1 minute
- **Target**: 10,000+ hospital touchpoints

### Technical
- **Uptime**: 99.5% platform availability
- **Performance**: 95% of pages load < 3 seconds
- **Response Time**: API responses < 500ms for 95% of requests

---

## Roadmap

### Phase 1: MVP (Current - Month 3)
- [x] User authentication (email/password)
- [x] Health record management
- [x] Appointment booking
- [x] Hospital and doctor search
- [x] Basic admin dashboard
- [x] Multi-language support
- [ ] Email notifications

### Phase 2 (Month 4-6)
- [ ] Telemedicine integration
- [ ] SMS notifications
- [ ] Advanced analytics
- [ ] Insurance verification API integration
- [ ] Payment gateway integration
- [ ] Prescription management

### Phase 3 (Month 7-9)
- [ ] Mobile app (React Native/Flutter)
- [ ] Video consultation features
- [ ] Health screening integration
- [ ] AI-powered health recommendations
- [ ] Offline mode for mobile app
- [ ] Doctor's digital signature

### Phase 4 (Month 10-12)
- [ ] Government integration (ESIC, Ayushman Bharat APIs)
- [ ] Healthcare IoT device integration
- [ ] Predictive health analytics
- [ ] Advanced search and recommendations
- [ ] Performance optimization
- [ ] Security audit and compliance

### Future Enhancements
- [ ] Emergency alert system
- [ ] Medical emergency routing
- [ ] Insurance claim automation
- [ ] Government reporting integration
- [ ] Blockchain-based record verification
- [ ] Blockchain health credentials

---

## Constraints & Assumptions

### Constraints
- **Budget**: Limited to current resource allocation
- **Timeline**: 12-month initial delivery cycle
- **Team Size**: 5-7 developers
- **Technology**: Locked to current stack (MERN)

### Assumptions
- MongoDB cloud hosting available
- Email service (Resend, Nodemailer) reliable
- Users have internet connectivity
- Hospital staff willing to participate
- Doctors available for telemedicine

---

## Risk Management

### High Risks
1. **Data Privacy Breaches**
   - Mitigation: GDPR compliance, encryption, regular security audits
   
2. **Low User Adoption**
   - Mitigation: Extensive marketing, partnerships with NGOs, user training

3. **Insurance Integration Delays**
   - Mitigation: Manual verification process as fallback

### Medium Risks
1. **Server Downtime**
   - Mitigation: Load balancing, database replication, monitoring

2. **Doctor Participation Low**
   - Mitigation: Incentive programs, commission structure

### Low Risks
1. **Scalability Issues**
   - Mitigation: Regular performance testing, infrastructure upgrades

---

## Compliance & Legal

- **Data Protection**: GDPR, India's Digital Personal Data Protection Act
- **Healthcare**: Compliance with relevant health data standards
- **Accessibility**: WCAG 2.1 AA compliance
- **Terms of Service**: Clear usage policies
- **Privacy Policy**: Transparent data handling
- **User Consent**: Explicit consent for data collection
- **Right to Erasure**: Users can request data deletion

---

## Success Definition

The platform will be considered successful when:
1. 50,000+ migrant workers are actively using the platform
2. Average user satisfaction rating is 4.5/5.0 or higher
3. 95%+ of booked appointments are completed
4. Appointment booking takes < 5 minutes
5. Platform uptime exceeds 99.5%
6. System response times are < 500ms for 95% of requests
7. 85%+ of users report improved healthcare access
8. 60%+ of users successfully manage insurance details

---

## Conclusion

Kermedix addresses a critical gap in healthcare accessibility for migrant workers in Kerala. By providing a centralized, user-friendly platform for health records and appointment management, the project has the potential to significantly improve health outcomes for this vulnerable population while creating a scalable model for other regions and use cases.

The platform's success relies on strong execution of core features, aggressive user acquisition, and continuous feedback-driven improvements. With clear roadmaps and success metrics in place, Kermedix is positioned to become the leading health platform for migrant workers in India.

---

**Document Version**: 1.0  
**Last Updated**: February 5, 2026  
**Author**: Product Team  
**Status**: Active Development
