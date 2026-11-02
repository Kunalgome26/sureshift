# 🚚 SureShift – Packers & Transportation Services

**Move Smarter. Move Safer.**

SureShift is a modern web platform for packing, relocation, and transportation services. It provides customers with a simple way to explore moving services and submit relocation requests through an online interface.

🌐 **Live Website:** https://sureshift-xi.vercel.app/

💻 **GitHub Repository:** https://github.com/Kunalgome26/sureshift

---

## 📌 About the Project

Moving household goods, office equipment, and other belongings requires proper planning and coordination.

SureShift aims to simplify this process through a web-based platform where customers can explore available services, submit moving requests, and connect with the service team.

The platform includes a customer-facing website and an administrative entry point for managing operations.

## ✨ Features

### 1. Customer Website
- Modern and responsive user interface.
- Information about packing and transportation services.
- Service descriptions and FAQs.
- Contact information and quote-request options.

### 2. Transportation Services
- Home Relocation
- Office Shifting
- Goods Transportation
- Secure Packing

### 3. Request Management
- Online relocation request entry point.
- Pickup and destination details.
- Service-related information.

### 4. Admin Access
- Dedicated admin entry point.
- Administrative interface for service operations.

*Note: The exact request-management and admin capabilities depend on the implemented backend functionality.*

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React-based web framework |
| React.js | User interface |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Supabase | Backend / database integration |
| Vercel | Deployment and hosting |

## 📂 Project Structure

```text
sureshift/
│
├── app/              # Application pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utility and service functions
├── public/           # Static assets
│
├── package.json
├── package-lock.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git

### Step 1: Clone the repository

```bash
git clone https://github.com/Kunalgome26/sureshift.git
```

### Step 2: Navigate to the project

```bash
cd sureshift
```

### Step 3: Install dependencies

```bash
npm install
```

### Step 4: Configure environment variables

If your Supabase integration requires environment variables, create a `.env.local` file in the project root and add the keys expected by your application.

Never commit API secrets or private credentials to GitHub.

### Step 5: Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 🚀 Deployment

SureShift is deployed using **Vercel**.

To deploy your own instance:

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables.
3. Deploy the application.
4. Access the generated deployment URL.

## 🤝 Contributing

Contributions are welcome!

If you want to improve SureShift:

1. Fork this repository.
2. Create a new feature branch.
3. Make your changes.
4. Commit your changes.
5. Submit a pull request.

```bash
git checkout -b feature/your-feature
git add .
git commit -m "Add: your feature"
git push origin feature/your-feature
```

## 🔒 Security

- Do not publish passwords, API keys, or database credentials.
- Use environment variables for sensitive configuration.
- Validate and secure user-submitted data.
- Restrict administrative functionality to authorized users.

## 📬 Contact

**Project:** SureShift – Packers & Transportation Services

**GitHub:** [@Kunalgome26](https://github.com/Kunalgome26)

**Live Website:** [SureShift](https://sureshift-xi.vercel.app/)

---

⭐ If you find this project useful, consider giving the repository a star!

**Built with ❤️ by Kunal Gome**
