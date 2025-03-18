/**
 * Types related to Kingdom component and API responses
 */

/**
 * Represents a kingdom card in the API response
 */
export interface ResponseCard {
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

/**
 * Represents a dependency or landscape card in the API response
 */
export interface ResponseDependency {
  id: number;
  name: string;
  expansion: string;
  cost: number;
  resourceCategory: string;
  hasLandscapeOrientation: boolean;
  isLinked: null | boolean;
  cardTypes: string[];
  hasCurse: boolean;
}

/**
 * Complete kingdom details returned by the API from the /details endpoint
 */
export interface KingdomDetailsResponse {
  cards: ResponseCard[];
  dependencies: ResponseDependency[];
}

/**
 * Structure returned by the kingdom generation endpoint
 */
export interface GenerateKingdomResponse {
  kingdomCardIds: number[];
  landscape?: number[];
} 