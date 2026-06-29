# AWS Static Website Hosting Project
This repository contains my S3 static website hosting project done during my internship.

**Name:** Simran Sahay  
**Project Name:** SkyScale Technologies – Cloud Hosted Static Website  
**Duration:** 6 Weeks Internship
**Intern ID:** CITS4194

---

## 📌 Project Scope

This project involves hosting a professional multi-page static website on Amazon S3 (Simple Storage Service). The website is developed using HTML, CSS, and JavaScript and deployed using AWS S3 static website hosting. It demonstrates real-world cloud deployment without using any backend server.

The project includes:
- Creating and configuring an S3 bucket  
- Enabling static website hosting  
- Setting public access permissions  
- Uploading website files  
- Deploying and accessing the website via S3 endpoint URL  

---

## 🔗 Live Demo(Currently unavailable due to resource cleanup)

http://skyscale-technologies-simran-2026.s3-website.ap-south-1.amazonaws.com

---

## 📸 Screenshots

Refer to the `/screenshots` folder for:
- S3 bucket configuration  
- Static website hosting settings  
- Public access permissions  
- Live deployed website  

---

## 📌 Project Name (Detailed)

SkyScale Technologies is a cloud consulting website built as a static frontend project and hosted on AWS S3. It simulates a real-world corporate web presence with multiple pages and interactive UI components.

---
A professional corporate website for a fictional cloud consulting company specializing in AWS cloud solutions, migration, and infrastructure management.

## 🔗 Live Demo
👉 [Click here to view live website](http://skyscale-technologies-simran-2026.s3-website.ap-south-1.amazonaws.com)
## Project Overview

SkyScale Technologies is a modern, responsive two-page website designed as part of an MCA Cloud Computing portfolio. The website showcases cloud consulting services and is prepared for deployment on Amazon S3 as a static website. The contact form is designed for future integration with AWS Lambda + API Gateway.

## Features

- **Professional Corporate Design**: Clean, minimal, and premium aesthetic inspired by top cloud consulting firms
- **Responsive Layout**: Optimized for desktop, laptop, tablet, and mobile devices
- **Sticky Navigation**: Fixed navbar with shadow on scroll and active section highlighting
- **Smooth Animations**: Subtle fade-in effects, hover states, and smooth scrolling
- **Interactive Elements**: Animated counters, FAQ accordion, and form validation
- **SEO Optimized**: Semantic HTML, meta tags, and proper heading hierarchy
- **Accessible**: WCAG AA compliant with keyboard navigation and ARIA attributes
- **Performance Optimized**: Targeting Google Lighthouse score of 95+

## Technologies Used

- **HTML5**: Semantic markup for structure and accessibility
- **CSS3**: Custom styling with CSS variables for theming
- **Vanilla JavaScript**: DOM manipulation, form handling, and interactions
- **Google Fonts**: Poppins typography
- **SVG Icons**: Inline SVGs for performance and scalability

## Folder Structure

```
SkyScale-Technologies/
│
├── index.html              # Home page with all sections
├── contact.html            # Contact page with form
│
├── css/
│   ├── style.css           # Main stylesheet for home page
│   └── contact.css         # Contact page specific styles
│
├── js/
│   ├── script.js           # Main JavaScript for navigation and interactions
│   └── contact.js          # Contact form handling and FAQ accordion
│
├── images/                 # Image assets (SVG icons, illustrations)
│
└── README.md              # Project documentation
```

## Website Structure

### Home Page Sections

1. **Hero Section**: Company tagline, cloud illustration, CTAs, and trust indicator
2. **About SkyScale**: Mission, vision, core values, and company introduction
3. **Services**: Six core services (Cloud Migration, Infrastructure Management, Serverless Solutions, Cloud Security, DevOps & CI/CD, Cost Optimization)
4. **Industries**: Healthcare, Finance, Education, Retail, Manufacturing, Startups
5. **Why Choose Us**: AWS Expertise, Reliable Infrastructure, Cost Optimization, 24×7 Support, Scalable Solutions, Security Best Practices
6. **How We Deliver Cloud Success**: 5-step process (Consultation, Strategy & Planning, Cloud Migration, Optimization, Continuous Support)
7. **Statistics**: Animated counters showing company achievements
8. **Testimonials**: Client reviews and ratings
9. **Call To Action**: Encourages users to contact the company
10. **Footer**: Company info, quick links, services, industries, resources, legal links, social media

### Contact Page Sections

1. **Contact Hero**: Breadcrumb navigation and headline
2. **Contact Information**: Office address, phone number, business email
3. **Business Hours**: Operating hours table
4. **Office Image Placeholder**: Prepared for real office photo
5. **Contact Form**: Professional form with validation (API-ready)
6. **Map Placeholder**: Prepared for Google Maps integration
7. **FAQ**: Accordion-style frequently asked questions
8. **Social Media Links**: GitHub, LinkedIn, Twitter
9. **Footer**: Same as home page

## Color Palette

- **Primary**: #0F172A (Dark Navy)
- **Secondary**: #2563EB (Blue)
- **Accent**: #38BDF8 (Light Blue)
- **Background**: #FFFFFF (White)
- **Section Background**: #F8FAFC (Light Gray)
- **Text**: #1E293B (Dark Slate)

## Typography

- **Font Family**: Poppins (Google Fonts)
- **Headings**: 600 weight
- **Body**: Regular weight
- **Responsive**: Scaled using media queries

## How to Run Locally

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)

### Option 1: Direct File Opening

1. Navigate to the project folder
2. Double-click `index.html` to open in your browser
3. Navigate between pages using the navigation menu

### Option 2: Using a Local Web Server (Recommended)

#### Using Python

```bash
# Python 3
cd SkyScale-Technologies
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

#### Using Node.js (http-server)

```bash
# Install http-server globally
npm install -g http-server

# Run the server
cd SkyScale-Technologies
http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

#### Using VS Code Live Server

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## Future AWS Deployment

### Amazon S3 Static Website Hosting

The website is designed to be hosted on Amazon S3 as a static website. Follow these steps:

1. **Create an S3 Bucket**
   - Go to AWS Console → S3
   - Create a new bucket with a unique name
   - Enable static website hosting

2. **Upload Files**
   - Upload all files from the project folder to the bucket
   - Set bucket policy to allow public read access

3. **Configure Bucket Policy**
   ```json
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Sid": "PublicReadGetObject",
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::your-bucket-name/*"
           }
       ]
   }
   ```

4. **Enable CloudFront (Optional)**
   - Create a CloudFront distribution
   - Point it to your S3 bucket
   - Configure SSL/TLS certificate

5. **Route Domain (Optional)**
   - Configure Route 53 to point your domain to CloudFront

## Future Lambda Integration

The contact form is prepared for AWS Lambda + API Gateway integration:

### Implementation Steps

1. **Create Lambda Function**
   ```javascript
   exports.handler = async (event) => {
       const formData = JSON.parse(event.body);
       
       // Process form data
       // Send email using AWS SES
       // Store in DynamoDB (optional)
       
       return {
           statusCode: 200,
           body: JSON.stringify({ message: 'Success' })
       };
   };
   ```

2. **Create API Gateway**
   - Create REST API
   - Add POST method for /contact endpoint
   - Integrate with Lambda function
   - Enable CORS

3. **Update contact.js**
   - Replace the simulated API call with actual API Gateway endpoint
   - Uncomment the fetch code in the form submission handler

4. **Configure Environment Variables**
   - Store API endpoint in environment variable
   - Add error handling for API responses

### Lambda Function Features

- Form validation
- Email sending via AWS SES
- Data storage in DynamoDB (optional)
- Rate limiting
- Spam protection

## Performance Optimization

The website is optimized for Google Lighthouse:

- **Performance**: Minimal JavaScript, optimized CSS, SVG icons
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Best Practices**: No console errors, proper meta tags
- **SEO**: Proper heading hierarchy, meta descriptions, alt text

### Target Scores

- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Mobile**: 0px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: 1440px+

## Code Quality

- **Semantic HTML**: Proper use of HTML5 elements
- **Clean CSS**: CSS variables, consistent naming, modular structure
- **Well-commented JavaScript**: Clear function documentation
- **Beginner-friendly**: Simple structure, easy to understand

## Security Considerations

- Input validation on forms
- Prepared for HTTPS deployment
- No sensitive data in client-side code
- CSP headers recommended for production

## Maintenance

### Regular Updates

- Keep Google Fonts link current
- Update copyright year in footer
- Review and update content periodically
- Test cross-browser compatibility

### Adding New Content

- Follow existing section structure
- Use consistent styling classes
- Maintain responsive design patterns
- Update navigation links accordingly

## License

This project is created for educational purposes as part of an MCA Cloud Computing portfolio.

## Contact

For questions or feedback about this project, please refer to the contact page of the website.

---

**Note**: This is a fictional company website created as a portfolio project. All company information, testimonials, and contact details are fictional.
