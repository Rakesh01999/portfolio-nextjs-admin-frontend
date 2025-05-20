# Personal Portfolio - NextJS Admin Frontend

[![Live Site](https://img.shields.io/badge/Admin%20Dashboard-Visit-orange)](https://rakesh-biswas-portfolio-nextjs-admin.vercel.app)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Rakesh01999/portfolio-nextjs-admin-frontend)



## 📌 Overview

This is the admin dashboard for my personal portfolio website built with Next.js. It provides a comprehensive interface to dynamically manage and update all the content displayed on the user-facing portfolio site.

## 🔐 Admin Credentials

- **Email**: admin@example.com
- **Password**: Please contact for credentials

## ✨ Features

- **Secure Authentication** - Protected admin-only access
- **Comprehensive Dashboard** - Overview of site statistics and content
- **Content Management** - Full CRUD operations for all portfolio sections
- **Rich Text Editor** - Advanced blog post editor
- **Image Upload** - Manage media assets for projects and blog posts
- **Responsive Design** - Admin functionality on any device

## 🛠️ Management Capabilities

1. **Profile Information** - Update personal details and designation
2. **Resume Management** - Upload and update resume/CV
3. **Education Details** - Manage educational background
4. **Experience** - Add, edit, or remove work experience entries
5. **Skills Management** - Update technical and soft skills
6. **Project Portfolio** - Manage projects, screenshots, and details
7. **Blog Administration** - Create, edit and publish blog posts with rich text editor
8. **Contact Management** - View and manage contact form submissions

## 🔧 Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context/Redux
- **Authentication**: NextAuth.js with role-based access
- **Form Handling**: React Hook Form with Zod validation
- **Rich Text Editing**: TipTap/Draft.js/Editor.js
- **Data Fetching**: Axios/SWR/React Query
- **UI Components**: Headless UI/Shadcn UI
- **Image Management**: Cloudinary/AWS S3

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Backend API running

### Installation

1. Clone the repository
```bash
git clone https://github.com/Rakesh01999/portfolio-nextjs-admin-frontend
cd portfolio-nextjs-admin-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your configuration:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3001
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3001
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3001](http://localhost:3001) in your browser

## 📦 Build & Deployment

```bash
# Build the application
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## 🔗 Related Repositories

- [Portfolio - NextJS User Frontend](https://github.com/Rakesh01999/portfolio-nextjs-user-frontend)
- [Portfolio - NextJS Backend](https://github.com/Rakesh01999/portfolio-nextjs-backend)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Rakesh Biswas - [My Website's admin dashboard](https://rakesh-biswas-portfolio-nextjs-admin.vercel.app)