DROP PROCEDURE IF EXISTS getActiveVehicles;
DELIMITER $$

CREATE PROCEDURE getActiveVehicles()
READS SQL DATA
BEGIN
SELECT
    COALESCE(SUM(CASE WHEN asset_status IN ('im Einsatz', 'im Flug') THEN 1 ELSE 0 END), 0) AS active_vehicles_count,
    COALESCE(SUM(CASE WHEN asset_status IS NULL OR asset_status NOT IN ('im Einsatz', 'im Flug') THEN 1 ELSE 0 END), 0) AS inactive_vehicles_count,
    COUNT(*) AS total_vehicles_count
FROM (
    SELECT F_STATUS AS asset_status FROM FAHRZEUGE
    UNION ALL
    SELECT RF_STATUS AS asset_status FROM RAUMFAHRZEUG
) combined_assets;
END $$

DELIMITER ;
