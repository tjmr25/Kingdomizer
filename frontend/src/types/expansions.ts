/**
 * Expansion type definitions
 * Contains types and constants related to Dominion expansions
 */

/**
 * Dominion expansion identifiers
 */
export type ExpansionId = 
  | 'BASE'
  | 'BASE_1ST'
  | 'BASE_2ND'
  | 'PROSPERITY'
  | 'PROSPERITY_1ST'
  | 'PROSPERITY_2ND'
  | 'SEASIDE'
  | 'SEASIDE_1ST'
  | 'SEASIDE_2ND'
  | 'PLUNDER';

/**
 * Legacy (1st edition) expansion identifiers
 */
export const oldExpansionIdentifiers: ExpansionId[] = [
  "BASE_1ST", 
  "PROSPERITY_1ST", 
  "SEASIDE_1ST"
];

/**
 * Modern (2nd edition) expansion identifiers
 */
export const modernExpansionIdentifiers: ExpansionId[] = [
  "BASE_2ND", 
  "PROSPERITY_2ND", 
  "SEASIDE_2ND",
  "PLUNDER"
];

/**
 * Expansion selection state for kingdom generation
 */
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