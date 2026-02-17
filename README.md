# AI Learning Portfolio

A personal portfolio and course tracker for Coursera programs focused on AI, Machine Learning, and Data Science. Built to solve two pain points Coursera doesn't handle well:

- **Course completion tracking** — see at a glance which courses within a program are done
- **Course overlap detection** — discover which courses are shared across multiple programs, so you can prioritize efficiently

Live site: [courses-portfolio.vercel.app](https://courses-portfolio.vercel.app) <!-- update once deployed -->

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Hero landing page with stats and quick links |
| `/programs` | Grid of all 21 programs, color-coded by status |
| `/programs/[slug]` | Course list with completion status + shared-program badges |
| `/courses` | Course lookup and two-program comparison tool |
| `/accomplishments` | Completed certificates and sortable grade table |
| `/roadmap` | Priority strategy: which programs to finish first and why |

---

## Tech Stack

- **Next.js 15** (App Router, static export)
- **Tailwind CSS**
- **TypeScript**
- No database, no auth — fully static, hostable on Vercel or GitHub Pages

---

## Data

All data is hardcoded in TypeScript files under `data/`:

| File | Contents |
|---|---|
| `data/courses.ts` | ~75 unique courses (master list with grades and certificate URLs) |
| `data/programs.ts` | 21 programs referencing course IDs |
| `data/accomplishments.ts` | 10 completed certificates |
| `data/strategy.ts` | Priority ranking of unfinished programs |

Course overlap is computed at module load time via a prebuilt `Map<courseId, programId[]>` — no database queries needed.

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # static export to /out
```

---

## Project Structure

```
courses-portfolio/
├── app/                    # Next.js App Router pages
├── components/             # UI components (server + client)
│   ├── layout/             # Navbar
│   ├── programs/           # ProgramCard, ProgressBar, StatusBadge
│   ├── courses/            # CourseOverlapExplorer
│   ├── accomplishments/    # CertificateCard, GradeTable
│   └── roadmap/            # PriorityCard
├── data/                   # Static TypeScript data files
├── lib/                    # Overlap logic, program utils
└── public/                 # Static assets (profile photo)
```
