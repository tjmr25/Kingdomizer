/**
 * Card type definitions
 * Contains types for cards, landscapes, and related entities
 */

/**
 * Represents a kingdom card in the API response
 */
export interface CardResponse {
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
export interface DependencyResponse {
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
 * Base card properties shared across all card types
 */
export interface BaseCard {
  id: number;
  name: string;
  expansion: string;
  cost: number;
  cardTypes: string[];
}

/**
 * Card resource categories
 */
export type CardResourceCategory = 
  | 'KINGDOM_CARD' 
  | 'EXTRA_CARD' 
  | 'GAMEPART' 
  | 'LANDSCAPE' 
  | 'EVENT' 
  | 'PROJECT' 
  | 'WAY' 
  | 'LANDMARK'; 