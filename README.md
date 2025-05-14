# 📄 SnapDocs

**SnapDocs** is a real-time collaborative document editor that allows multiple users to work together live on documents. It features live editing, comment threads with likes, emoji reactions, and the ability to mark comments as done. It’s built for seamless teamwork and productivity.

Feel free to use it!! If you encounter any issues, feel free to open an issue or submit a pull request. Contributions and feedback are more than welcome!

---

## ✨ Features

- 🔄 Live collaboration on documents
- 💬 Comment system with likes, emojis, and "done" status
- 🔗 Invite collaborators
- 🪄 Real-time updates via Liveblocks
- 🔐 Authentication via Clerk

---

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/)
- [Liveblocks](https://liveblocks.io/)
- [ClerkAuth](https://clerk.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vercel](https://vercel.com/) for deployment

---

## ❓ Some infos before getting started

### Setting Up ClerkAuth
- Go to [Clerk](https://clerk.com/) and create an account.
- Create a new application in the Clerk dashboard.
- Copy your Publishable Key and Secret Key from the API Keys section.
- Set your Sign In and Sign Up URLs in the Clerk dashboard or use the default hosted ones.
- Add these values to your **.env.local** file.

### Setting Up Liveblocks
- Go to [Liveblocks](https://liveblocks.io/) and create an account
- Create a new project.
- Copy your Secret Key from the project settings
- Add it to your **.env.local** file as **LIVEBLOCKS_SECRET_KEY**


## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YoussefAbdellaoui/SnapDocs.git
cd snapdocs
```
### 2. Install Dependencies

```
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Set Up Environment Variables

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=your_sign_in_url
NEXT_PUBLIC_CLERK_SIGN_UP_URL=your_sign_up_url
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

### 4. Run the Development Server
```
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## 📸 Screenshots

### Login Page
![image](https://github.com/user-attachments/assets/33f1750f-00f7-4ef2-9e77-dcb53b8e5058)

### Dashboard Page
![image](https://github.com/user-attachments/assets/1f1b8581-bd37-4bb7-9c89-9d6144a48aee)

### Document Page
![image](https://github.com/user-attachments/assets/8d5e84b6-526d-4772-94fb-bbacddfc9522)

### Invitation modal
![image](https://github.com/user-attachments/assets/b3014660-0fb1-4303-b6c3-818e95ef3ad9)



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 📄 Licence

Copyright 2025 Youssef Abdellaoui

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

