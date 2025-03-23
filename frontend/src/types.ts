export const oldExpansionIdentifiers = ['BASE_1ST', 'PROSPERITY_1ST', 'SEASIDE_1ST'];

export type ExpansionFeature = 'CURSE' | 'VICTORY_TOKENS' | 'TABLEAUS' | 'LOOT' | 'EVENTS' | 'TRAITS';

export interface ExpansionFeatureSet {
  features: ExpansionFeature[];
}

export const expansionFeatures: Record<string, ExpansionFeatureSet> = {
  BASE_1ST: {
    features: ['CURSE']
  },
  BASE_2ND: {
    features: ['CURSE']
  },
  PROSPERITY_1ST: {
    features: ['CURSE', 'VICTORY_TOKENS', 'TABLEAUS']
  },
  PROSPERITY_2ND: {
    features: ['CURSE', 'VICTORY_TOKENS']
  },
  SEASIDE_1ST: {
    features: ['CURSE', 'TABLEAUS', 'VICTORY_TOKENS']
  },
  SEASIDE_2ND: {
    features: ['CURSE', 'TABLEAUS']
  },
  PLUNDER: {
    features: ['LOOT', 'TRAITS', 'EVENTS']
  }
};

// Group features by type
export const featureTypes = {
  // Game parts (kingdom cards and related elements)
  gameParts: ['CURSE', 'VICTORY_TOKENS', 'TABLEAUS', 'LOOT'] as ExpansionFeature[],
  // Landscape cards (special cards not in kingdom supply)
  landscapeCards: ['EVENTS', 'TRAITS'] as ExpansionFeature[]
};

export interface GenerateKingdomResponse {
  kingdomCardIds: number[];
  landscape?: number[];
}

export interface ExpansionSelections {
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

export interface CardFeatureFilters {
  hasMultipleActions: boolean;
  hasMultipleCards: boolean;
  hasBuy: boolean;
  hasReaction: boolean;
  hasTrash: boolean;
}

export interface CardTypeExclusions {
  curses: boolean;
  victoryTokens: boolean;
  tableaus: boolean;
  treasures: boolean;
  events: boolean;
  landmarks: boolean;
} 