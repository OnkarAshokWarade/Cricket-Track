# Patoda XI Manager

A local React application for managing the Patoda XI cricket group.

## Features

- Player management with add, edit, delete
- Weekly team generation and fixed weekly squads
- Daily captain selection without repeating in the same week
- Single match recording per day with penalty tracking
- Weekly summary and match history views
- Shared data persisted in Firebase Realtime Database

## Setup

1. Run `npm install`
2. Add Firebase web config values to `.env`
3. Make sure `VITE_FIREBASE_DATABASE_URL` is set
4. Run `npm run dev`

## Structure

- `src/`
  - `pages/`
  - `components/`
  - `utils/`
  - `services/`
