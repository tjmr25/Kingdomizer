# Kingdomizer API Documentation

This document provides an overview of all API calls made in the Kingdomizer application, including request/response structures and the location of each call.

## Table of Contents

1. [Generate Kingdom](#1-generate-kingdom)
2. [Kingdom Details](#2-kingdom-details)
3. [Fetch Saved Kingdoms](#3-fetch-saved-kingdoms)
4. [Save Kingdom](#4-save-kingdom-future-implementation)

---

## 1. Generate Kingdom

Generates a new randomized Dominion kingdom based on selected expansions.

### Endpoint
```
POST http://localhost:8080/api/kingdom/generate
```

### Location
`frontend/src/components/content/content.ts` - `generateNewKingdom()` method

### Request Body
```typescript
// ExpansionSelections
{
  BASE: boolean;
  BASE_1ST: boolean;
  BASE_2ND: boolean;
  PROSPERITY: boolean;
  PROSPERITY_1ST: boolean;
  PROSPERITY_2ND: boolean;
  SEASIDE: boolean;
  SEASIDE_1ST: boolean;
  SEASIDE_2ND: boolean;
  PLUNDER: boolean;
}
```

### Response Body
```typescript
// GenerateKingdomResponse
{
  kingdomCardIds: number[];    // Array of 10 kingdom card IDs
  landscape: number[];         // Array of landscape card IDs (optional)
}
```

---

## 2. Kingdom Details

Fetches detailed information about cards in a kingdom based on their IDs.

### Endpoint
```
POST http://localhost:8080/api/kingdom/details
```

### Location
`frontend/src/components/kingdom/kingdom.ts` - `fetchCardDetails()` method

### Request Body
```typescript
// KingdomDetailsRequest
{
  kingdomCardIds: number[];    // Array of kingdom card IDs
  landscape: number[];         // Array of landscape card IDs
}
```

### Response Body
```typescript
// KingdomDetailsResponse
{
  cards: [                     // Array of kingdom cards
    {
      id: number;
      name: string;
      expansion: string;
      cost: number;
      cardTypes: string[];
      hasPlusAction: boolean;
      hasPlusMultipleActions: boolean;
      hasPlusBuy: boolean;
      hasPlusMultipleDraws: boolean;
      hasTrash: boolean;
      hasCurse: boolean;
    }
  ],
  dependencies: [              // Array of dependencies (landscapes, additional cards)
    {
      id: number;
      name: string;
      expansion: string;
      cost: number;
      resourceCategory: string;
      hasLandscapeOrientation: boolean;
      isLinked: boolean | null;
      cardTypes: string[];
      hasCurse: boolean;
    }
  ]
}
```

---

## 3. Fetch Saved Kingdoms

Retrieves a list of previously saved kingdoms.

### Endpoint
```
GET http://localhost:8080/api/kingdom
```

### Location
`frontend/src/components/collection/collection.ts` - `fetchKingdoms()` method

### Request Body
None (GET request)

### Response Body
```typescript
// Array of Kingdom objects
[
  {
    id: number;
    createdAt: string;         // ISO-8601 timestamp
    cards: [                   // Array of card objects
      {
        id: number;
        name: string;
        expansion: string;
        cost: number;
        cardTypes: string[];
        hasPlusAction: boolean;
        hasPlusMultipleActions: boolean;
        hasPlusBuy: boolean;
        hasPlusMultipleDraws: boolean;
        hasTrash: boolean;
        hasCurse: boolean;
      }
    ]
  }
]
```

---

## 4. Save Kingdom (Future Implementation)

Currently a placeholder function in the UI, not yet implemented on the backend.

### Endpoint
```
POST http://localhost:8080/api/kingdom
```

### Location
`frontend/src/components/content/content.ts` - `saveCurrentKingdom()` method (currently just shows alert)

### Expected Request Body
```typescript
// SaveKingdomRequest (proposed structure)
{
  kingdomCardIds: number[];    // Array of kingdom card IDs
  landscapeCardIds: number[];  // Array of landscape card IDs
  name?: string;               // Optional kingdom name
}
```

### Expected Response Body
```typescript
// SaveKingdomResponse (proposed structure)
{
  id: number;                  // Unique identifier for saved kingdom
  createdAt: string;           // Creation timestamp
  success: boolean;            // Indicates success
}
```

---

## Type Organization

The API types are organized in a centralized structure to maintain consistency and reduce duplication:

### Core Type Files
- `frontend/src/types/api.ts` - API request/response types
- `frontend/src/types/cards.ts` - Card and dependency types
- `frontend/src/types/expansions.ts` - Expansion selection types
- `frontend/src/types/filters.ts` - Kingdom filter types
- `frontend/src/types/index.ts` - Barrel file re-exporting all types

### Component-Specific Types
- `frontend/src/components/kingdom/kingdom-specific.types.ts` - Types specific to the Kingdom component

---

## Notes

- All API endpoints use the base URL `http://localhost:8080/api`
- All requests and responses use JSON format
- Error responses are not explicitly documented, but generally follow HTTP status codes 