/**
 * Filter type definitions
 * Contains types for filtering options in kingdom generation
 */

import { ExpansionSelections } from './expansions';

/**
 * Card feature filters for kingdom generation
 */
export interface CardFeatureFilters {
  hasMultipleActions: boolean;
  hasMultipleCards: boolean;
  hasBuy: boolean;
  hasReaction: boolean;
  hasTrash: boolean;
}

/**
 * Card type exclusion options
 */
export interface CardTypeExclusions {
  curses: boolean;
  victoryTokens: boolean;
  tableaus: boolean;
  treasures: boolean;
  events: boolean;
  landmarks: boolean;
}

/**
 * Complete filter configuration for kingdom generation
 */
export interface KingdomFilter {
  // Selected expansions
  expansions: ExpansionSelections;
  
  // Min card requirements
  cardFeatures: CardFeatureFilters;
  
  // Card exclusion options
  exclusions: CardTypeExclusions;
  
  // Card count filters
  minActionCards: number | null;
  minAttackCards: number | null;
  
  // Landscape settings
  landscapeCount: number;
} 