# Kingdomizer Database Documentation

This document describes the database schema for the Kingdomizer application, including tables, columns, and enumeration values.

## Table of Contents

1. [RESOURCES](#resources)
2. [CARD_PROPERTIES](#card_properties)
3. [CARD_TYPES](#card_types)
4. [CARD_DEPENDENCIES](#card_dependencies)
5. [Enumerations](#enumerations)

---

## RESOURCES

Main table containing all cards, events, projects, and other game materials.

| Column                    | Type    | Description                                          |
|---------------------------|---------|------------------------------------------------------|
| RESOURCE_ID               | INT     | Primary key, unique identifier for the resource      |
| RESOURCE_NAME             | VARCHAR | Name of the card or game element                     |
| RESOURCE_CATEGORY         | ENUM    | Type of resource (see [RESOURCE_CATEGORY](#resource_category)) |
| EXPANSION                 | ENUM    | Which Dominion expansion the resource belongs to     |
| COST                      | INT     | Cost of the card in coins                            |
| HAS_LANDSCAPE_ORIENTATION | BOOLEAN | Whether the card uses landscape orientation          |
| IS_LINKED                 | BOOLEAN | Whether the card is linked to another card           |

---

## CARD_PROPERTIES

Stores additional properties specific to cards.

| Column                    | Type    | Description                                          |
|---------------------------|---------|------------------------------------------------------|
| RESOURCE_ID               | INT     | Foreign key to RESOURCES table                       |
| HAS_PLUS_ACTION           | BOOLEAN | Whether the card gives +1 Action                     |
| HAS_PLUS_MULTIPLE_ACTION  | BOOLEAN | Whether the card gives +2 or more Actions            |
| HAS_PLUS_BUY              | BOOLEAN | Whether the card gives +1 Buy                        |
| HAS_PLUS_MULTIPLE_DRAWS   | BOOLEAN | Whether the card draws 2 or more cards               |
| HAS_TRASH                 | BOOLEAN | Whether the card allows trashing                     |
| HAS_CURSE                 | BOOLEAN | Whether the card involves Curse cards                |

---

## CARD_TYPES

Stores the types of each card (a card can have multiple types).

| Column                    | Type    | Description                                          |
|---------------------------|---------|------------------------------------------------------|
| RESOURCE_ID               | INT     | Foreign key to RESOURCES table                       |
| CARD_TYPE                 | ENUM    | Type of the card (see [CARD_TYPE](#card_type))       |

---

## CARD_DEPENDENCIES

Maps dependencies between cards and other game elements.

| Column                    | Type    | Description                                          |
|---------------------------|---------|------------------------------------------------------|
| RESOURCE_ID               | INT     | Foreign key to RESOURCES table (the main card)       |
| DEPENDENCY_ID             | INT     | Foreign key to RESOURCES table (the dependency)      |

---

## Enumerations

### RESOURCE_CATEGORY

Categories of different game elements.

| Value        | Description                         |
|--------------|-------------------------------------|
| KINGDOM_CARD | Standard supply pile card           |
| EXTRA_CARD   | Additional card (like Bane)         |
| EVENT        | Event card                          |
| PROJECT      | Project card                        |
| LANDMARK     | Landmark card                       |
| PROPHECY     | Prophecy card                       |
| WAY          | Way card                            |
| TRAIT        | Trait card                          |
| GAMEPART     | Game components like tokens or mats |

### EXPANSION

Dominion expansions in the game.

| Value      | Description           |
|------------|-----------------------|
| BASE       | Base game             |
| PROSPERITY | Prosperity expansion  |
| SEASIDE    | Seaside expansion     |
| PLUNDER    | Plunder expansion     |

### CARD_TYPE

Types that cards can have (cards can have multiple types).

| Value     | Description      |
|-----------|------------------|
| ACTION    | Action card      |
| REACTION  | Reaction card    |
| ATTACK    | Attack card      |
| VICTORY   | Victory card     |
| TREASURE  | Treasure card    |
| DURATION  | Duration card    |
| COMMAND   | Command card     |
| CURSE     | Curse card       |

---

## Relationships

- Each record in RESOURCES can have multiple entries in CARD_TYPES (one-to-many)
- Each KINGDOM_CARD in RESOURCES can have one entry in CARD_PROPERTIES (one-to-one)
- CARD_DEPENDENCIES creates many-to-many relationships between resources

---

## Notes

- The IS_LINKED field in RESOURCES indicates cards that have linked companions
- Some cards may belong to multiple categories or have multiple types
- CARD_DEPENDENCIES can represent various relationships such as:
  - Cards that require specific tokens or mats
  - Events that affect specific card types
  - Projects that modify game rules for specific cards 