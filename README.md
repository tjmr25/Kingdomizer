# Kingdomizer

A Dominion kingdom generator and collection manager application.

## Overview

Kingdomizer helps Dominion players create balanced and interesting kingdom setups. It supports:

- Random kingdom generation with expansion filters
- Kingdom collection management
- Card filtering based on card properties
- Support for landscape cards (events, projects, ways, etc.)

## Project Structure

- **Frontend**: Web interface built with Lit components
- **Backend**: Java Spring Boot API
- **Documentation**: Docs in the `/docs` directory

## Documentation

For detailed documentation, see the `/docs` directory:

- [API Documentation](docs/api.md) - Details on all API endpoints
- [Database Schema](docs/database.md) - Database tables and relationships

## Development

### Frontend

Located in the `/frontend` directory.

```bash
cd frontend
npm install
npm run dev
```

### Backend

Located in the `/backend` directory.

```bash
cd backend
./mvnw spring-boot:run
```
