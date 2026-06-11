DROP PROCEDURE IF EXISTS updateMitarbeiterLogin;
DELIMITER $$

CREATE PROCEDURE updateMitarbeiterLogin(IN p_neuer_nachname VARCHAR(255), IN p_bewohner_id DECIMAL(8,0))
MODIFIES SQL DATA
BEGIN
UPDATE MITARBEITER m
INNER JOIN BEWOHNER b
    ON m.BEWOHNER_ID = b.BEWOHNER_ID
SET
    b.NACHNAME = p_neuer_nachname,
    m.LOGIN = LOWER(CONCAT(LEFT(b.VORNAME, 1), '.', p_neuer_nachname))
WHERE b.BEWOHNER_ID = p_bewohner_id;
END $$

DELIMITER ;
