/**
 * Kingdom component-specific type definitions
 * Contains types that are only used within the Kingdom component
 */

/**
 * Configuration for placeholders in the kingdom display
 */
export interface PlaceholderConfig {
  count: number;
  showLandscape: boolean;
}

/**
 * Kingdom view state
 */
export interface KingdomViewState {
  isLoading: boolean;
  hasShownKingdom: boolean;
  showPlaceholders: boolean;
  showLandscapePlaceholders: boolean;
  showGameMaterialSection: boolean;
}

/**
 * Configuration for a saved kingdom
 */
export interface SavedKingdomConfig {
  id: string;
  name?: string;
  timestamp: number;
  kingdomCardIds: number[];
  landscapeCardIds: number[];
} 