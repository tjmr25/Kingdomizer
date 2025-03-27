/**
 * Component-specific type definitions
 * Contains types that are only used within specific components
 */

/**
 * Kingdom component types
 */

// Kingdom view state - tracks UI display states
export interface KingdomViewState {
  isLoading: boolean;
  hasShownKingdom: boolean;
  showPlaceholders: boolean;
  showLandscapePlaceholders: boolean;
  showGameMaterialSection: boolean;
}

// Configuration for a saved kingdom
export interface SavedKingdomConfig {
  id: string;
  name?: string;
  timestamp: number;
  kingdomCardIds: number[];
  landscapeCardIds: number[];
} 