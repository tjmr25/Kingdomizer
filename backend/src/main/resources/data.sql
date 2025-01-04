-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
-- KINGDOMIZER DATENBANKEINTRÄGE
-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



-- BASISSPIEL

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10001, 'Burggraben', 'CARD', 'BASE', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10002, 'Keller', 'CARD', 'BASE', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10003, 'Kapelle', 'CARD', 'BASE', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10004, 'Dorf', 'CARD', 'BASE', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10005, 'Werkstatt', 'CARD', 'BASE', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10006, 'Bürokrat', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10007, 'Geldverleiher', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10008, 'Miliz', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10009, 'Schmiede', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10010, 'Thronsaal', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10011, 'Umbau', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10012, 'Bibliothek', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10013, 'Hexe', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10014, 'Jahrmarkt', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10015, 'Laboratorium', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10016, 'Markt', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10017, 'Mine', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10018, 'Ratsversammlung', 'CARD', 'BASE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10019, 'Gärten', 'CARD', 'BASE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (10020, 'Fluch', 'EXTRA_CARD', 'BASE', 0, false, null);

-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10001, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10002, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10003, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10004, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10005, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10006, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10007, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10008, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10009, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10010, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10011, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10012, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10013, false, false, false, true, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10014, true, true, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10015, true, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10016, true, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10017, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10018, false, false, true, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (10019, false, false, false, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (10001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10001, 'REACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10006, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (10007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10008, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10008, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (10009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10010, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10011, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10012, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10013, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10013, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (10014, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10015, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10016, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10017, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10018, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (10019, 'VICTORY');
INSERT INTO card_types (resource_id, card_type) VALUES (10020, 'CURSE');


-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (10013, 10020);   -- Hexe, Fluch



-- BASISSPIEL 1.EDITION

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (11001, 'Holzfäller', 'CARD', 'BASE_1ST', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (11002, 'Kanzler', 'CARD', 'BASE_1ST', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (11003, 'Festmahl', 'CARD', 'BASE_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (11004, 'Dieb', 'CARD', 'BASE_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (11005, 'Spion', 'CARD', 'BASE_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (11006, 'Abenteurer', 'CARD', 'BASE_1ST', 6, false, null);

-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (11001, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (11002, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (11003, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (11004, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (11005, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (11006, false, false, false, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (11001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (11002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (11003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (11004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (11004, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (11005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (11005, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (11006, 'ACTION');

-- Tabelle: CARD_DEPENDENCIES
-- <<LEER>>



-- BASISSPIEL 2.EDITION

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12001, 'Händlerin', 'CARD', 'BASE_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12002, 'Vasall', 'CARD', 'BASE_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12003, 'Vorbotin', 'CARD', 'BASE_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12004, 'Wilddiebin', 'CARD', 'BASE_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12005, 'Torwächterin', 'CARD', 'BASE_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12006, 'Banditin', 'CARD', 'BASE_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (12007, 'Töpferei', 'CARD', 'BASE_2ND', 6, false, null);

-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12001, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12002, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12003, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12004, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12005, true, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12006, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (12007, false, false, false, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (12001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (12002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (12003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (12004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (12005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (12006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (12006, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (12007, 'ACTION');

-- Tabelle: CARD_DEPENDENCIES
-- <<LEER>>


-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



-- BLÜTEZEIT

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20001, 'Arbeiterdorf', 'CARD', 'PROSPERITY', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20002, 'Bischof', 'CARD', 'PROSPERITY', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20003, 'Denkmal', 'CARD', 'PROSPERITY', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20004, 'Gewölbe', 'CARD', 'PROSPERITY', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20005, 'Münzer', 'CARD', 'PROSPERITY', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20006, 'Stadt', 'CARD', 'PROSPERITY', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20007, 'Großer Markt', 'CARD', 'PROSPERITY', 6, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20008, 'Ausbau', 'CARD', 'PROSPERITY', 7, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20009, 'Königshof', 'CARD', 'PROSPERITY', 7, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20010, 'Kunstschmiede', 'CARD', 'PROSPERITY', 7, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20011, 'Hausierer', 'CARD', 'PROSPERITY', 8, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20012, 'Wachturm', 'CARD', 'PROSPERITY', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20013, 'Gesindel', 'CARD', 'PROSPERITY', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20014, 'Bank', 'CARD', 'PROSPERITY', 7, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20015, 'Hort', 'CARD', 'PROSPERITY', 6, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20016, 'Steinbruch', 'CARD', 'PROSPERITY', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20017, 'Platin', 'EXTRA_CARD', 'PROSPERITY', 9, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20018, 'Kolonie', 'EXTRA_CARD', 'PROSPERITY', 11, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (20019, 'Punktemarker', 'GAMEPART', 'PROSPERITY', null, false, null);


-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20001, true, true, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20002, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20003, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20004, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20005, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20006, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20007, true, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20008, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20009, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20010, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20011, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20012, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20013, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20014, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20015, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (20016, false, false, false, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (20001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20008, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20010, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20011, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20012, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20012, 'REACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20013, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (20013, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (20014, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (20015, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (20016, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (20017, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (20018, 'VICTORY');

-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20002, 20019);   -- Bischof, Punktemarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20003, 20019);   -- Denkmal, Punktemarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20001, 20017);   -- Arbeiterdorf, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20001, 20018);   -- Arbeiterdorf, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20002, 20017);   -- Bischof, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20002, 20018);   -- Bischof, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20003, 20017);   -- Denkmal, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20003, 20018);   -- Denkmal, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20004, 20017);   -- Gewölbe, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20004, 20018);   -- Gewölbe, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20005, 20017);   -- Münzer, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20005, 20018);   -- Münzer, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20006, 20017);   -- Stadt, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20006, 20018);   -- Stadt, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20007, 20017);   -- Großer Markt, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20007, 20018);   -- Großer Markt, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20008, 20017);   -- Ausbau, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20008, 20018);   -- Ausbau, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20009, 20017);   -- Königshof, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20009, 20018);   -- Königshof, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20010, 20017);   -- Kunstschmiede, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20010, 20018);   -- Kunstschmiede, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20011, 20017);   -- Hausierer, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20011, 20018);   -- Hausierer, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20012, 20017);   -- Wachturm, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20012, 20018);   -- Wachturm, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20013, 20017);   -- Gesindel, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20013, 20018);   -- Gesindel, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20014, 20017);   -- Bank, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20014, 20018);   -- Bank, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20015, 20017);   -- Hort, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20015, 20018);   -- Hort, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20016, 20017);   -- Steinbruch, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (20016, 20018);   -- Steinbruch, Kolonie



-- BLÜTEZEIT 1.EDITION

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21001, 'Handelsroute', 'CARD', 'PROSPERITY_1ST', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21002, 'Lohn', 'CARD', 'PROSPERITY_1ST', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21003, 'Talisman', 'CARD', 'PROSPERITY_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21004, 'Abenteuer', 'CARD', 'PROSPERITY_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21005, 'Königliches Siegel', 'CARD', 'PROSPERITY_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21006, 'Leihaus', 'CARD', 'PROSPERITY_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21007, 'Quacksalber', 'CARD', 'PROSPERITY_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21008, 'Schmugglerware', 'CARD', 'PROSPERITY_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21009, 'Halsabschneider', 'CARD', 'PROSPERITY_1ST', 6, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21010, 'Handelsr.-Tableau', 'GAMEPART', 'PROSPERITY_1ST', null, true, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (21011, 'Geldmarker', 'GAMEPART', 'PROSPERITY_1ST', null, false, null);

-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21001, false, false, true, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21002, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21003, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21004, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21005, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21006, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21007, false, false, false, false, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21008, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (21009, false, false, true, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (21001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (21002, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (21003, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (21004, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (21005, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (21006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (21007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (21007, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (21008, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (21009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (21009, 'ATTACK');

-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21001, 21010);   -- Handelsroute, Handelrouten-Tableau
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21001, 21011);   -- Handelsroute, Geldmarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21009, 20019);   -- Halsabschneider, Punktemarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21007, 10020);   -- Quacksalber, Fluch
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21001, 20017);   -- Handelsroute, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21001, 20018);   -- Handelsroute, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21002, 20017);   -- Lohn, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21002, 20018);   -- Lohn, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21003, 20017);   -- Talisman, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21003, 20018);   -- Talisman, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21004, 20017);   -- Abenteuer, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21004, 20018);   -- Abenteuer, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21005, 20017);   -- Königliches Siegel, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21005, 20018);   -- Königliches Siegel, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21006, 20017);   -- Leihaus, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21006, 20018);   -- Leihaus, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21007, 20017);   -- Quacksalber, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21007, 20018);   -- Quacksalber, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21008, 20017);   -- Schmugglerware, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21008, 20018);   -- Schmugglerware, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21009, 20017);   -- Halsabschneider, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (21009, 20018);   -- Halsabschneider, Kolonie




-- BLÜTEZEIT 2.EDITION

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22001, 'Amboss', 'CARD', 'PROSPERITY_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22002, 'Brautkrone', 'CARD', 'PROSPERITY_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22003, 'Buchhalterin', 'CARD', 'PROSPERITY_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22004, 'Geldanlage', 'CARD', 'PROSPERITY_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22005, 'Kristallkugel', 'CARD', 'PROSPERITY_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22006, 'Magnatin', 'CARD', 'PROSPERITY_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22007, 'Sammelsurium', 'CARD', 'PROSPERITY_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22008, 'Waffenkiste', 'CARD', 'PROSPERITY_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (22009, 'Wunderheilerin', 'CARD', 'PROSPERITY_2ND', 5, false, null);


-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22001, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22002, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22003, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22004, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22005, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22006, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22007, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22008, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (22009, false, false, false, false, false, true);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (22001, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (22002, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (22003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (22003, 'REACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (22003, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (22004, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (22005, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (22006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (22007, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (22008, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (22009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (22009, 'ATTACK');

-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22004, 20019);   -- Geldanlage, Punktemarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22007, 20019);   -- Sammelsurium, Punktemarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22009, 10020);   -- Wunderheilerin, Fluch
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22001, 20017);   -- Amboss, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22001, 20018);   -- Amboss, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22002, 20017);   -- Brautkrone, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22002, 20018);   -- Brautkrone, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22003, 20017);   -- Buchhalterin, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22003, 20018);   -- Buchhalterin, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22004, 20017);   -- Geldanlage, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22004, 20018);   -- Geldanlage, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22005, 20017);   -- Kristallkugel, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22005, 20018);   -- Kristallkugel, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22006, 20017);   -- Magnatin, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22006, 20018);   -- Magnatin, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22007, 20017);   -- Sammelsurium, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22007, 20018);   -- Sammelsurium, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22008, 20017);   -- Waffenkiste, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22008, 20018);   -- Waffenkiste, Kolonie
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22009, 20017);   -- Wunderheilerin, Platin
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (22009, 20018);   -- Wunderheilerin, Kolonie



-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



-- SEASIDE 

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30001, 'Eingeborenendorf', 'CARD', 'SEASIDE', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30002, 'Ausguck', 'CARD', 'SEASIDE', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30003, 'Lagerhaus', 'CARD', 'SEASIDE', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30004, 'Schmuggler', 'CARD', 'SEASIDE', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30005, 'Beutelschneider', 'CARD', 'SEASIDE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30006, 'Müllverwerter', 'CARD', 'SEASIDE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30007, 'Schatzkarte', 'CARD', 'SEASIDE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30008, 'Bazar', 'CARD', 'SEASIDE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30009, 'Schatzkammer', 'CARD', 'SEASIDE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30010, 'Hafen', 'CARD', 'SEASIDE', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30011, 'Leuchtturm', 'CARD', 'SEASIDE', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30012, 'Fischerdorf', 'CARD', 'SEASIDE', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30013, 'Karawane', 'CARD', 'SEASIDE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30014, 'Aussenposten', 'CARD', 'SEASIDE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30015, 'Handelsschiff', 'CARD', 'SEASIDE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30016, 'Taktiker', 'CARD', 'SEASIDE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30017, 'Werft', 'CARD', 'SEASIDE', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30018, 'Insel', 'CARD', 'SEASIDE', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30019, 'Insel-Tableau', 'GAMEPART', 'SEASIDE', null, true, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (30020, 'Eingeb.-Tableau', 'GAMEPART', 'SEASIDE', null, true, null);


-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30001, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30002, true, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30003, true, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30004, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30005, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30006, false, false, true, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30007, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30008, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30009, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30010, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30011, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30012, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30013, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30014, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30015, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30016, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30017, false, false, true, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (30018, false, false, false, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (30001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30005, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (30006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30008, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30010, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30010, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30011, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30011, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30012, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30012, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30013, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30013, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30014, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30014, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30015, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30015, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30016, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30016, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30017, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30017, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (30018, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (30018, 'VICTORY');

-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (30001, 30020);   -- Eingeborenendorf, Eingeborenendorf-Tableau
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (30018, 30019);   -- Eingeborenendorf, Eingeborenendorf-Tableau


-- SEASIDE 1.EDITION 

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31001, 'Botschafter', 'CARD', 'SEASIDE_1ST', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31002, 'Embargo', 'CARD', 'SEASIDE_1ST', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31003, 'Entdecker', 'CARD', 'SEASIDE_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31004, 'Geisterschiff', 'CARD', 'SEASIDE_1ST', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31005, 'Navigator', 'CARD', 'SEASIDE_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31006, 'Perlentaucher', 'CARD', 'SEASIDE_1ST', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31007, 'Piratenschiff', 'CARD', 'SEASIDE_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31008, 'Seehexe', 'CARD', 'SEASIDE_1ST', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31009, 'Embargomarker', 'GAMEPART', 'SEASIDE_1ST', null, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (31010, 'Piratens.-Tableau', 'GAMEPART', 'SEASIDE_1ST', null, true, null);


-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31001, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31002, false, false, false, false, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31003, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31004, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31005, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31006, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31007, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (31008, false, false, false, false, false, true);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (31001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31001, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (31002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31004, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (31005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31007, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (31008, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (31008, 'ATTACK');


-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (31002, 31009);   -- Embargo, Embargomarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (31002, 10020);   -- Embargo, Embargomarker
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (31007, 21011);   -- Piratenschiff, Geldmarker (Blütezeit)
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (31007, 31010);   -- Piratenschiff, Piratenschiff-Tableau
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (31008, 10020);   -- Seehexe, Fluch



-- SEASIDE 2.EDITION 

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32001, 'Seekarte', 'CARD', 'SEASIDE_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32002, 'Affe', 'CARD', 'SEASIDE_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32003, 'Blockade', 'CARD', 'SEASIDE_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32004, 'Gezeitenbecken', 'CARD', 'SEASIDE_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32005, 'Seefahrerin', 'CARD', 'SEASIDE_2ND', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32006, 'Korsarenschiff', 'CARD', 'SEASIDE_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32007, 'Meerhexe', 'CARD', 'SEASIDE_2ND', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32008, 'Astrolabium', 'CARD', 'SEASIDE_2ND', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (32009, 'Piratin', 'CARD', 'SEASIDE_2ND', 5, false, null);


-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32001, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32002, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32003, false, false, false, false, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32004, true, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32005, true, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32006, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32007, false, false, false, true, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32008, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (32009, false, false, false, false, false, false);

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (32001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32002, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32003, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32003, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (32004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32004, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32005, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32006, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32006, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (32007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32007, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32007, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (32008, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (32008, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (32009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32009, 'REACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (32009, 'DURATION');



-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (32003, 10020);   -- Blockade, Fluch
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (32007, 10020);   -- Meerhexe, Fluch



-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



-- PLUNDER 

-- Tabelle: RESOURCES
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40001, 'Grotte', 'CARD', 'PLUNDER', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40002, 'Schamanin', 'CARD', 'PLUNDER', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40003, 'Suche', 'CARD', 'PLUNDER', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40004, 'Blinder Passagier', 'CARD', 'PLUNDER', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40005, 'Einsamer Schrein', 'CARD', 'PLUNDER', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40006, 'Sirene', 'CARD', 'PLUNDER', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40007, 'Vorarbeiter', 'CARD', 'PLUNDER', 3, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40008, 'Abenteurerin', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40009, 'Ausgesetzter', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40010, 'Flaggschiff', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40011, 'Hafendorf', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40012, 'Kartenzeichnerin', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40013, 'Landungstrupp', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40014, 'Schiffsjunge', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40015, 'Sumpfhütten', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40016, 'Bergbaustrasse', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40017, 'Erste Maatin', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40018, 'Fregatte', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40019, 'Gauner', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40020, 'Langschiff', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40021, 'Mannschaft', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40022, 'Meuchlerin', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40023, 'Pilger', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40024, 'Quartiermeister', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40025, 'Vergrösserung', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40026, 'Wohlhabendes Dorf', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40027, 'Juwelen-Ei', 'CARD', 'PLUNDER', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40028, 'Käfig', 'CARD', 'PLUNDER', 2, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40029, 'Gondel', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40030, 'Schmelztiegel', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40031, 'Seil', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40032, 'Überfluss', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40033, 'Werkzeug', 'CARD', 'PLUNDER', 4, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40034, 'Anhänger', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40035, 'Figurine', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40036, 'Silbermine', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40037, 'Spitzhacke', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40038, 'Vergrabener Schatz', 'CARD', 'PLUNDER', 5, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40039, 'Sack voll Kostb.', 'CARD', 'PLUNDER', 6, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40040, 'Königstruhe', 'CARD', 'PLUNDER', 7, false, null);
INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40041, 'Kostbarkeiten', 'EXTRA_CARD', 'PLUNDER', null, false, null);
    
    -- TRAITS
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40042, 'Aufdringlich', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40043, 'Benachbart', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40044, 'Billig', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40045, 'Eilig', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40046, 'Freundlich', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40047, 'Fromm', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40048, 'Geduldig', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40049, 'Geerbt', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40050, 'Inspirierend', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40051, 'Reich', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40052, 'Scheu', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40053, 'Unermüdlich', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40054, 'Verflucht', 'TRAIT', 'PLUNDER', null, null, true); -- (!)Fluch
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40055, 'Vorherbestimmt', 'TRAIT', 'PLUNDER', null, null, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40056, 'Waghalsig', 'TRAIT', 'PLUNDER', null, null, false);
    
    -- EVENTS
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40057, 'Vergraben', 'EVENT', 'PLUNDER', 1, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40058, 'Ausweichen', 'EVENT', 'PLUNDER', 2, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40059, 'Beeilung', 'EVENT', 'PLUNDER', 2, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40060, 'Riskieren', 'EVENT', 'PLUNDER', 2, true, true);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40061, 'Zustellung', 'EVENT', 'PLUNDER', 2, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40062, 'Brandschatzung', 'EVENT', 'PLUNDER', 3, true, true);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40063, 'In See Stechen', 'EVENT', 'PLUNDER', 3, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40064, 'Herumsuchen', 'EVENT', 'PLUNDER', 3, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40065, 'Spiegeln', 'EVENT', 'PLUNDER', 3, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40066, 'Vorbereitung', 'EVENT', 'PLUNDER', 3, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40067, 'Mahlstrom', 'EVENT', 'PLUNDER', 4, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40068, 'Reise', 'EVENT', 'PLUNDER', 4, true, false);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40069, 'Plünderung', 'EVENT', 'PLUNDER', 6, true, true);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40070, 'Aufblühen', 'EVENT', 'PLUNDER', 10, true, true);
    INSERT INTO resources (resource_id, resource_name, resource_category, expansion, cost, has_landscape_orientation, is_linked) VALUES (40071, 'Invasion', 'EVENT', 'PLUNDER', 10, true, true);


-- Tabelle: CARD_PROPERTIES                                                                                                                                       +Act  +2Act  +Buy  +2Draw  Trash  Curse
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40001, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40002, true, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40003, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40004, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40005, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40006, false, false, false, false, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40007, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40008, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40009, false, false, false, true, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40010, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40011, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40012, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40013, true, true, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40014, true, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40015, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40016, true, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40017, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40018, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40019, false, false, false, false, false, true);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40020, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40021, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40022, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40023, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40024, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40025, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40026, true, true, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40027, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40028, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40029, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40030, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40031, false, false, true, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40032, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40033, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40034, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40035, false, false, false, true, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40036, false, false, false, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40037, false, false, false, false, true, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40038, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40039, false, false, true, false, false, false);
INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40040, false, false, false, false, false, false);

    -- Zusätzliche Karten mit Flüchen
    INSERT INTO card_properties (resource_id, has_plus_action, has_plus_multiple_actions, has_plus_buy, has_plus_multiple_draws, has_trash, has_curse) VALUES (40045, null, null, null, null, null, true); -- Merkmal "Verflucht"

-- Tabelle: CARD_TYPES
INSERT INTO card_types (resource_id, card_type) VALUES (40001, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40001, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40002, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40003, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40003, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40004, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40004, 'REACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40004, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40005, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40005, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40006, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40006, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40006, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (40007, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40007, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40008, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40009, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40010, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40010, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40010, 'COMMAND');
INSERT INTO card_types (resource_id, card_type) VALUES (40011, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40012, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40012, 'REACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40013, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40013, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40014, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40014, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40015, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40016, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40017, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40018, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40018, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40018, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (40019, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40019, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (40020, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40020, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40021, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40021, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40022, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40022, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40022, 'ATTACK');
INSERT INTO card_types (resource_id, card_type) VALUES (40023, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40024, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40024, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40025, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40025, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40026, 'ACTION');
INSERT INTO card_types (resource_id, card_type) VALUES (40027, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40028, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40028, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40029, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40029, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40030, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40031, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40031, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40032, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40032, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40033, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40034, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40035, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40036, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40037, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40038, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40038, 'DURATION');
INSERT INTO card_types (resource_id, card_type) VALUES (40039, 'TREASURE');
INSERT INTO card_types (resource_id, card_type) VALUES (40040, 'TREASURE');

-- Tabelle: CARD_DEPENDENCIES
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40003, 40041);   -- Suche, Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40006, 10020);   -- Sirene, Fluch
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40019, 10020);   -- Gauner, Fluch
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40022, 40041);   -- Meuchlerin, Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40026, 40041);   -- Wohlhabendes Dorf, Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40027, 40041);   -- Juwelen-Ei, Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40037, 40041);   -- Spitzhacke, Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40039, 40041);   -- Sack voll Kostbarkeiten , Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40054, 10020);   -- Merkmal "Verflucht" , Fluch
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40054, 40041);   -- Merkmal "Verflucht" , Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40060, 40041);   -- Event "Riskieren" , Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40062, 40041);   -- Event "Brandschatzung" , Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40069, 40041);   -- Event "Plünderung" , Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40070, 40041);   -- Event "Aufblühen" , Kostbarkeiten
INSERT INTO card_dependencies (resource_id, dependency_id) VALUES (40071, 40041);   -- Event "Invasion" , Kostbarkeiten