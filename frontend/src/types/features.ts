/**
 * Feature type definitions
 * Contains types and constants related to game features like curses, events, etc.
 */

/**
 * Expansion feature identifiers
 */
export type ExpansionFeature = 'CURSE' | 'TOKENS' | 'TABLEAUS' | 'LOOT' | 'EVENTS' | 'TRAITS';

/**
 * Feature set for an expansion
 */
export interface ExpansionFeatureSet {
  features: ExpansionFeature[];
}

/**
 * Features available in each expansion
 */
export const expansionFeatures: Record<string, ExpansionFeatureSet> = {
  BASE_1ST: {
    features: ['CURSE']
  },
  BASE_2ND: {
    features: ['CURSE']
  },
  PROSPERITY_1ST: {
    features: ['CURSE', 'TOKENS', 'TABLEAUS']
  },
  PROSPERITY_2ND: {
    features: ['CURSE', 'TOKENS']
  },
  SEASIDE_1ST: {
    features: ['CURSE', 'TABLEAUS', 'TOKENS']
  },
  SEASIDE_2ND: {
    features: ['CURSE', 'TABLEAUS']
  },
  PLUNDER: {
    features: ['LOOT', 'TRAITS', 'EVENTS']
  }
};

/**
 * Features grouped by type for easier filtering
 */
export const featureTypes = {
  // Game parts (kingdom cards and related elements)
  gameParts: ['CURSE', 'TOKENS', 'TABLEAUS', 'LOOT'] as ExpansionFeature[],
  // Landscape cards (special cards not in kingdom supply)
  landscapeCards: ['EVENTS', 'TRAITS'] as ExpansionFeature[]
}; 