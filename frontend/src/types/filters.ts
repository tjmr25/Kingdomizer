/**
 * Filter type definitions
 * Contains types for filtering options in kingdom generation
 */

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
 * Kingdom generation filter parameters
 */
export interface KingdomFilters {
  cardFeatures: CardFeatureFilters;
  exclusions: CardTypeExclusions;
  actionCardsCount: number | null;
  attackCardsCount: number | null;
  landscapeCount: number;
} 