-- BASISSPIEL 2. EDITION

-- TABELLE: CARDS
INSERT INTO cards (id, name, cost) VALUES (1, 'Burggraben', 2);
INSERT INTO cards (id, name, cost) VALUES (2, 'Kapelle', 2);
INSERT INTO cards (id, name, cost) VALUES (3, 'Keller', 2);
INSERT INTO cards (id, name, cost) VALUES (4, 'Händlerin', 3);
INSERT INTO cards (id, name, cost) VALUES (5, 'Vasall', 3);
INSERT INTO cards (id, name, cost) VALUES (6, 'Vorbotin', 3);
INSERT INTO cards (id, name, cost) VALUES (7, 'Werkstatt', 3);
INSERT INTO cards (id, name, cost) VALUES (8, 'Dorf', 3);
INSERT INTO cards (id, name, cost) VALUES (9, 'Gärten', 4);
INSERT INTO cards (id, name, cost) VALUES (10, 'Bürokrat', 4);
INSERT INTO cards (id, name, cost) VALUES (11, 'Geldverleiher', 4);
INSERT INTO cards (id, name, cost) VALUES (12, 'Miliz', 4);
INSERT INTO cards (id, name, cost) VALUES (13, 'Schmiede', 4);
INSERT INTO cards (id, name, cost) VALUES (14, 'Thronsaal', 4);
INSERT INTO cards (id, name, cost) VALUES (15, 'Umbau', 4);
INSERT INTO cards (id, name, cost) VALUES (16, 'Wilddiebin', 4);
INSERT INTO cards (id, name, cost) VALUES (17, 'Hexe', 5);
INSERT INTO cards (id, name, cost) VALUES (18, 'Banditin', 5);
INSERT INTO cards (id, name, cost) VALUES (19, 'Bibliothek', 5);
INSERT INTO cards (id, name, cost) VALUES (20, 'Jahrmarkt', 5);
INSERT INTO cards (id, name, cost) VALUES (21, 'Laboratorium', 5);
INSERT INTO cards (id, name, cost) VALUES (22, 'Markt', 5);
INSERT INTO cards (id, name, cost) VALUES (23, 'Mine', 5);
INSERT INTO cards (id, name, cost) VALUES (24, 'Ratsversammlung', 5);
INSERT INTO cards (id, name, cost) VALUES (25, 'Torwächterin', 5);
INSERT INTO cards (id, name, cost) VALUES (26, 'Töpferei', 6);


-- TABELLE CARD_TYPES
INSERT INTO card_types (card_id, types) VALUES (1, 'REACTION');
INSERT INTO card_types (card_id, types) VALUES (1, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (2, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (3, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (4, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (5, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (6, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (7, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (8, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (9, 'VICTORY');
INSERT INTO card_types (card_id, types) VALUES (10, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (10, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (11, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (12, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (12, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (13, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (14, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (15, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (16, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (17, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (17, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (18, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (18, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (19, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (20, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (21, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (22, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (23, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (24, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (25, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (26, 'ACTION');
