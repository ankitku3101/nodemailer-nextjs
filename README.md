# Nodemailer Integration in Next.js 15 with shadcn Components

This project demonstrates how to integrate **Nodemailer** into a **Next.js 15** application using **shadcn components** for creating a responsive and accessible UI.

## Features

- **Email Functionality**: Send emails using Nodemailer with SMTP integration.
- **shadcn Components**: Pre-styled, customizable UI components for forms.
- **Next.js 15 Compatibility**: Fully utilizes the latest Next.js features.
- **Responsive Design**: Optimized for various screen sizes.
- **TypeScript Support**: Ensures type safety across the application.

---

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js** (>= 18.x)
- **Next.js** (15.x)
- SMTP credentials (e.g., Gmail, GoDaddy, or other providers)

---

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git](https://github.com/ankitku3101/nodemailer-nextjs.git
   cd nodemailer-nextjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your SMTP credentials:
   ```env
   SMTP_HOST=smtp.your-email-provider.com
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASSWORD=your-password
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Customization

To tailor this project to your needs:

1. **SMTP Settings**: Update the `.env.local` file with your SMTP provider's credentials.
2. **UI Design**: Modify the contact form's appearance and fields using **shadcn components** to match your project's requirements.
3. **Validations**: Add additional client- or server-side validations for better data integrity.
4. **Error Handling**: Customize the error messages displayed to users for better UX.

---

## Deployment

To deploy this application:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to a hosting platform like **Vercel**, **Netlify**, or **AWS**.

3. Set up the required environment variables (SMTP credentials) in your hosting platform's settings.

---

## Troubleshooting

- **SMTP Errors**: Ensure your SMTP credentials are correct and your email provider allows third-party app integration.
- **Environment Variables**: Double-check that your `.env.local` file is properly configured and matches the deployment environment.
- **UI Issues**: Consult the **shadcn documentation** to troubleshoot component-related problems.

---

## License

This project is licensed under the **MIT License**.  
Feel free to use it in your projects with attribution.

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Nodemailer Documentation](https://nodemailer.com/about/)
- [shadcn Documentation](https://shadcn.dev)
```
