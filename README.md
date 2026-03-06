# Nexora Landing Page

A modern, fullstack landing page built with Next.js 14, TypeScript, Tailwind CSS, TypeORM, and SQLite.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Next.js 14 App Router with TypeScript
- 🗄️ SQLite database via TypeORM for contact form submissions
- 🐳 Docker & Docker Compose support
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔒 Input validation on contact form API
- 🌊 Smooth scroll navigation

## Sections

1. **Header** – Sticky navigation with smooth scroll
2. **Hero** – Full-width hero with CTA
3. **Features** – Grid of 6 feature highlights
4. **About** – Company info with stats
5. **Testimonials** – 6 customer testimonials
6. **Call to Action** – Bold CTA section
7. **Contact Form** – Functional form with database persistence
8. **Footer** – Links, social media, copyright

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm i
   ```

3. **Set up environment variables**
   ```bash
   cp .env .env.local
   # Edit .env.local as needed
   ```

4. **Create the data directory**
   ```bash
   mkdir -p data
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_PATH` | `./data/database.sqlite` | Path to SQLite database file |
| `NEXT_PUBLIC_SITE_TITLE` | `My Landing Page` | Site title shown in browser tab |
| `NEXT_PUBLIC_SITE_DESCRIPTION` | `Welcome to our amazing product` | Meta description |

## API Endpoints

### POST `/api/contact`

Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to learn more!"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Your message has been received. We will get back to you soon!",
  "data": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

## Docker Deployment

### Using Docker Compose (Recommended)

1. **Build and start the container:**
   ```bash
   docker-compose up -d --build
   ```

2. **View logs:**
   ```bash
   docker-compose logs -f
   ```

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

The SQLite database is persisted in the `./data` directory via a Docker volume mount.

### Using Docker directly

```bash
# Build the image
docker build -t landing-page .

# Run the container
docker run -d \
  -p 3000:3000 \
  -v $(pwd)/data:/app/data \
  -e DATABASE_PATH=./data/database.sqlite \
  landing-page
```

## Deploying with Coolify

1. Connect your Git repository to Coolify
2. Select **Docker Compose** as the deployment method
3. Coolify will use the `docker-compose.yml` file automatically
4. Set the environment variables in Coolify's dashboard:
   - `DATABASE_PATH=./data/database.sqlite`
   - `NEXT_PUBLIC_SITE_TITLE=Your Site Title`
   - `NEXT_PUBLIC_SITE_DESCRIPTION=Your description`
5. Add a persistent volume mapping `./data` to `/app/data`
6. Deploy!

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   ├── globals.css         # Global styles
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts    # Contact form API
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   ├── CallToAction.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── entities/
│   │   └── ContactSubmission.ts  # TypeORM entity
│   └── lib/
│       └── database.ts           # TypeORM DataSource
├── public/
├── .env
├── Dockerfile
├── docker-compose.yml
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## License

MIT
