-- ZUFÄLLIGE KÖNIGREICHE

-- Königreich 1
INSERT INTO kingdoms (id, created_at) VALUES (10001, '2024-11-27 2:00:00');
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 1);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 2);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 3);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 4);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 27);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 28);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 54);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 56);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 65);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10001, 70);

-- Königreich 2
INSERT INTO kingdoms (id, created_at) VALUES (10002, '2024-11-27 3:00:00');
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 4);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 6);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 7);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 29);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 30);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 35);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 58);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 60);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 71);
INSERT INTO kingdom_cards (kingdom_id, card_id) VALUES (10002, 74);

-- TABELLE: DEPENDENCIES


-- BASISSPIEL 2.EDITION

-- TABELLE: CARDS
INSERT INTO cards (id, name, cost, expansion) VALUES (1, 'Burggraben', 2, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (2, 'Kapelle', 2, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (3, 'Keller', 2, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (4, 'Händlerin', 3, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (5, 'Vasall', 3, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (6, 'Vorbotin', 3, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (7, 'Werkstatt', 3, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (8, 'Dorf', 3, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (9, 'Gärten', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (10, 'Bürokrat', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (11, 'Geldverleiher', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (12, 'Miliz', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (13, 'Schmiede', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (14, 'Thronsaal', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (15, 'Umbau', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (16, 'Wilddiebin', 4, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (17, 'Hexe', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (18, 'Banditin', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (19, 'Bibliothek', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (20, 'Jahrmarkt', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (21, 'Laboratorium', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (22, 'Markt', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (23, 'Mine', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (24, 'Ratsversammlung', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (25, 'Torwächterin', 5, 'BASE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (26, 'Töpferei', 6, 'BASE_2ND');


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


-- TABELLE: DEPENDENCIES


-- BLÜTEZEIT 2.EDITION

-- TABELLE: CARDS
INSERT INTO cards (id, name, cost, expansion) VALUES (27, 'Amboss', 3, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (28, 'Wachturm', 3, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (29, 'Arbeiterdorf', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (30, 'Bischof', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (31, 'Brautkrone', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (32, 'Buchhalterin', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (33, 'Denkmal', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (34, 'Geldanlage', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (35, 'Steinbruch', 4, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (36, 'Gesindel', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (37, 'Gewölbe', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (38, 'Kristallkugel', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (39, 'Magnatin', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (40, 'Münzer', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (41, 'Sammelsurium', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (42, 'Stadt', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (43, 'Waffenkiste', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (44, 'Wunderheilerin', 5, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (45, 'Grosser Markt', 6, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (46, 'Hort', 6, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (47, 'Ausbau', 7, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (48, 'Bank', 7, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (49, 'Königshof', 7, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (50, 'Kunstschmiede', 7, 'PROSPERITY_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (51, 'Hausiererin', 8, 'PROSPERITY_2ND');

-- TABELLE CARD_TYPES
INSERT INTO card_types (card_id, types) VALUES (27, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (28, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (28, 'REACTION');
INSERT INTO card_types (card_id, types) VALUES (29, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (30, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (31, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (32, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (32, 'REACTION');
INSERT INTO card_types (card_id, types) VALUES (32, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (33, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (34, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (35, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (36, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (36, 'REACTION');
INSERT INTO card_types (card_id, types) VALUES (37, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (38, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (39, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (40, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (41, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (42, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (43, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (44, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (44, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (45, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (46, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (47, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (48, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (49, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (50, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (51, 'ACTION');



--SEASIDE 2.EDITION

-- TABELLE: CARDS
INSERT INTO cards (id, name, cost, expansion) VALUES (52, 'Eingeborenendorf', 2, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (53, 'Hafen', 2, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (54, 'Leuchtturm', 2, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (55, 'Affe', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (56, 'Astrolabium', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (57, 'Ausguck', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (58, 'Fischerdorf', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (59, 'Lagerhaus', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (60, 'Seekarte', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (61, 'Schmuggler', 3, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (62, 'Beutelschneider', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (63, 'Blockade', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (64, 'Gezeitenbecken', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (65, 'Insel', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (66, 'Karawane', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (67, 'Müllverwerter', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (68, 'Schatzkarte', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (69, 'Seefahrerin', 4, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (70, 'Aussenposten', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (71, 'Bazar', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (72, 'Handelsschiff', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (73, 'Korsarenschiff', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (74, 'Meerhexe', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (75, 'Piratin', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (76, 'Schatzkammer', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (77, 'Taktiker', 5, 'SEASIDE_2ND');
INSERT INTO cards (id, name, cost, expansion) VALUES (78, 'Werft', 5, 'SEASIDE_2ND');

-- TABELLE CARD_TYPES
INSERT INTO card_types (card_id, types) VALUES (52, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (53, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (53, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (54, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (54, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (55, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (55, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (56, 'TREASURE');
INSERT INTO card_types (card_id, types) VALUES (56, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (57, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (58, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (58, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (59, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (60, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (61, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (62, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (62, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (63, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (63, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (63, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (64, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (64, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (65, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (65, 'VICTORY');
INSERT INTO card_types (card_id, types) VALUES (66, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (66, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (67, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (68, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (69, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (69, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (70, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (70, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (71, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (72, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (72, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (73, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (73, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (73, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (74, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (74, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (74, 'ATTACK');
INSERT INTO card_types (card_id, types) VALUES (75, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (75, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (75, 'REACTION');
INSERT INTO card_types (card_id, types) VALUES (76, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (77, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (77, 'DURATION');
INSERT INTO card_types (card_id, types) VALUES (78, 'ACTION');
INSERT INTO card_types (card_id, types) VALUES (78, 'DURATION');



