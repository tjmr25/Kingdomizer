/**
 * API response type definitions
 * Contains types for API responses and requests
 */

import { CardResponse, DependencyResponse } from './cards';

/**
 * Response from the kingdom generation endpoint
 */
export interface GenerateKingdomResponse {
  kingdomCardIds: number[];
  landscape?: number[];
}

/**
 * Complete kingdom details returned by the API from the /details endpoint
 */
export interface KingdomDetailsResponse {
  cards: CardResponse[];
  dependencies: DependencyResponse[];
}

/**
 * Request payload for fetching kingdom details
 */
export interface KingdomDetailsRequest {
  kingdomCardIds: number[];
  landscape: number[];
} 