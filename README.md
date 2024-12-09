# Let it Float

An anonymous platform for sharing your thoughts with the world. Write anything and let it float into the digital ocean for others to discover.

## Features

- View total count of released "ships" (anonymous messages)
- Write and release new ships anonymously
- Browse recently released ships
- Rate limiting to prevent API abuse

## Tech Stack

- **Frontend**: Next.js with shadcn/ui components
- **Backend**: Next.js API Routes
- **Database**: Supabase
- **Authentication**: Anonymous by design

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/KeneePatel/let-it-float.git
cd let-it-float
```

2. Make a new supabase project and get the anon key and url

3. Run the database setup postgres commands

4. Install dependencies
```bash
pnpm install
```

5. Set up environment variables
```bash
cp .env.example .env.local
```
Fill in your Supabase credentials in `.env.local`

6. Run development server
```bash
pnpm dev
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL={your supabase url}
NEXT_PUBLIC_SUPABASE_ANON_KEY={your supabase anon key}
```

## Contributing

This is a hobby project but contributions are welcome! Please open an issue to discuss proposed changes.

## License

MIT